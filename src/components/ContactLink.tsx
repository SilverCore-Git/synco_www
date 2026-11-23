import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_ENABLED } from '../data/site';

/**
 * Lien vers la partie Contact (/#contact). Tant que CONTACT_ENABLED est à false,
 * il s'affiche sans être cliquable (grisé, avec l'info-bulle « Bientôt disponible »).
 */
export default function ContactLink({ className = '', children }: { className?: string; children: ReactNode }) {
  if (CONTACT_ENABLED) {
    return (
      <Link to="/#contact" className={className}>
        {children}
      </Link>
    );
  }
  return (
    <span aria-disabled="true" title="Bientôt disponible" className={`${className} cursor-not-allowed opacity-40`}>
      {children}
    </span>
  );
}
