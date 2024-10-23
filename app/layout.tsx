import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "frasvial",
  description: "Especialistas en construcciones, excavaciones y más.",
  openGraph: {
    title: "Frasvial",
    description: "Especialistas en construcciones, excavaciones y más.",
    url: "https://www.frasvial.com/",
    siteName: "Frasvial",
    images: [
      {
        url: "/frasvialpong.png",
        width: 550,
        height: 320,
        alt: "Imagen de construcción en Frasvial",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frasvial",
    description: "Especialistas en construcciones, excavaciones y más.",
    images: ["/frasvialpong.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
