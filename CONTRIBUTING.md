# Contributing

Thanks for helping build **Research Methodology Hub** — an open-source set of
research-methodology guides across disciplines. Contributions are welcome,
whether it's a fix, a new methodology guide, or a product improvement.

- Repository: <https://github.com/Research-Methodology-Hub/Research-Methodologies>
- Questions & ideas: open a [Discussion](https://github.com/Research-Methodology-Hub/Research-Methodologies/discussions)

## Before you start

- **Bugs & small fixes** → open a pull request directly.
- **New features or a new methodology guide** → open an Issue or Discussion first
  so we can agree on scope before you invest time.
- Keep each PR **focused on one concern**. Several small PRs beat one large one.

## Development setup

The web app lives in [`web/`](web/) (React + Vite + TypeScript).

```bash
cd web
npm ci          # install exact dependencies
npm run dev     # start the dev server
```

Adding a new methodology guide is just one file: create
`web/src/guide/methodologies/<id>.ts` and register it in
`web/src/guide/methodologies/index.ts`.

## Before opening a PR

Run the same checks CI runs, from `web/`:

```bash
npm run lint
npm run build   # also type-checks via `tsc -b`
```

Both must pass. Include before/after screenshots for any UI change.

## Pull request conventions

- **Branch** off `main`, e.g. `feat/health-methodology` or `fix/nav-active-state`.
- **PR title must follow [Conventional Commits](https://www.conventionalcommits.org/)** —
  this is enforced by CI and used for squash-merge messages and future changelogs:

  ```
  <type>(optional scope): short description
  ```

  Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`,
  `build`, `ci`, `chore`. Examples:

  ```
  feat(guide): add health research methodology
  fix(web): correct active state on nav links
  ci: pin action versions
  ```

- Keep commits **atomic** and the history clean (rebase rather than merge `main` in).
- Fill in the PR template, link the related issue, and self-review your diff.

## AI-assisted contributions

This project is built with the help of AI agents, so **AI-assisted PRs are
welcome**. If a PR is partly or fully AI-generated, please:

- Tick the AI-assistance box in the PR template, and
- Confirm you have **reviewed and understand every change** you're submitting.

PRs submitted with no human review will be asked for changes.

## Code of conduct

Be respectful and constructive. We want this to be a welcoming space for
researchers and contributors of all backgrounds.

## License

By contributing, you agree that your contributions are licensed under the
project's [Apache License 2.0](LICENSE).
