import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container relative">
          <div className="py-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-md">
              Conditions Générales d\'Utilisation
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Les conditions régissant l\'utilisation de nos services
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
            Bienvenue sur le site web de Synco ! Ces conditions générales d\'utilisation („Conditions“, „Conditions d\'Utilisation“) constituent un accord entre vous („l\'Utilisateur“) et Synco („Synco“, „nous“, „notre“ ou „nos“) concernant l\'utilisation de notre site web et des services associés („Service“).
          </p>

          <p className="text-muted-foreground mb-xl">
            Votre accès et votre utilisation du Service sont conditionnés par votre acceptation et votre conformité à ces Conditions. Ces Conditions s\'appliquent à tous les visiteurs, utilisateurs et autres personnes qui accèdent au Service ou l\'utilisent.
          </p>

          <p className="text-muted-foreground mb-xl">
            En accédant au Service ou en l\'utilisant, vous acceptez d\'être lié par ces Conditions d\'Utilisation, y compris toutes les lois et réglementations applicables. Si vous n\'êtes pas d\'accord avec l\'un quelconque de ces termes, vous n\'avez pas le droit d\'utiliser ou d\'accéder à notre Service.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">1. Comptes</h2>
          <p className="text-muted-foreground mb-lg">
            Lorsque vous créez un compte avec nous, vous garantissez que les informations que vous nous fournissez sont exactes, complètes et actuelles à tout moment. Vous vous engagez à mettre à jour immédiatement vos informations en cas de changement.
          </p>
          <p className="text-muted-foreground mb-xl">
            Vous êtes responsable de la sauvegarde de votre mot de passe et des informations de votre compte, ainsi que de toutes les activités qui se produisent sous votre compte (que ces activités soient effectuées par vous ou par d\'autres).
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">2. Propriété intellectuelle</h2>
          <p className="text-muted-foreground mb-xl">
            Le Service et son contenu original (à l\'exclusion des contenus fournis par les utilisateurs), les caractéristiques et la fonctionnalité sont et resteront la propriété exclusive de Synco et de ses concédants de licence.
          </p>
          <p className="text-muted-foreground mb-xl">
            Le nom commercial et les marques commerciales de Synco ne peuvent être copiés, imités ou utilisés, en totalité ou en partie, sans autorisation écrite préalable de Synco.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">3. Utilisation du Service</h2>
          <p className="text-muted-foreground mb-lg">
            Vous acceptez de ne pas :
          </p>
          <ul className="space-y-sm mb-xl text-muted-foreground">
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Copier, modifier ou créer des œuvres dérivées basées sur le Service ou tout contenu accessible via le Service</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Accéder ou tenter d\'accéder au Service par tout moyen autre que l\'interface que nous fournissons</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Utiliser le Service pour toute activité illégale ou non autorisée</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Transmettre tout virus, code destructeur ou contenu dommageable</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Recueillir ou suivre les informations personnelles d\'autrui</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="text-primary mt-xs">•</span>
              <span>Envoyer des communications non sollicitées (spam)</span>
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">4. Contenu généré par l\'Utilisateur</h2>
          <p className="text-muted-foreground mb-xl">
            Vous conservez tous les droits de propriété intellectuelle sur tout contenu que vous soumettez au Service („Contenu de l\'Utilisateur“). En soumettant un Contenu de l\'Utilisateur, vous nous accordez une licence irrévocable, perpétuelle, non exclusive, mondiale, libre de droits, sublicenciable et transférable pour utiliser, reproduire, modifier, adapter, publier, traduire, créer des œuvres dérivées, distribuer, distribuer, exécuter et afficher ce Contenu de l\'Utilisateur (en tout ou en partie) et pour incorporer celui-ci dans d\'autres œuvres, sous quelque forme, support ou technologie que ce soit, et pour promouvoir le Service.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">5. Liens vers des sites tiers</h2>
          <p className="text-muted-foreground mb-xl">
            Notre Service peut contenir des liens vers des sites web ou services de tiers qui ne sont pas détenus ou contrôlés par Synco. Synco n\'a aucun contrôle sur le contenu, les politiques de confidentialité ou les pratiques de ces sites ou services de tiers et n\'assume aucune responsabilité à leur égard. Vous reconnaissez et acceptez que Synco ne soit pas responsable, directement ou indirectement, de tout dommage ou perte causée ou prétendument causée par ou en relation avec l\'utilisation ou la confiance en tout contenu, bien ou service accessible sur ou via ces sites ou services.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">6. Résiliation</h2>
          <p className="text-muted-foreground mb-xl">
            Nous pouvons mettre fin ou suspendre votre compte et barricader votre accès au Service immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, y compris, sans s\'y limiter, en cas de violation de ces Conditions d\'Utilisation.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">7. Indemnisation</h2>
          <p className="text-muted-foreground mb-xl">
            Vous acceptez d\'indemniser et de tenir Synco et ses affiliés, dirigeants, employés et partenaires, quittes de toute réclamation ou demande, y compris les honoraires raisonnables d\'avocat, émise par tout tiers en raison de ou en relation avec votre utilisation du Service, votre violation de ces Conditions d\'Utilisation ou votre violation de toute loi ou des droits de toute personne.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">8. Exclusion de Garantie</h2>
          <p className="text-muted-foreground mb-xl">
            LE SERVICE EST FOURNI „TEL QUEL“ ET „SELON DISPONIBILITÉ“. SYNCO, SES AFFILIÉS, DIRECTEURS, EMPLOYÉS, PARTICIPANTS ET CONCÉDANTS DE LICENCE (COLLECTIVEMENT DÉSIGNÉS PAR „PARTENAIRES DE SYNCO“) DÉCLINENT TOUTE GARANTIE DE QUELQUE NATURE QUE CE SOIT, EXPRESSE OU IMPLICITE, Y COMPRIS TOUTE GARANTIE DE COMMERCIALISATION, D\'ADÉQUATION À UN USAGE PARTICULIER ET DE NON-VIOLATION.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">9. Limitation de Responsabilité</h2>
          <p className="text-muted-foreground mb-xl">
            EN AUCUN CAS SYNCO, SES PARTENAIRES OU L\'UN QUELCONQUE DE LEURS FOURNISSEURS DE SERVICES (COLLECTIVEMENT „PARTIES RESPONSABLES“) NE SERONT RESPONSABLES DE QUELCONQUE DOMAINE, BLESSURE OU PERTE DE QUELQUE NATURE QUE CE SOIT, y compris, sans limitation, des dommages indirects, accessoires, punitifs, exemplaires ou consécutifs, y compris, sans limitation, les pertes de revenus, de bénéfices, de données ou d\'utilisation, résulant de ou étant liés de quelque manière que ce soit à votre utilisation du Service ou à d\'autres interactions avec les Parties Responsables.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">10. Loi Applicable</h2>
          <p className="text-muted-foreground mb-xl">
            Ces Conditions seront régies et interprétées conformément aux lois de la France, sans égard à ses principes de conflit de lois.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">11. Résolution des Litiges</h2>
          <p className="text-muted-foreground mb-xl">
            Tout litige découlant de ou lié à ces Conditions sera résolu de manière définitive par voie d\'arbitrage conformément au Règlement d\'arbitrage de la Chambre de commerce internationale.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">12. Divisibilité</h2>
          <p className="text-muted-foreground mb-xl">
            Si une disposition quelconque de ces Conditions est jugée illégale, invalide ou inapplicable, cette disposition sera néanmoins appliquée dans la mesure permise par la loi, et la partie non applicable sera considérée comme étant dissociée de ces Conditions, sans affecter la validité et l\'applicabilité de toute autre disposition.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">13. Intégralité de l\'Accord</h2>
          <p className="text-muted-foreground mb-xl">
            Ces Conditions constituent l\'intégralité de l\'accord et de l\'entente entre vous et Synco concernant votre utilisation du Service et remplacent tous les accords antérieurs entre vous et Synco.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">14. Modifications des Conditions</h2>
          <p className="text-muted-foreground mb-xl">
            Nous nous réservons le droit de modifier ou de remplacer ces Conditions à tout moment. Si une révision est importante, nous vous informerons par e-mail. En continuant à accéder au Service ou à l\'utiliser après la publication des révisions, vous acceptez les termes modifiés.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-lg">15. Contactez-nous</h2>
          <p className="text-muted-foreground mb-xl">
            Si vous avez des questions concernant ces Conditions d\'Utilisation, vous pouvez nous contacter à l\'adresse contact@synco.com.
          </p>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
