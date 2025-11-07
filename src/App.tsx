import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectDetail from './components/ProjectDetail'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 transition-colors duration-500">
        <div className="mx-auto max-w-[2000px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

