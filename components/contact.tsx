"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Contacta con Nosotros</h2>
          <p className="text-lg text-foreground/70">
            Completa el formulario para agendar tu consulta inicial o resolver tus dudas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-border">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Nombre</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Apellido</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Teléfono</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-primary mb-2">Servicio de Interés</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            >
              <option value="">Selecciona un servicio</option>
              <option value="prenatal">Prenatal - Baby on the Way</option>
              <option value="postpartum">Postparto - New Baby</option>
              <option value="incontinence">Incontinencia - Power Bladder</option>
              <option value="kids">Incontinencia Infantil - Power Bladder Kids</option>
              <option value="sexual">Disfunción Sexual - Return Sexuality</option>
              <option value="constipation">Estreñimiento - By Estreñimiento</option>
              <option value="other">Otro</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-primary mb-2">Mensaje</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Cuéntanos sobre ti y tus necesidades..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
          >
            Enviar Consulta
          </button>
        </form>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="font-serif text-lg font-bold text-primary mb-2">Ubicación</h4>
            <p className="text-foreground/70">
              Galerías, Teusaquillo
              <br />
              Bogotá, Colombia
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-primary mb-2">Horarios</h4>
            <p className="text-foreground/70">
              Lunes - Viernes
              <br />
              8:00 AM - 6:00 PM
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-primary mb-2">Contacto</h4>
            <p className="text-foreground/70">
              (601) XXX-XXXX
              <br />
              info@therapelvic.co
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
