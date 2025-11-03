import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  status?: string
}

const projects: Project[] = [
  {
    title: 'App Gestione Tasse per Forfettari',
    description: 'Applicazione in sviluppo per semplificare la gestione fiscale e contabile dei titolari di Partita IVA in regime forfettario. Focus su user experience semplificata e automazione dei calcoli fiscali.',
    technologies: ['Python', 'Logica Fiscale', 'UX Design', 'MVP'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    status: 'In sviluppo (Concept → MVP)',
    featured: true,
  },
  {
    title: 'Villa Nadia - Gestione Affitti Brevi',
    description: 'Villa di grandi dimensioni con piscina privata di acqua salata, gestita come affitto breve su Booking. Focus su gestione operativa, ottimizzazione delle recensioni e miglioramento continuo della guest experience.',
    technologies: ['Gestione Operativa', 'Booking.com', 'Customer Experience', 'Ottimizzazione'],
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
    featured: true,
  },
  {
    title: 'Analisi Growth Rate e Piastre Stabilizzatrici',
    description: 'Studio tecnico-ingegneristico per la riduzione del Growth Rate tramite ottimizzazione di angoli e geometrie delle piastre stabilizzatrici. Analisi dati, modellazione geometrica e ottimizzazione strutturale.',
    technologies: ['Analisi Dati', 'Ottimizzazione', 'Modellazione Geometrica', 'Ingegneria Meccanica'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
  },
]

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section
      id="projects"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Progetti
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-12"></div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Progetti in evidenza</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <div
                    key={project.title}
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-white/90 text-gray-900 rounded-lg hover:bg-white transition-colors"
                            >
                              <FaGithub /> Codice
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                            >
                              <FaExternalLinkAlt /> Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                      {project.status && (
                        <span className="inline-block px-3 py-1 bg-primary-600 text-white rounded-full text-xs font-semibold mb-3">
                          {project.status}
                        </span>
                      )}
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Altri progetti</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.title}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 bg-white/90 text-gray-900 rounded-lg hover:bg-white transition-colors text-sm"
                          >
                            <FaGithub />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

