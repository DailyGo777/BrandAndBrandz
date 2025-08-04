import Head from "next/head";
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
    <>
      <Head>
        <title>Brand and Brandz - Premium Marketing Solutions</title>
        <meta
          name="description"
          content="Brand and Brandz is your strategic growth partner offering expert marketing, branding, and digital services tailored for success."
        />
        <meta
          name="keywords"
          content="Brand and Brandz, marketing agency, digital marketing, branding services, growth strategy, SEO, social media, content creation, website development, offline advertising, offline promotion, event manpower, logo designing, BTL"
        />
        <meta name="author" content="Brand and Brandz" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Brand and Brandz - Premium Marketing Solutions"
        />
        <meta
          property="og:description"
          content="Expert marketing and branding services to elevate your business. Let's grow together."
        />
        <meta
          property="og:image"
          content="https://brandandbrandz.com/og-image.png"
        />
        <meta property="og:url" content="https://brandandbrandz.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="Brand and Brandz - Premium Marketing Solutions"
        />
        <meta
          name="twitter:description"
          content="Expert marketing and branding services to elevate your business. Let's grow together."
        />
        <meta
          name="twitter:image"
          content="https://brandandbrandz.com/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical */}
        <link rel="canonical" href="https://brandandbrandz.com/" />
      </Head>

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
    </>
  );
}
