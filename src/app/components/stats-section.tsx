"use client";

import { NumberTicker } from "@/components/ui/animated-number";
import { useTranslations } from "next-intl";
import React from "react";

export default function StatsSection() {
  const t = useTranslations("HomePage.stats");

  const items = [
    {
      value: 12,
      title: t("teamMembers"),
      suffix: "+",
    },
    {
      value: 30,
      title: t("products"),
      suffix: "+",
    },
    {
      value: 98,
      title: t("satisfaction"),
      suffix: "%",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-3 md:py-20">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-extrabold tracking-[0.03em] text-[#0A0A0A] md:text-4xl">
                <NumberTicker value={item.value} />
                {item.suffix}
              </div>
              <p className="mt-3 text-sm leading-6 text-[#0A0A0A]/70 md:text-base">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
