import { Roboto } from "next/font/google";
import { Bruno_Ace_SC } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";

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
  title: "BrandAndBrandz",
  description: "One Stop for end to end services",
  icons:{
    icon: "/favicon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
