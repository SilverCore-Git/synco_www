'use client';

import { useState, useEffect } from 'react';
import Button from './Button';

export default function CTASection() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(now.toLocaleTimeString('fr-FR', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="cta-section">
      <div className="container">
        <div className="py-3xl">
          <div className="grid lg:grid-cols-2 gap-xl items-center">
            <div>
              <div className="inline-block bg-white/20 rounded-full px-md py-sm mb-md">
                <span className="text-white font-semibold text-sm">Prêt à commencer ?</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-md">
                Transformez votre business dès aujourd\'hui
              </h2>
              
              <p className="text-lg text-white/80 mb-xl">
                Ne laissez pas vos concurrents prendre de l\'avance. Contactez-nous dès maintenant pour discuter de vos besoins et découvrir comment Synco peut vous aider à atteindre vos objectifs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-md">
                <Button href="/contact" variant="secondary" size="lg">
                  Demander une consultation gratuite
                </Button>
                <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Voir nos services
                </Button>
              </div>

              <p className="text-sm text-white/60 mt-md">
                Disponible 24/7 - Dernière mise à jour: {time}
              </p>
            </div>

            <div className="relative">
              <img
                src="/synco_icons/light_banner_synco.svg"
                alt="Synco - Prêt pour le futur"
                className="w-full h-auto max-w-md mx-auto"
              />
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-white/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
