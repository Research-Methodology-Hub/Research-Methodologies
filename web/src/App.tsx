import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Catalogue from './pages/Catalogue'
import GuideEntry from './pages/GuideEntry'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/methodologies" element={<Catalogue />} />
      <Route path="/guide/:id" element={<GuideEntry />} />
      <Route path="/guide" element={<Navigate to="/methodologies" replace />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
