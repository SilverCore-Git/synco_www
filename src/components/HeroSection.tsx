'use client';

import Button from './Button';

export default function HeroSection() {
  return (
    <section className="hero bg-gradient-to-br from-muted via-background to-muted">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-xl items-center min-h-[calc(100vh-4rem)]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-sm bg-primary-subtle rounded-full px-md py-sm mb-lg">
              <span className="text-primary font-semibold text-sm">Nouveau</span>
              <span className="text-muted-foreground text-sm">Solution IA disponible</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-lg">
              Transformez votre business avec 
              <span className="text-primary">Synco</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-xl max-w-lg mx-auto lg:mx-0">
              Des solutions technologiques innovantes et sur mesure pour accélérer votre transformation digitale et maximiser votre performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-md justify-center lg:justify-start">
              <Button href="/contact" variant="primary" size="lg">
                Demander une démo
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Découvrir nos services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-xl flex flex-wrap justify-center lg:justify-start gap-lg">
              <div className="flex items-center gap-sm text-muted-foreground">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">+500 clients satisfaits</span>
              </div>
              <div className="flex items-center gap-sm text-muted-foreground">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">10 ans d\'expérience</span>
              </div>
              <div className="flex items-center gap-sm text-muted-foreground">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Support 24/7</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <img
                src="/synco_icons/banner_synco.svg"
                alt="Synco Technology Illustration"
                className="w-full h-auto max-w-lg mx-auto"
              />
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary opacity-10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="hidden lg:block">
        <svg className="w-full h-16 text-background" viewBox="0 0 1200 64" preserveAspectRatio="none">
          <path d="M0 64V0C200 40 400 20 600 32C800 44 1000 32 1200 0V64H0Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
