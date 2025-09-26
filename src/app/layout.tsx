import Footer from "@/components/theme/footer";
import Header from "@/components/theme/header";
import "@/styles/globals.css";
import "aos/dist/aos.css";
// @ts-ignore
import Loader from "@/components/loader";
import InitAos from "@/components/theme/aos";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { Sawarabi_Mincho } from "next/font/google";
import type React from "react";

const sawarabiMincho = Sawarabi_Mincho({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  weight: ["400"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
    },
    alternates: {
      languages: {
        vi: "/vi",
        ja: "/ja",
      },
    },
    keywords: ["IT", "Shinku Labs", "phần mềm"],
    authors: [{ name: "Shinku Labs" }],
    creator: t("title"),
    publisher: t("title"),
    openGraph: {
      type: "website",
      locale: "ja",
      url: "https://www.Shinku Labs.vn",
      title: t("title"),
      description: t("description"),
      siteName: t("title"),
      images: [
        {
          url: "/favicon-32x32.png",
          width: 1200,
          height: 630,
          alt: "Shinku Labs",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      creator: t("title"),
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
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${sawarabiMincho.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <NextIntlClientProvider>
          <InitAos />
          <Loader />
          <Header />
          <main className="min-h-screen pb-16">{children}</main>
          <Footer />
          {/* <FloatingSocialButtons /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
