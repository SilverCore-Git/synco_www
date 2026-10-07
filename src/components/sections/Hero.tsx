import Image from "next/image";
import Nav from "@/components/ui/Nav";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="grid grid-cols-1 md:min-h-[66vh] md:grid-cols-[25%_1fr]"
    >
      <div className="order-first flex items-end bg-brand px-3 py-3 md:py-4">
        <LanguageSwitcher />
      </div>

      <div className="flex min-h-[420px] flex-col px-3 py-3">
        <Nav />
        <div className="flex flex-1 items-center justify-center py-16">
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
      </div>
    </section>
  );
}
