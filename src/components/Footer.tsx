import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">David Battistelli</h3>
              <p className="text-gray-400">
                Ingegnere Meccanico e sviluppatore Python, specializzato in analisi tecnica, ottimizzazione e sviluppo di applicazioni pratiche.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Link rapidi</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-primary-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary-400 transition-colors">
                    Chi Sono
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-primary-400 transition-colors">
                    Competenze
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-primary-400 transition-colors">
                    Progetti
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary-400 transition-colors">
                    Contatti
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Social</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/davidbattistelli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:david.battistelli@hotmail.it"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {currentYear} David Battistelli. Tutti i diritti riservati.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Creato con ❤️ usando React, TypeScript e Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

