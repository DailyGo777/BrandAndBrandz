export const metadata = {
  title: "About Us | Brand & Brandz - Creative Branding Agency",
  description:
    "Learn more about Brand & Brandz – the creative branding agency that turns bold ideas into powerful brand experiences through design, storytelling, and strategy.",
  robots: "index, follow",
  openGraph: {
    title: "About Us | Brand & Brandz",
    description:
      "We help brands grow through design, strategy, and creativity. Meet the team behind Brand & Brandz.",
    url: "https://brandandbrandz.com/about",
    images: [
      {
        url: "https://brandandbrandz.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Brand and Brandz",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://brandandbrandz.com/about",
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}