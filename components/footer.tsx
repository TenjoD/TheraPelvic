export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold">TP</span>
              </div>
              <span className="font-serif font-semibold">TheraPelvic</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Rehabilitación especializada del piso pélvico con enfoque humanizado.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Prenatal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Postparto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Incontinencia
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Disfunción Sexual
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Aviso Legal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; 2025 TheraPelvic S.A.S. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
