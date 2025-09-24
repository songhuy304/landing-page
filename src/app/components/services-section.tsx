"use client";

import { TitleHeading } from "@/components/title-section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const ServicesSection = () => {
  const t = useTranslations("HomePage.services");

  const services = [
    {
      icon: "🌐",
      title: t("webDevelopment.title"),
      description: t("webDevelopment.description"),
      color: "text-pink-500",
    },
    {
      icon: "🎨",
      title: t("graphicDesign.title"),
      description: t("graphicDesign.description"),
      color: "text-green-500",
    },
    {
      icon: "💻",
      title: t("uiUxDesign.title"),
      description: t("uiUxDesign.description"),
      color: "text-purple-500",
    },
    {
      icon: "🛠️",
      title: t("toolsDevelopment.title"),
      description: t("toolsDevelopment.description"),
      color: "text-orange-500",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <TitleHeading des={t("description")}>
          <span className="text-gray-900">Our </span>
          <span className="bg-gradient-to-r from-pink-50 to-pink-100 px-2 py-1 rounded-md">
            Services
          </span>
        </TitleHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={cn(
                "p-6 shadow-lg border-none bg-white rounded-2xl",
                "transition-transform duration-300 ease-in-out",
                "rounded-tr-[80px]"
              )}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <Button
                variant="ghost"
                className={cn("group p-0", service.color)}
              >
                {t("readMore")}{" "}
                <span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
