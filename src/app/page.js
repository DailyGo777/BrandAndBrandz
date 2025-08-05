import Hero from "../components/Hero";
import About from "../components/About";
import Card from "../components/Card";
import Services from "../components/Services";
import ChooseUs from "../components/ChooseUs";
import Review from "../components/Review";
import Footer from "../components/Footer";
import Header from "@/components/Header";

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
