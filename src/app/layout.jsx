import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import WhatsAppButton from "./components/whatsappbutton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    template: "%s | Mega Repuestos",
    default: "Mega Repuestos | Repuestos de Celulares en Berazategui",
  },
  description:
    "Venta de repuestos para celulares en Berazategui: pantallas, baterías, cargadores, flex y más. Mega Repuestos, tu solución en repuestos.",
  metadataBase: new URL("https://repuestosmega.com.ar"),
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://repuestosmega.com.ar",
    siteName: "Mega Repuestos",
    title: "Mega Repuestos | Repuestos de Celulares en Berazategui",
    description: "Venta de repuestos para celulares en Berazategui: pantallas, baterías, cargadores, flex y más.",
    images: [
      {
        url: "/images/megarepuestos.png",
        width: 800,
        height: 600,
        alt: "Mega Repuestos - Tienda de repuestos para celulares en Berazategui",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mega Repuestos | Repuestos de Celulares en Berazategui",
    description: "Venta de repuestos para celulares en Berazategui: pantallas, baterías, cargadores, flex y más.",
    images: ["/images/megarepuestos.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  verification: {
    google: "google65ffb4a8fe1fcf4f.html", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-[calc(4rem+48px)] md:pt-[calc(5rem+64px)] lg:pt-[calc(6rem+72px)]">
            {children}
          </main>
          <WhatsAppButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}