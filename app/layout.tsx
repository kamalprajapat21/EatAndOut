import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Eat And Out Cafe | Best Cafe in Mahaveer Nagar II, Kota",
  description: "Enjoy delicious food, premium coffee, desserts, and a cozy atmosphere at Eat And Out Cafe in Mahaveer Nagar II, Kota, Rajasthan.",
  keywords: ["Cafe in Kota", "Best Cafe in Kota", "Coffee Shop Kota", "Eat And Out Cafe", "Mahaveer Nagar Cafe", "Restaurant Kota", "Pizza Kota", "Coffee Kota"],
  authors: [{ name: "Eat And Out Cafe" }],
  creator: "Eat And Out Cafe",
  publisher: "Eat And Out Cafe",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://eatandoutcafe.com",
    title: "Eat And Out Cafe | Best Cafe in Mahaveer Nagar II, Kota",
    description: "Enjoy delicious food, premium coffee, desserts, and a cozy atmosphere at Eat And Out Cafe in Mahaveer Nagar II, Kota, Rajasthan.",
    siteName: "Eat And Out Cafe",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eat And Out Cafe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eat And Out Cafe | Best Cafe in Mahaveer Nagar II, Kota",
    description: "Enjoy delicious food, premium coffee, desserts, and a cozy atmosphere at Eat And Out Cafe in Mahaveer Nagar II, Kota, Rajasthan.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4E342E" />
      </head>
      <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
