const services = [
  {
    title: "Prenatal - Baby on the Way",
    description:
      "Programa integral para acompañar tu embarazo con valoración física trimestral, terapia manual, entrenamiento pélvico y actividad física.",
    icon: "🤰",
  },
  {
    title: "Postparto - New Baby",
    description:
      "Recuperación integral post parto con evaluación completa, telemedicina, ejercicio terapéutico y vibración terapéutica.",
    icon: "👶",
  },
  {
    title: "Incontinencia - Power Bladder",
    description:
      "Tratamiento especializado para incontinencia urinaria con biofeedback, electroestimulación y reeducación del piso pélvico.",
    icon: "💪",
  },
  {
    title: "Incontinencia Infantil - Power Bladder Kids",
    description:
      "Programa enfocado en niños para el control de esfínteres mediante terapia manual, conciencia corporal y educación a padres.",
    icon: "🧒",
  },
  {
    title: "Disfunción Sexual - Return Sexuality",
    description:
      "Recuperación de la función sexual con terapia manual pélvica, biofeedback y ondas de choque (hombres).",
    icon: "❤️",
  },
  {
    title: "Estreñimiento - By Estreñimiento",
    description:
      "Reeducación defecatoria, terapia manual y biofeedback para mejorar el tránsito intestinal y función pélvica.",
    icon: "✨",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Paquetes terapéuticos especializados diseñados para cada etapa de vida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">{service.description}</p>
              <button className="text-accent hover:text-primary transition font-medium text-sm">Conocer más →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
