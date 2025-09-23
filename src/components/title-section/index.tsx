import Chip from "@/components/ui/chip";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  des?: string | ReactNode;
  subTitle?: string;
  className?: string;
  classNameTitle?: string;
  classNameDes?: string;
}

const TitleHeading: React.FC<Props> = ({
  children,
  des,
  subTitle,
  className,
  classNameTitle,
  classNameDes,
}) => {
  return (
    <div className={cn("max-w-xl text-left mb-8 md:mb-16", className)}>
      {subTitle && <Chip data-aos="fade-up" label={subTitle} />}
      <h2
        className={cn(
          "text-2xl md:text-4xl font-bold text-primary mt-2 mb-6",
          classNameTitle
        )}
        data-aos="fade-up"
      >
        {children}
      </h2>
      {des && (
        <p
          className={cn("text-gray-600 leading-relaxed", classNameDes)}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {des}
        </p>
      )}
    </div>
  );
};

export { TitleHeading };
