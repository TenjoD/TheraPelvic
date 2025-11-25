import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary leading-tight">
              Tu Salud Pélvica es Nuestra Prioridad
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Rehabilitación especializada del piso pélvico con enfoque integral y humanizado. Mejora tu calidad de vida
              con nuestros profesionales certificados y tecnología de punta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium">
                Conocer Servicios
              </button>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <Image
                src="/therapelvic-logo.png"
                alt="Therapelvic Logo - Fisioterapia"
                width={500}
                height={500}
                className="w-full h-full object-contain"
                priority
                quality={95}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
