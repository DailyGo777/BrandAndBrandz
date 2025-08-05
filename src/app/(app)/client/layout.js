export const metadata = {
  title: "Our Clients | Brand & Brandz - Trusted by Top Brands",
  description:
    "Discover the brands that trust Brand & Brandz. We’ve partnered with industry leaders to deliver impactful branding and marketing solutions.",
  robots: "index, follow",
  openGraph: {
    title: "Our Clients | Brand & Brandz",
    description:
      "Explore our portfolio of clients and see how Brand & Brandz delivers powerful branding experiences.",
    url: "https://brandandbrandz.com/client",
    images: [
      {
        url: "https://brandandbrandz.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brand and Brandz Clients",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://brandandbrandz.com/client",
  },
};


export default function ClientLayout({ children }) {
  return <>{children}</>;
}