"use client";

import { TitleHeading } from "@/components/title-section";
import { useTranslations } from "next-intl";

const TeamSection = () => {
  const t = useTranslations("HomePage.team");

  const teamMembers = [
    {
      name: t("nghiaPham.name"),
      role: t("nghiaPham.role"),
      image: "team-1.png",
    },
    {
      name: t("huyDang.name"),
      role: t("huyDang.role"),
      image: "team-2.png",
    },
    {
      name: t("sarahJohnson.name"),
      role: t("sarahJohnson.role"),
      image: "team-1.png",
    },
    {
      name: t("mikeWilson.name"),
      role: t("mikeWilson.role"),
      image: "team-2.png",
    },
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <TitleHeading des={t("description")}>
          <span className="text-primary">{t("our")}</span>
        </TitleHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center group cursor-pointer"
              data-aos="fade-right"
              data-aos-delay={index * 250}
            >
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-primary text-xs leading-relaxed">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
