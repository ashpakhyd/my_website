import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "S.U.GROUP - Your Home Services, Just a Tap Away",
  description: "Book electricians, plumbers, cleaners & 20+ services instantly. 24/7 emergency service with verified professionals. Transparent pricing and quality guarantee.",
  keywords: "home services, electrician, plumber, carpenter, AC repair, cleaning services, pest control, home maintenance",
  openGraph: {
    title: "S.U.GROUP - Home Service Management Platform",
    description: "Book trusted home service professionals instantly",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
