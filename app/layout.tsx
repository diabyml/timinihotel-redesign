import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Timini Hôtel | L'Élégance au Cœur de Ségou",
    template: "%s | Timini Hôtel"
  },
  description: "Découvrez une hospitalité authentique où le luxe moderne rencontre la tradition malienne. Hôtel éco-responsable à Ségou avec piscine, restaurant et salles de conférence.",
  keywords: ["Hôtel Ségou", "Hôtel Mali", "Timini", "Hébergement Ségou", "Tourisme Mali", "Éco-responsable", "Luxe Ségou", "Hôtel avec piscine Ségou"],
  authors: [{ name: "Timini Hôtel" }],
  creator: "Timini Hôtel",
  publisher: "Timini Hôtel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Timini Hôtel | L'Élégance au Cœur de Ségou",
    description: "Découvrez une hospitalité authentique où le luxe moderne rencontre la tradition malienne.",
    url: "https://timinihotel.com",
    siteName: "Timini Hôtel",
    locale: "fr_ML",
    type: "website",
    images: [
      {
        url: "/images/hero-cinematic.png",
        width: 1200,
        height: 630,
        alt: "Timini Hôtel - Architecture et Piscine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timini Hôtel | L'Élégance au Cœur de Ségou",
    description: "Découvrez une hospitalité authentique où le luxe moderne rencontre la tradition malienne.",
    images: ["/images/hero-cinematic.png"],
  },
  alternates: {
    canonical: "https://timinihotel.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
