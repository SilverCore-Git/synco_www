import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container relative">
          <div className="py-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-md">
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Comment nous protégeons et utilisons vos informations
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16" viewBox="0 0 1200 64" preserveAspectRatio="none">
            <path d="M0 64V0C200 40 400 20 600 32C800 44 1000 32 1200 0V64H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      <Section id="content" className="py-3xl">
        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-muted-foreground mb-xl">
            Cette politique de confidentialité décrit comment Synco („nous“, „notre“ ou „nos“) collecte, utilise et divulgue vos informations lorsque vous utilisez notre site web et nos services.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">1. Informations que nous collectons</h2>
          <p className="text-muted-foreground mb-lg">
            Nous pouvons collecter et traiter les informations suivantes à votre sujet :
          </p>
          <ul className="space-y-sm mb-xl text-muted-foreground">
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Informations personnelles que vous nous fournissez volontairement, telles que votre nom, adresse e-mail, numéro de téléphone, lorsqu\'elle remplissez des formulaires ou nous contactez.</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Informations sur votre utilisation de notre site web, y compris vos préférences et paramètres.</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Informations techniques telles que votre adresse IP, type de navigateur, fournisseur d\'accès Internet, et autres informations de diagnostic.</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Données d\'utilisation telles que les pages que vous visitez, le temps passé sur chaque page, et autres statistiques.</span>
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">2. Comment nous utilisons vos informations</h2>
          <p className="text-muted-foreground mb-lg">
            Nous utilisons les informations que nous collectons à diverses fins :
          </p>
          <ul className="space-y-sm mb-xl text-muted-foreground">
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Pour fournir et maintenir notre service</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Pour vous notifier des changements apportés à notre service</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Pour vous permettre de participer à des fonctionnalités interactives de notre service lorsque vous choisissez de le faire</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Pour fournir une assistance client</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Pour recueillir des analyses ou informations précieuses afin que nous puissions améliorer notre service</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Pour surveiller l\'utilisation de notre service</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Pour détecter, prévenir et traiter les problèmes techniques</span>
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">3. Partage de vos informations</h2>
          <p className="text-muted-foreground mb-xl">
            Nous ne vendons, n\'échangeons ni ne louons vos informations personnelles identifiables à des tiers. Nous pouvons partager vos informations avec des tiers uniquement dans les cas suivants :
          </p>
          <ul className="space-y-sm mb-xl text-muted-foreground">
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Avec des prestataires de services qui nous aident à exploiter notre service et à vous fournir ces services</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Pour nous conformer à une obligation légale ou à une demande des autorités compétentes</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Pour protéger les droits, la propriété ou la sécurité de Synco ou d\'autres</span>
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">4. Sécurité de vos informations</h2>
          <p className="text-muted-foreground mb-xl">
            La sécurité de vos données est importante pour nous. Nous utilisons des mesures de sécurité commerciales raisonnables pour protéger vos informations personnelles contre la perte, le vol, l\'utilisation abusée et l\'accès non autorisé, la divulgation, l\'altération et la destruction.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">5. Conservation de vos informations</h2>
          <p className="text-muted-foreground mb-xl">
            Nous conserverons vos informations aussi longtemps que nécessaire pour les finalités pour lesquelles elles ont été collectées, y compris pour nous conformer à nos obligations légales, résoudre les litiges et faire respecter nos accords.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">6. Vos droits</h2>
          <p className="text-muted-foreground mb-lg">
            Vous avez le droit de :
          </p>
          <ul className="space-y-sm mb-xl text-muted-foreground">
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Accéder à vos informations personnelles et obtenir une copie de celles-ci</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Corriger ou mettre à jour vos informations</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Supprimer vos informations</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Vous opposer au traitement de vos informations</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Porter plainte auprès d\'une autorité de protection des données</span>
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">7. Cookies</h2>
          <p className="text-muted-foreground mb-xl">
            Nous utilisons des cookies pour suivre l\'activité sur notre service et conserver certaines informations. Vous pouvez instruire votre navigateur de refuser tous les cookies ou d\'indiquer quand un cookie est envoyé. Cependant, si vous n\'acceptez pas les cookies, vous ne pourrez peut-être pas utiliser certaines parties de notre service.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">8. Modifications de cette politique</h2>
          <p className="text-muted-foreground mb-xl">
            Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous notifierons de tout changement en publiant la nouvelle politique de confidentialité sur cette page.
          </p>
          <p className="text-muted-foreground mb-xl">
            Vous êtes conseillé de consulter cette politique de confidentialité périodiquement pour tout changement. Les modifications de cette politique de confidentialité entrent en vigueur lorsqu\'elles sont publiées sur cette page.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">9. Contactez-nous</h2>
          <p className="text-muted-foreground mb-xl">
            Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter à l\'adresse contact@synco.com.
          </p>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
