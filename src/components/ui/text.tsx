import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

const textVariants = cva("inline-flex items-center gap-2", {
  variants: {
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      secondary: "text-secondary-foreground",
      accent: "text-accent-foreground",
      destructive: "text-destructive",
      white: "text-white",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm leading-6",
      md: "text-sm lg:text-base",
      lg: "text-base lg:text-lg",
      xl: "text-lg lg:text-xl",
      "2xl": "text-2xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
    weight: "normal",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "span" | "p";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  iconClassName?: string;
  trans?: boolean;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      className,
      as = "p",
      variant,
      size,
      weight,
      startIcon: StartIcon,
      endIcon: EndIcon,
      iconClassName,
      children,
      trans = false,
      ...props
    },
    ref
  ) => {
    const Component = as;
    const t = useTranslations();
    const content =
      trans && typeof children === "string" ? t(children) : children;

    return (
      <Component
        ref={ref}
        className={cn(textVariants({ variant, size, weight }), className)}
        {...props}
      >
        {StartIcon && StartIcon}
        {content}
        {EndIcon && EndIcon}
      </Component>
    );
  }
);
Text.displayName = "Text";

export { Text, textVariants };
