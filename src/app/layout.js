import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import img from "../../public/telephone.png";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Google Ads Landing",
  description: "Created for google ads landing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased`}>
        {children}

        <a
          href="tel:+919048689977"
          className="fixed bottom-6 right-6 z-50"
        >
          <Image
            src={img}
            width={56}
            height={56}
            alt="call us"
            className="w-14 h-14"
          />
        </a>
        </body>

      

    </html>
  );
}
