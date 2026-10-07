import Nav from "@/components/ui/Nav";
import Hero from "@/components/sections/Hero";

const upcomingSections = ["technologie", "fonctionnement", "tarif", "faq"];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {upcomingSections.map((id) => (
          <section key={id} id={id} className="min-h-svh" />
        ))}
      </main>
    </>
  );
}
