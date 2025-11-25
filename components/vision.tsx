export default function Vision() {
  return (
    <section id="vision" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Nuestra Visión</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            Para el 2031 seremos una empresa ya posicionada con gran influencia a nivel distrital, desarrollando,
            aumentando y mejorando nuestro amplio portafolio de servicios-terapias para apoyar a adultos y adultos
            mayores que presenten trastornos del piso pélvico.
          </p>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Brindaremos un servicio integral, de fácil acceso y de la más alta calidad, posicionándonos como referente
            en la rehabilitación del piso pélvico a nivel distrital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="p-6 bg-white rounded-xl border border-secondary/30 hover:border-primary/30 transition-colors">
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
            </div>
            <h3 className="font-serif text-lg font-bold text-primary text-center mb-2">Posicionamiento Regional</h3>
            <p className="text-foreground/70 text-center text-sm">
              Convertirnos en referente en tratamiento de trastornos del piso pélvico a nivel distrital.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-secondary/30 hover:border-primary/30 transition-colors">
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
            </div>
            <h3 className="font-serif text-lg font-bold text-primary text-center mb-2">Portafolio Expandido</h3>
            <p className="text-foreground/70 text-center text-sm">
              Ampliar y mejorar continuamente nuestros servicios y terapias especializadas.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-secondary/30 hover:border-primary/30 transition-colors">
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">❤️</span>
              </div>
            </div>
            <h3 className="font-serif text-lg font-bold text-primary text-center mb-2">Acceso Fácil</h3>
            <p className="text-foreground/70 text-center text-sm">
              Garantizar que nuestros servicios sean de fácil acceso para toda la población objetivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
