import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProjectById } from '../data/projectsData'
import { FiArrowLeft, FiExternalLink, FiFileText } from 'react-icons/fi'

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>()
  const navigate = useNavigate()
  const project = projectId ? getProjectById(projectId) : undefined

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [projectId])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <main className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Project Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"><FiArrowLeft /> Back to Portfolio</Link>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-10">
        <div className="container-custom py-4 px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate('/')} className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"><FiArrowLeft /> Back to Portfolio</button>
        </div>
      </header>
      <main>
        <section className="relative min-h-[24rem] flex items-end overflow-hidden bg-slate-950">
          {project.showHeroImage !== false && <img src={project.image} alt="" className="absolute inset-0 w-full h-full object-cover" />}
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="relative w-full px-4 py-10 sm:p-8">
            <div className="max-w-5xl mx-auto">
              <span className="inline-block max-w-full px-3 py-1 bg-primary-600 text-white rounded-xl text-sm font-medium mb-4">{project.category}</span>
              <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight break-words">{project.title}</h1>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-4xl">{project.description}</p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-7" aria-label="Project documents">
                {project.documents.map((document) => (
                  <a key={document.url} data-document-link href={document.url} target="_blank" rel="noopener noreferrer" aria-label={document.title + ' (' + document.description + ', opens in a new tab)'} className="inline-flex items-center gap-3 px-4 py-3 rounded-lg border border-white/40 bg-slate-900/80 text-white hover:bg-slate-700 transition-colors">
                    <FiFileText className="text-xl shrink-0" aria-hidden="true" />
                    <span className="min-w-0"><span className="block font-semibold">{document.title}</span><span className="block text-xs text-gray-200 mt-0.5">{document.description}</span></span>
                    <FiExternalLink className="ml-auto shrink-0" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="container-custom py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-5">Overview</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">{project.fullDescription}</p>
              </section>
              <figure className="bg-white border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden">
                <img src={project.image} alt={project.imageAlt} className="w-full max-h-96 object-contain p-4" loading="lazy" />
                <figcaption className="px-4 py-3 bg-gray-50 dark:bg-slate-800 text-sm text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-slate-700">{project.imageCaption}</figcaption>
              </figure>
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-5">Method & Contribution</h2>
                <ul className="space-y-3">
                  {project.contributions.map((item) => <li key={item} className="flex gap-3 text-gray-600 dark:text-gray-300"><span className="text-primary-600 dark:text-primary-400" aria-hidden="true">•</span><span>{item}</span></li>)}
                </ul>
              </section>
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-5">Results & Deliverables</h2>
                <ul className="space-y-3">
                  {project.outcomes.map((item) => <li key={item} className="flex gap-3 text-gray-600 dark:text-gray-300"><span className="text-green-600 dark:text-green-400" aria-hidden="true">✓</span><span>{item}</span></li>)}
                </ul>
              </section>
            </div>
            <aside>
              <div className="sticky top-24 space-y-6">
                <section className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Project Details</h2>
                  <dl className="space-y-4">
                    {Object.entries({ Period: project.details.duration, Role: project.details.role, Location: project.details.location }).map(([label,value]) => (
                      <div key={label}><dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</dt><dd className="text-gray-900 dark:text-gray-100 mt-1">{value}</dd></div>
                    ))}
                  </dl>
                </section>
                <section className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Tools & Methods</h2>
                  <div className="flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="px-3 py-1.5 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium">{technology}</span>)}</div>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProjectDetail
