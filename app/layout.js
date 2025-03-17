import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portafolio - Casarez",
  description: "Portafolio personal de Casarez, desarrollador Full Stack con experiencia en React, Next.js y más.",
  keywords: "portafolio, desarrollador, full stack, React, Next.js, JavaScript, Casarez",
  author: "Casarez",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://portafolio-casarez.vercel.app/",
    siteName: "Portafolio Casarez",
    title: "Portafolio - Casarez",
    description: "Portafolio personal de Casarez, desarrollador Full Stack.",
    images: [
      {
        url: "/imagen-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Vista previa del portafolio de Casarez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio - Casarez",
    description: "Portafolio personal de Casarez, desarrollador Full Stack.",
    image: "/imagen-portfolio.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
