import type { Metadata, Viewport } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import ShootingStars from "@/components/ShootingStars";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/header";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import Preloader from "@/components/preloader";
import EasterEggs from "@/components/easter-eggs";
import { config } from "@/data/config";

export const metadata: Metadata = {
  metadataBase: new URL(config.site),
  title: config.title,
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Jared Kong",
    locale: "en_SG",
    url: config.site,
    title: config.title,
    description: config.description.long,
    images: [
      {
        url: "/assets/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jared Kong — Full-Stack & AI Agent Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.long,
    images: ["/assets/seo/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[archivoBlack.className, inter.variable].join(" ")}
    >
      <head>
        <Script
          defer
          src={process.env.UMAMI_DOMAIN}
          data-website-id={process.env.UMAMI_SITE_ID}
        ></Script>
        {/* <Analytics /> */}
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <ShootingStars
            className="fixed inset-0 -z-10 animate-fade-in"
            starCount={150}
            shootingStarCount={5}
            minSpeed={3}
            maxSpeed={8}
          />
          <Preloader>
            <TooltipProvider>
              <Header />
              {children}
              <Footer />
            </TooltipProvider>
            <Toaster />
            <EasterEggs />
          </Preloader>
        </ThemeProvider>
      </body>
    </html>
  );
}
