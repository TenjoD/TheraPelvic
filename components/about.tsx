export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Quiénes Somos</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            En TheraPelvic brindamos atención especializada, integral y humanizada para la prevención, tratamiento y
            rehabilitación del piso pélvico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-secondary/30 rounded-xl border border-secondary/50">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary-foreground font-bold">✓</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-primary mb-3">Profesionales Certificados</h3>
            <p className="text-foreground/70">
              Equipo de fisioterapeutas con formación continua en técnicas modernas basadas en evidencia científica.
            </p>
          </div>

          <div className="p-8 bg-secondary/30 rounded-xl border border-secondary/50">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary-foreground font-bold">✓</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-primary mb-3">Tecnología de Punta</h3>
            <p className="text-foreground/70">
              Equipos especializados como biofeedback, electroestimulación y vibración terapéutica para mejores
              resultados.
            </p>
          </div>

          <div className="p-8 bg-secondary/30 rounded-xl border border-secondary/50">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary-foreground font-bold">✓</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-primary mb-3">Atención Integral</h3>
            <p className="text-foreground/70">
              Enfoque holístico que considera todas las dimensiones de tu bienestar: física, psicológica y social.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-accent/10 rounded-2xl p-10 border border-accent/20">
          <h3 className="font-serif text-2xl font-bold text-primary mb-4">Nuestra Misión</h3>
          <p className="text-foreground/70 leading-relaxed">
            Ofrecer servicios de rehabilitación especializados para atender pacientes con trastornos del piso pélvico,
            con un enfoque participativo del paciente y sus familiares, contribuyendo a su bienestar físico e incremento
            de su calidad de vida.
          </p>
        </div>
      </div>
    </section>
  )
}
