import { appendFileSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const docExtensions = new Set([".adoc", ".ipynb", ".md", ".mdx", ".rst", ".txt"]);
const codeExtensions = new Set([
  ".c",
  ".cc",
  ".cpp",
  ".cs",
  ".css",
  ".go",
  ".h",
  ".hpp",
  ".html",
  ".java",
  ".js",
  ".jsx",
  ".kt",
  ".mjs",
  ".mts",
  ".php",
  ".py",
  ".rb",
  ".rs",
  ".scala",
  ".sh",
  ".sql",
  ".swift",
  ".ts",
  ".tsx",
  ".vue",
]);

const docFiles = new Set([
  "README",
  "README.md",
  "CHANGELOG",
  "CHANGELOG.md",
  "CONTRIBUTING",
  "CONTRIBUTING.md",
  "LICENSE",
]);

const platformFiles = new Set([
  "Dockerfile",
  "docker-compose.yml",
  "docker-compose.yaml",
  "package.json",
  "package-lock.json",
  "pnpm-lock.yaml",
  "yarn.lock",
  "requirements.txt",
  "pyproject.toml",
  "poetry.lock",
  "Pipfile",
  "Pipfile.lock",
  "Makefile",
]);

const docDirs = ["doc/", "docs/", "documentation/", "guides/", "methodologies/", "templates/"];
const platformDirs = [".github/", ".devcontainer/", "ci/", "infra/", "scripts/", "tools/"];
const pluginDirs = ["plugins/", "plugin/", "extensions/", "integrations/", "subsystems/"];

function readOptions(argv) {
  const options = {
    manifest: "preflight-scope.json",
    summary: "preflight-scope.md",
  };

  for (let index = 0; index < argv.length; index += 1) {
    const flag = argv[index];
    if (flag !== "--manifest" && flag !== "--summary") {
      continue;
    }
    options[flag.slice(2)] = argv[index + 1];
    index += 1;
  }

  return options;
}

function cleanPath(filePath) {
  return filePath.trim().replaceAll("\\", "/").replace(/^\.\/+/, "");
}

function hasPrefix(filePath, prefixes) {
  return prefixes.some((prefix) => filePath.startsWith(prefix));
}

function extensionFor(filePath) {
  return path.posix.extname(filePath).toLowerCase();
}

function isDoc(filePath) {
  if (docFiles.has(filePath)) {
    return true;
  }
  if (hasPrefix(filePath, docDirs)) {
    return true;
  }
  return docExtensions.has(extensionFor(filePath));
}

function isPlatform(filePath) {
  if (platformFiles.has(filePath)) {
    return true;
  }
  return hasPrefix(filePath, platformDirs);
}

function isPlugin(filePath) {
  return hasPrefix(filePath, pluginDirs);
}

function isCode(filePath) {
  return codeExtensions.has(extensionFor(filePath));
}

function areaFor(filePath) {
  if (isPlugin(filePath)) {
    return "plugins";
  }
  if (isPlatform(filePath)) {
    return "platform";
  }
  if (isDoc(filePath)) {
    return "docs";
  }
  if (isCode(filePath)) {
    return "code";
  }
  return "other";
}

function detectScope(input) {
  const changedFiles = [...new Set(input.map(cleanPath).filter(Boolean))].sort();
  const areas = [...new Set(changedFiles.map(areaFor))].sort();
  const docsOnly = changedFiles.length > 0 && changedFiles.every(isDoc);
  const code = changedFiles.some(isCode);
  const platform = changedFiles.some(isPlatform);
  const plugins = changedFiles.some(isPlugin);

  return {
    changed_files: changedFiles,
    file_count: changedFiles.length,
    areas,
    docs_only: docsOnly,
    code,
    platform,
    plugins,
    run_heavy_suites: !docsOnly,
  };
}

function writeManifest(manifest, filePath) {
  writeFileSync(filePath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

function writeSummary(manifest, filePath) {
  const lines = [
    "# Preflight scope",
    "",
    `- Files changed: ${manifest.file_count}`,
    `- Areas: ${manifest.areas.join(", ") || "none"}`,
    `- Docs only: ${String(manifest.docs_only)}`,
    `- Code changed: ${String(manifest.code)}`,
    `- Platform changed: ${String(manifest.platform)}`,
    `- Plugin subsystem changed: ${String(manifest.plugins)}`,
    `- Run heavy suites: ${String(manifest.run_heavy_suites)}`,
  ];

  if (manifest.changed_files.length > 0) {
    lines.push("", "## Changed files", "");
    lines.push(...manifest.changed_files.map((changedFile) => `- \`${changedFile}\``));
  }

  writeFileSync(filePath, `${lines.join("\n")}\n`, "utf8");
}

function appendOutputs(manifest, manifestPath) {
  const outputs = {
    areas: manifest.areas.join(","),
    docs_only: String(manifest.docs_only),
    code: String(manifest.code),
    platform: String(manifest.platform),
    plugins: String(manifest.plugins),
    run_heavy_suites: String(manifest.run_heavy_suites),
    manifest_path: manifestPath,
  };

  if (!process.env.GITHUB_OUTPUT) {
    process.stdout.write(`${JSON.stringify(manifest, null, 2)}\n`);
    return;
  }

  const content = Object.entries(outputs)
    .map(([key, value]) => `${key}=${value}`)
    .join("\n");

  appendFileSync(process.env.GITHUB_OUTPUT, `${content}\n`, "utf8");
}

const options = readOptions(process.argv.slice(2));
const input = readFileSync(0, "utf8").split(/\r?\n/);
const manifest = detectScope(input);

writeManifest(manifest, options.manifest);
writeSummary(manifest, options.summary);
appendOutputs(manifest, options.manifest);
