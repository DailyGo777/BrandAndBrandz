export const metadata = {
  title: "Contact Us | Brand & Brandz - Let's Build Together",
  description:
    "Get in touch with Brand & Brandz to discuss your branding and marketing needs. Let’s create something amazing together.",
  robots: "index, follow",
  openGraph: {
    title: "Contact Brand & Brandz",
    description:
      "Reach out to the Brand & Brandz team for inquiries, collaborations, or to start your branding journey.",
    url: "https://brandandbrandz.com/contact",
    images: [
      {
        url: "https://brandandbrandz.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Brand and Brandz",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://brandandbrandz.com/contact",
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}