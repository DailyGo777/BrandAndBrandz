export const metadata = {
  title: "Careers | Brand & Brandz - Join Our Team",
  description:
    "Explore career opportunities at Brand & Brandz. Join a collaborative team working on exciting projects with real impact.",
  robots: "index, follow",
  openGraph: {
    title: "Careers | Brand & Brandz",
    description:
      "Open positions in Marketing, Business Development, and Full-Stack Development at Brand & Brandz.",
    url: "https://brandandbrandz.com/career",
    images: [
      {
        url: "https://brandandbrandz.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Careers at Brand and Brandz",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://brandandbrandz.com/career",
  },
};

export default function CareerLayout({ children }) {
  return <>{children}</>;
}
