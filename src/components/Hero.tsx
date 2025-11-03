import { useRef } from 'react'
import { HiArrowDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6 animate-slide-up">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
              👋 Benvenuto nel mio portfolio
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="block text-gray-900">Ciao, sono</span>
            <span className="block bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              David Battistelli
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Ingegnere Meccanico & Sviluppatore Python
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Combinando analisi tecnica e sviluppo software per creare soluzioni concrete, dalla progettazione meccanica alle applicazioni digitali.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-primary-50 transition-all hover:scale-110 text-gray-700 hover:text-primary-600"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/davidbattistelli/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-primary-50 transition-all hover:scale-110 text-gray-700 hover:text-primary-600"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:david.battistelli@hotmail.it"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-primary-50 transition-all hover:scale-110 text-gray-700 hover:text-primary-600"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                const projects = document.querySelector('#projects')
                projects?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Vedi i miei progetti
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const contact = document.querySelector('#contact')
                contact?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 border-2 border-primary-600"
            >
              Contattami
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-gray-500 hover:text-primary-600 transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-sm mb-2">Scopri di più</span>
            <HiArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

