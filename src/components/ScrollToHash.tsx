import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Ancres qui ramènent en haut de la page plutôt que sur leur section. */
const TOP_ANCHORS = new Set(['accueil']);

/** Fait défiler vers l'ancre (#tarif, #faq…) après une navigation, ou remonte en haut de page. */
export default function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    // Laisse la page se rendre avant de chercher l'élément.
    const raf = requestAnimationFrame(() => {
      // #accueil = tout en haut de la page, pour que la nav reste visible.
      if (TOP_ANCHORS.has(id)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash, key]);

  return null;
}
