export default function Tagline() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[25%_1fr]">
      <div className="hidden md:block" />
      <div className="bg-brand px-6 py-12 md:px-8 lg:px-12 lg:py-14">
        <p className="max-w-[15em] text-3xl leading-[1.9] font-semibold tracking-tighter md:text-4xl lg:text-5xl">
          La collaboration d’équipe sans compromis sur la sécurité.
        </p>
      </div>
    </section>
  );
}
