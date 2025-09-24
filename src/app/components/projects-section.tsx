"use client";

import { TitleHeading } from "@/components/title-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { ExternalLink, ImageIcon } from "lucide-react";
import Chip from "@/components/ui/chip";

const ProjectsSection = () => {
  const t = useTranslations("HomePage.projects");
  const common = t.raw("common") as {
    imagePending: string;
    techUsed: string;
  };

  const projects = ["p1", "p2", "p3"].map((key) => {
    const item = t.raw(key) as {
      title: string;
      description: string;
      tech?: string[];
    };
    return { key, ...item };
  });

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <TitleHeading des={t("description")}>
          <span className="text-gray-900">Our </span>
          <span className="bg-gradient-to-r from-indigo-50 to-indigo-100 px-2 py-1 rounded-md">
            Projects
          </span>
        </TitleHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.key}
              className="relative p-6 shadow-lg border border-gray-100 bg-white rounded-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute right-4 top-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-500"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {project.title}
              </h3>

              <div className="mt-4">
                <div className="w-full aspect-video bg-gray-50 border border-dashed border-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <ImageIcon className="mx-auto h-6 w-6 mb-2" />
                    <span className="text-xs">{common.imagePending}</span>
                  </div>
                </div>
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
      </div>
    </section>
  );
};

export default ProjectsSection;
