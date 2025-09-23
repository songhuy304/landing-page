import { cn } from "@/lib/utils";
import React from "react";

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

const Chip: React.FC<ChipProps> = ({ label, className, ...props }) => {
  return (
    <div
      className={cn(
        "inline-block bg-primary/10 px-4 rounded-full mb-4 w-fit",
        className
      )}
      {...props}
    >
      <span className="text-primary font-medium text-xs leading-normal">
        {label}
      </span>
    </div>
  );
};

export default Chip;
