import Footer from "@/components/Footer";
import About from "@/components/About";
import Card from "@/components/Card";
import Services from "@/components/Services";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Card />
      <Services />
      <Footer />
    </main>
  );
}
