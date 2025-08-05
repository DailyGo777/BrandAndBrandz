export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brand & Brandz",
  url: "https://brandandbrandz.com",
  logo: "https://brandandbrandz.com/og-image.png",
  sameAs: [
    "https://www.instagram.com/brandandbrandz_/?igsh=emZldnJiOG9nbGti#",
    "https://www.linkedin.com/company/brandandbrandz",
  ],
  description:
    "Brand & Brandz is a creative branding agency that transforms bold ideas into powerful brand experiences through design, storytelling, and strategy.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Banglore",
    addressRegion: "Karnataka",
    postalCode: "560043",
    streetAddress: "1st floor, palmarcade, horamavu main road, kalkere,",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 85500 00895",
    contactType: "Customer Service",
    areaServed: "IN",
  },
  foundingDate: "2025",
  founder: {
    "@type": "Person",
    name: "Shivaraj",
  },
};
