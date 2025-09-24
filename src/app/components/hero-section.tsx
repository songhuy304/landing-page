"use client";

import Banner from "@/styles/images/home-page/bg.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const t = useTranslations("HomePage");
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Background fixed */}
      <Image
        src={Banner}
        alt="LHF Banner"
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 w-full container">
        <div className="max-w-2xl px-6 md:px-8">
          <h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            data-aos="fade-up"
          >
            {t("heroTitle")}
          </h1>
          <p
            className="mt-6 text-base md:text-lg text-white/80"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("heroSub")}
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
            <Button size="lg" asChild className="group">
              <Link href="/">
                {t("heroCta")}{" "}
                <span
                  aria-hidden
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  →
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
