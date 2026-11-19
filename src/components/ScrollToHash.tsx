import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash, key]);

  return null;
}
