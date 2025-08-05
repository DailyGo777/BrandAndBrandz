export const metadata = {
  title: "Our Services | Brand & Brandz - Creative Branding Solutions",
  description:
    "Explore Brand & Brandz’s full suite of creative services – branding, marketing, design, and strategy to grow your business.",
  robots: "index, follow",
  openGraph: {
    title: "Creative Services | Brand & Brandz",
    description:
      "Discover how Brand & Brandz helps businesses scale with expert branding, marketing strategy, and design services.",
    url: "https://brandandbrandz.com/service",
    images: [
      {
        url: "https://brandandbrandz.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Services Offered by Brand and Brandz",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://brandandbrandz.com/service",
  },
};

export default function ServiceLayout({ children }) {
  return <>{children}</>;
}