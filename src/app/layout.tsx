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
      icon: [{ url: "/favicon.png" }],
    },
    alternates: {
      languages: {
        vi: "/vi",
        ja: "/ja",
      },
    },
    keywords: ["IT", "Whitepace", "phần mềm"],
    authors: [{ name: "Whitepace" }],
    creator: t("title"),
    publisher: t("title"),
    openGraph: {
      type: "website",
      locale: "ja",
      url: "https://www.whitepace.vn",
      title: t("title"),
      description: t("description"),
      siteName: t("title"),
      images: [
        {
          url: "/logo.svg",
          width: 1200,
          height: 630,
          alt: "Whitepace",
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
