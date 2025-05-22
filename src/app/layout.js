import localFont from "next/font/local";
import "./globals.css";

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

// Metadata base más genérico - será sobrescrito por las páginas específicas
export const metadata = {
  title: {
    template: '%s | Mega Repuestos',
    default: 'Mega Repuestos | Repuestos de Celulares en Berazategui',
  },
  description: "Venta de repuestos para celulares en Berazategui: pantallas, baterías, cargadores, flex y más. Mega Repuestos, tu solución en repuestos.",
  metadataBase: new URL('https://repuestosmega.com.ar'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://repuestosmega.com.ar',
    siteName: 'Mega Repuestos',
  },
  twitter: {
    card: 'summary_large_image',
  },
    icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
