import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProjectById } from '../data/projectsData'
import { FiArrowLeft, FiExternalLink, FiFileText, FiGithub } from 'react-icons/fi'

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>()
  const navigate = useNavigate()
  const project = projectId ? getProjectById(projectId) : undefined

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            <FiArrowLeft />
            Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <FiGithub />
      case 'pdf':
        return <FiFileText />
      default:
        return <FiExternalLink />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      {/* Header with back button */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-10">
        <div className="container-custom py-4">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <FiArrowLeft />
            Back to Portfolio
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <span className="inline-block px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-200">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Overview
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {project.fullDescription || project.description}
                  </p>
                </div>
              </section>

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    Challenges
                  </h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-gray-600 dark:text-gray-300"
                      >
                        <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Outcomes */}
              {project.outcomes && project.outcomes.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    Outcomes & Impact
                  </h2>
                  <ul className="space-y-3">
                    {project.outcomes.map((outcome, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-gray-600 dark:text-gray-300"
                      >
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Documents */}
              {project.documents && project.documents.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    Documents & Resources
                  </h2>
                  <div className="space-y-3">
                    {project.documents.map((doc, index) => (
                      <a
                        key={index}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg hover:border-primary-500 dark:hover:border-primary-500 transition-all group"
                      >
                        <span className="text-2xl text-primary-600 dark:text-primary-400">
                          {getDocumentIcon(doc.type)}
                        </span>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {doc.title}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                            {doc.type}
                          </p>
                        </div>
                        <FiExternalLink className="text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                      </a>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Project Details */}
                {project.details && (
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      Project Details
                    </h3>
                    <dl className="space-y-3">
                      {project.details.duration && (
                        <div>
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Duration
                          </dt>
                          <dd className="text-gray-900 dark:text-gray-100">
                            {project.details.duration}
                          </dd>
                        </div>
                      )}
                      {project.details.role && (
                        <div>
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Role
                          </dt>
                          <dd className="text-gray-900 dark:text-gray-100">
                            {project.details.role}
                          </dd>
                        </div>
                      )}
                      {project.details.team && (
                        <div>
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Team
                          </dt>
                          <dd className="text-gray-900 dark:text-gray-100">
                            {project.details.team}
                          </dd>
                        </div>
                      )}
                      {project.details.location && (
                        <div>
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Location
                          </dt>
                          <dd className="text-gray-900 dark:text-gray-100">
                            {project.details.location}
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>
                )}

                {/* Technologies */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium"
                  >
                    View Project
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
