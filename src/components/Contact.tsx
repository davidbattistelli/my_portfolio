import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-50"
    >
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Contatti
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-12"></div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contattami
                </h3>
                <p className="text-gray-600 mb-8">
                  Hai un progetto ingegneristico o di sviluppo software? 
                  Sono aperto a nuove opportunità professionali e collaborazioni. Preferisco comunicazioni scritte, chiare e strutturate.
                </p>
              </div>

              <div className="flex justify-center mb-8">
                <a
                  href="mailto:david.battistelli@hotmail.it"
                  className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-lg group-hover:bg-primary-600 transition-colors">
                    <FaEnvelope className="text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold text-gray-900">david.battistelli@hotmail.it</p>
                  </div>
                </a>
              </div>

              <div className="flex justify-center gap-4 pt-4">
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
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-primary-50 transition-all hover:scale-110 text-gray-700 hover:text-primary-600"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="mailto:david.battistelli@hotmail.it"
                  className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-primary-50 transition-all hover:scale-110 text-gray-700 hover:text-primary-600"
                  aria-label="Email"
                >
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

