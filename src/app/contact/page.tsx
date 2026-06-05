'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Section from '@/components/Section';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setSubmitStatus({
      success: true,
      message: 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.',
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);

    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'contact@synco.com',
      href: 'mailto:contact@synco.com',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Téléphone',
      value: '+33 1 23 45 67 89',
      href: 'tel:+33123456789',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Adresse',
      value: '123 Rue de la Technologie, 75000 Paris, France',
      href: 'https://www.google.com/maps?q=123+Rue+de+la+Technologie,+75000+Paris,+France',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container relative">
          <div className="py-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-md">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Nous serions ravis d\'entendre parler de votre projet et de discuter de la manière dont nous pouvons vous aider.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16" viewBox="0 0 1200 64" preserveAspectRatio="none">
            <path d="M0 64V0C200 40 400 20 600 32C800 44 1000 32 1200 0V64H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Contact Information */}
      <Section id="contact-info" className="py-3xl">
        <div className="text-center mb-3xl">
          <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
            <span className="text-primary font-semibold text-sm">Informations de Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-md">
            Comment nous contacter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            N\'hésitez pas à nous contacter par le moyen qui vous convient le mieux.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-xl">
          {contactMethods.map((method, index) => (
            <div key={index} className="card text-center">
              <div className="w-16 h-16 bg-primary-subtle rounded-xl flex items-center justify-center mx-auto mb-md text-primary">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-sm">{method.title}</h3>
              <p className="text-muted-foreground mb-md">{method.value}</p>
              <a
                href={method.href}
                className="btn btn-outline text-sm inline-flex items-center gap-sm"
              >
                {method.title === 'Email' ? 'Envoyer un email' : 
                 method.title === 'Téléphone' ? 'Appeler maintenant' : 
                 'Voir sur la carte'}
              </a>
            </div>
          ))}
        </div>

        {/* Business Hours */}
        <div className="mt-xl bg-muted rounded-2xl p-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-lg">Heures d\'ouverture</h3>
            <div className="grid md:grid-cols-2 gap-lg text-muted-foreground">
              <div>
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-semibold text-foreground">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between mt-sm">
                  <span>Samedi</span>
                  <span className="font-semibold text-foreground">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between mt-sm">
                  <span>Dimanche</span>
                  <span className="font-semibold text-foreground">Fermé</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Support technique</span>
                  <span className="font-semibold text-foreground">24/7</span>
                </div>
                <div className="flex justify-between mt-sm">
                  <span>Urgences</span>
                  <span className="font-semibold text-foreground">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Form */}
      <Section id="contact-form" background="gray">
        <div className="grid lg:grid-cols-2 gap-xl items-center">
          <div>
            <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
              <span className="text-primary font-semibold text-sm">Formulaire de Contact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-lg">
              Envoyez-nous un message
            </h2>
            <p className="text-lg text-muted-foreground mb-xl">
              Remplissez le formulaire ci-contre et notre équipe vous répondra dans les plus brefs délais, généralement dans les 24 heures.
            </p>

            <div className="space-y-lg">
              <div className="grid md:grid-cols-2 gap-lg">
                <div className="space-y-sm">
                  <label htmlFor="name" className="text-sm font-medium">Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-sm">
                  <label htmlFor="email" className="text-sm font-medium">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-lg">
                <div className="space-y-sm">
                  <label htmlFor="phone" className="text-sm font-medium">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>
                <div className="space-y-sm">
                  <label htmlFor="company" className="text-sm font-medium">Entreprise</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>
              <div className="space-y-sm">
                <label htmlFor="subject" className="text-sm font-medium">Sujet *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Sujet de votre message"
                />
              </div>
              <div className="space-y-sm">
                <label htmlFor="message" className="text-sm font-medium">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full"
                  placeholder="Décrivez votre projet ou posez votre question..."
                />
              </div>
              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                variant="primary"
                size="lg"
                className="w-full"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  'Envoyer le message'
                )}
              </Button>

              {submitStatus && (
                <div className={`
                  p-md rounded-lg 
                  ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                `}>
                  {submitStatus.message}
                </div>
              )}
            </div>
          </div>

          <div className="relative">
            <img
              src="/synco_icons/light_banner_synco.svg"
              alt="Contactez Synco"
              className="w-full h-auto max-w-md mx-auto"
            />
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary opacity-20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-primary opacity-10 rounded-full blur-3xl" />
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section id="map" className="py-3xl">
        <div className="text-center mb-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-md">
            Visitez-nous
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre bureau est situé au cœur de Paris. N\'hésitez pas à venir nous rendre visite !
          </p>
        </div>

        <div className="relative bg-muted rounded-2xl h-96 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <svg className="w-12 h-12 mx-auto mb-md opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-xl font-semibold">Carte interactive</p>
            <p className="text-sm mt-sm">Intégration Google Maps disponible</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent" />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
