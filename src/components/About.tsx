const About = () => {
  return (
    <section
      id="about"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Chi Sono
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-12"></div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-600">
              <div className="space-y-6">
                <p>
                  Sono uno <strong className="text-gray-900">studente di Ingegneria Meccanica</strong> con una forte passione per l'analisi tecnica, 
                  l'ottimizzazione dei processi e lo sviluppo software.
                </p>
                <p>
                  La mia formazione mi ha trasmesso un approccio razionale e orientato ai risultati, 
                  che applico sia nella progettazione meccanica sia nella creazione di soluzioni digitali.
                </p>
                <p>
                  Durante la <strong className="text-gray-900">laurea triennale in Ingegneria Industriale</strong> ho lavorato al progetto 
                  <strong className="text-gray-900"> TRUST</strong> (Tuscia Research University Small Tokamak), occupandomi dell'analisi e 
                  ottimizzazione della posizione delle piastre stabilizzatrici.
                </p>
                <p>
                  La mia tesi, sviluppata con <strong className="text-gray-900">MATLAB e MAXFEA</strong>, ha combinato modelli fisici 
                  (Filamentary e RZIP) e simulazioni FEM per individuare la configurazione ottimale in grado di ridurre il Growth Rate 
                  e le forze elettromagnetiche durante le fasi di disruption del plasma.
                </p>
              </div>

              <div className="space-y-6">
                <p>
                  Attualmente sto completando la <strong className="text-gray-900">laurea magistrale in Ingegneria Meccanica</strong>, 
                  all'interno della quale ho svolto tirocinio e tesi presso l'<strong className="text-gray-900">EPFL</strong> 
                  (École Polytechnique Fédérale de Lausanne). Qui ho sviluppato un framework per adattare il codice MEQ a TRUST, 
                  integrandolo con il software di simulazione del reattore TCV (Tokamak à Configuration Variable), estendendone la 
                  compatibilità e l'interoperabilità con altri strumenti di analisi.
                </p>
                <p>
                  Oltre all'ambito accademico, gestisco <strong className="text-gray-900">Villa Nadia</strong>, una struttura per affitti brevi 
                  che mi ha permesso di sviluppare competenze pratiche in organizzazione e gestione operativa.
                </p>
                <p>
                  Sono particolarmente interessato al mondo dell'<strong className="text-gray-900">imprenditoria e delle start-up</strong>, 
                  dove vedo l'opportunità di combinare competenze tecniche e analisi dei processi per creare soluzioni innovative. 
                  L'ecosistema delle start-up mi affascina per la sua capacità di trasformare idee in progetti concreti e per la dinamicità 
                  che caratterizza questi ambienti.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Formazione</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Laurea Magistrale in Ingegneria Meccanica</h4>
                    <p className="text-gray-600 text-sm">In corso</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Laurea Triennale in Ingegneria Industriale</h4>
                    <p className="text-gray-600 text-sm">Conseguita</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Interessi</h3>
                <div className="flex flex-wrap gap-2">
                  {['Tecnologie', 'Geopolitica', 'Project Development', 'Vela'].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

