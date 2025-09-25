"use client";

import { TitleHeading } from "@/components/title-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { ExternalLink, ImageIcon } from "lucide-react";
import Chip from "@/components/ui/chip";
import Image from "next/image";

import image1 from "@/styles/images/lhf-image.png";

const ProjectsSection = () => {
  const t = useTranslations("HomePage.projects");
  const common = t.raw("common") as {
    imagePending: string;
    techUsed: string;
  };

  // Array of project images
  const projectImages = [image1, image1, image1, image1];

  const projects = ["p1", "p2", "p3", "p4"].map((key, index) => {
    const item = t.raw(key) as {
      title: string;
      description: string;
      tech?: string[];
      demoLink?: string;
    };
    return { key, ...item, image: projectImages[index] };
  });

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <TitleHeading des={t("description")}>
          <span className="text-primary">{t("our")}</span>
        </TitleHeading>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
          data-aos="fade-up"
        >
          {projects.map((project, index) => (
            <Card
              key={project.key}
              className="relative hover:scale-105 p-3 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="absolute right-4 top-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    if (project.demoLink && project.demoLink !== "#") {
                      window.open(
                        project.demoLink,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }
                  }}
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {project.title}
              </h3>

              <div className="mt-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover rounded-lg aspect-[16/10]"
                />
              </div>

              <p className="mt-5 text-gray-600 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>

              {project.tech && project.tech.length > 0 && (
                <div className="mt-6">
                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    {common.techUsed}:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((label) => (
                      <Chip key={label} label={label} className="mb-0" />
                    ))}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div
          className="mt-12 text-center"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <Button size="lg">{t("viewMore")}</Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
