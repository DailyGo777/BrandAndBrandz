import { Roboto } from "next/font/google";
import { Bruno_Ace_SC } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import { jsonLd } from "@/utils/jsonLD";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const brunoAce = Bruno_Ace_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bruno",
  display: "swap",
});

export const metadata = {
  title: "Brand and Brandz - Premium Marketing Solutions",
  description:
    "Brand and Brandz is your strategic growth partner offering expert marketing, branding, and digital services tailored for success.",
  keywords:
    "Brand and Brandz, Brand, Brand and Brand, marketing agency, digital marketing, branding services, growth strategy, SEO, social media, content creation, website development, offline advertising, offline promotion, event manpower, logo designing, BTL",
  authors: [{ name: "Brand and Brandz" }],
  openGraph: {
    title: "Brand and Brandz - Premium Marketing Solutions",
    description:
      "Expert marketing and branding services to elevate your business. Let's grow together.",
    url: "https://brandandbrandz.com",
    type: "website",
    images: [
      {
        url: "https://brandandbrandz.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brand and Brandz OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand and Brandz - Premium Marketing Solutions",
    description:
      "Expert marketing and branding services to elevate your business. Let's grow together.",
    images: ["https://brandandbrandz.com/og-image.png"],
  },
  metadataBase: new URL("https://brandandbrandz.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${roboto.variable} ${brunoAce.variable}`}>
        {children}
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>
    </html>
  );
}
