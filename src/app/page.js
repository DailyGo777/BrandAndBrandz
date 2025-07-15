import Footer from "@/components/Footer";
import About from "@/components/About";
import Card from "@/components/Card";
import Services from "@/components/Services";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChooseUs from "@/components/ChooseUs";
import Review from "@/components/Review";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Card />
      <Services />
      <ChooseUs />
      <Review />
      <Footer />
    </main>
  );
}
