import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


// Configura fontes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata do site (SEO, OpenGraph, Favicon, etc.)
export const metadata = {
  title: "Carsvroom - Maintenance Subscription",
  description: "Join Carsvroom and take care of your car effortlessly.",
  openGraph: {
    title: "Carsvroom - Maintenance Subscription",
    description: "Subscribe to Carsvroom and keep your car healthy with our monthly maintenance plans.",
    url: "https://carsvroom.com",
    siteName: "Carsvroom",
    images: [
      {
        url: "https://carsvroom.com/flavicon.ico", // aqui usa a URL completa para OG
        width: 800,
        height: 600,
        alt: "Carsvroom Logo",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/flavicon.ico", // favicon para a aba do navegador
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
