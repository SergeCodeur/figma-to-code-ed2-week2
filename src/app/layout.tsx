import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import localFont from "next/font/local";
import Footer from "../components/footer";
import Header from "../components/header";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const chillax = localFont({
  src: "../assets/fonts/chillax/Chillax-Variable.ttf",
  variable: "--chillax-font",
});

export const metadata: Metadata = {
  title: "BALLAMAS",
  description: "E-commerce site for ballamas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} ${chillax.variable}`}>
        <main className="bg-white pt-29">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
