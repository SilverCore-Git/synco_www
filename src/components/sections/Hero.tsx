import Image from "next/image";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="grid min-h-svh grid-rows-[auto_1fr_auto] pt-10 md:grid-cols-[25%_1fr] md:grid-rows-[2fr_1fr] md:pt-0"
    >
      <div className="flex items-end bg-brand px-3 py-3 md:py-4">
        <LanguageSwitcher />
      </div>

      <div className="flex items-center justify-center px-3 pt-12 pb-12">
        <h1 className="w-1/2 max-w-md min-w-40 md:w-[30%]">
          <Image
            src="/logo.svg"
            alt="Synco"
            width={1550}
            height={500}
            priority
            className="h-auto w-full"
          />
        </h1>
      </div>

      <div className="hidden md:block" />

      <div className="flex items-center bg-brand px-6 py-10 md:px-8 lg:px-12">
        <p className="max-w-[15em] text-[clamp(1.75rem,3.75vw,3.5rem)] leading-[1.9] font-semibold tracking-tighter">
          La collaboration d’équipe sans compromis sur la sécurité.
        </p>
      </div>
    </section>
  );
}
