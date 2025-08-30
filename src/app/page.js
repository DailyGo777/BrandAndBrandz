import dynamic from "next/dynamic";
import Hero from "../components/Hero";
import Header from "@/components/Header";

// Dynamic Imports for non-critical sections
const About = dynamic(() => import("../components/About"), {
  loading: () => <p>Loading About...</p>,
});
const Card = dynamic(() => import("../components/Card"), {
  loading: () => <p>Loading Card...</p>,
});
const Services = dynamic(() => import("../components/Services"), {
  loading: () => <p>Loading Services...</p>,
});
const ChooseUs = dynamic(() => import("../components/ChooseUs"), {
  loading: () => <p>Loading ChooseUs...</p>,
});
const Review = dynamic(() => import("../components/Review"), {
  loading: () => <p>Loading Review...</p>,
});
const Footer = dynamic(() => import("../components/Footer"));
 
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
