export const metadata = {
  title: "Meet the Team | Brand & Brandz - Creative Minds Behind the Magic",
  description:
    "Get to know the passionate and creative team behind Brand & Brandz. We are storytellers, designers, and strategists.",
  robots: "index, follow",
  openGraph: {
    title: "Meet the Team | Brand & Brandz",
    description:
      "Meet the Brand & Brandz team – a collective of creative professionals dedicated to crafting powerful brand identities.",
    url: "https://brandandbrandz.com/team",
    images: [
      {
        url: "https://brandandbrandz.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Team at Brand and Brandz",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://brandandbrandz.com/team",
  },
};

export default function TeamLayout({ children }) {
  return <>{children}</>;
}