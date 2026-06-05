import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'primary' | 'gradient';
}

export default function Section({
  children,
  className = '',
  id,
  background = 'white',
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-background',
    gray: 'bg-muted',
    primary: 'bg-primary text-white',
    gradient: 'gradient-primary text-white',
  };

  return (
    <section
      id={id}
      className={`section ${backgroundClasses[background]} ${className}`}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
}
