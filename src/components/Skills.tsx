import { FaPython, FaGitAlt } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { MdEngineering, MdAnalytics, MdTrendingUp, MdFunctions, MdBuild } from 'react-icons/md'

interface Skill {
  name: string
  icon: React.ReactNode
  level: number
  category: 'technical' | 'digital' | 'management'
}

const skills: Skill[] = [
  // Technical
  { name: 'Python', icon: <FaPython />, level: 75, category: 'technical' },
  { name: 'Ansys', icon: <MdEngineering />, level: 70, category: 'technical' },
  { name: 'SolidWorks', icon: <MdBuild />, level: 85, category: 'technical' },
  { name: 'Equation Solver', icon: <MdFunctions />, level: 75, category: 'technical' },
  { name: 'MATLAB', icon: <MdAnalytics />, level: 85, category: 'technical' },
  
  // Digital
  { name: 'Sviluppo Web/App Python', icon: <FaPython />, level: 75, category: 'digital' },
  { name: 'JavaScript', icon: <SiJavascript />, level: 60, category: 'digital' },
  { name: 'Automazioni', icon: <FaPython />, level: 73, category: 'digital' },
  
  // Management
  { name: 'Gestione Affitti Brevi', icon: <MdAnalytics />, level: 85, category: 'management' },
  { name: 'Ottimizzazione Listing', icon: <MdTrendingUp />, level: 80, category: 'management' },
  { name: 'Git', icon: <FaGitAlt />, level: 75, category: 'management' },
]

const Skills = () => {
  const categories = {
    technical: 'Competenze Tecniche',
    digital: 'Sviluppo Digitale',
    management: 'Gestione & Operazioni',
  }

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category)
  }

  const getLevelLabel = (level: number): string => {
    if (level >= 80) return 'Avanzato'
    if (level >= 60) return 'Intermedio'
    return 'Base'
  }

  return (
    <section
      id="skills"
      className="section-padding bg-gradient-to-br from-gray-50 to-primary-50"
    >
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Competenze
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-12"></div>

          <div className="space-y-12">
            {Object.entries(categories).map(([categoryKey, categoryName]) => (
              <div key={categoryKey}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{categoryName}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getSkillsByCategory(categoryKey).map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-4xl text-primary-600">
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{skill.name}</h4>
                          <span className="text-sm font-semibold text-primary-600">{getLevelLabel(skill.level)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

