"use client";

import {
  FacebookIcon,
  HotPepperIcon,
  InstagramIcon,
  LineIcon,
} from "@/components/ui/icon";
import { ContactInfo } from "@/data";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Phone, PhoneCall } from "lucide-react";

// Social media platform types
export type SocialPlatform =
  | "facebook"
  | "line"
  | "hotpepper"
  | "instagram"
  | "tiktok"
  | "phone";

// Social media configuration
export const socialConfig = {
  facebook: {
    icon: FacebookIcon,
    href: ContactInfo.facebookUrl,
    label: "Facebook",
    bgColor: "bg-blue-600 hover:bg-blue-700",
    textColor: "text-white",
  },
  line: {
    icon: LineIcon,
    href: ContactInfo.lineUrl,
    label: "Line",
    bgColor: "bg-green-500 hover:bg-green-600",
    textColor: "text-white",
  },
  hotpepper: {
    icon: HotPepperIcon,
    href: ContactInfo.hotpepperUrl,
    label: "Hot Pepper Beauty",
    bgColor: "bg-[#9f1547] hover:bg-[#9f1547]/80",
    textColor: "text-white",
  },
  instagram: {
    icon: InstagramIcon,
    href: ContactInfo.instagramUrl,
    label: "Instagram",
    bgColor: "bg-pink-400 hover:bg-pink-500",
    textColor: "text-white",
  },
  tiktok: {
    icon: null, // Custom SVG icon
    href: "https://www.tiktok.com/",
    label: "TikTok",
    bgColor: "bg-black hover:bg-gray-800",
    textColor: "text-white",
  },
  phone: {
    icon: PhoneCall, // Custom SVG icon
    href: `tel:${ContactInfo.phone}`,
    label: "Gọi điện",
    bgColor: "bg-red-600 hover:bg-red-700",
    textColor: "text-white",
  },
};

// Individual social button component
interface SocialButtonProps {
  platform: SocialPlatform;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "ghost";
  className?: string;
  showLabel?: boolean;
  onClick?: () => void;
}

export const SocialButton = ({
  platform,
  size = "md",
  variant = "default",
  className = "",
}: SocialButtonProps) => {
  const config = socialConfig[platform];
  const IconComponent = config.icon;

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const iconSizes = {
    sm: 20,
    md: 28,
    lg: 36,
  };

  const variantClasses = {
    default: `${config.bgColor} ${config.textColor}`,
    outline: `border-2 border-gray-300 hover:border-gray-400 bg-white text-gray-700 hover:bg-gray-50`,
    ghost: `bg-transparent hover:bg-gray-100 text-gray-600 hover:text-gray-800`,
  };

  const renderIcon = () => {
    if (IconComponent) {
      return (
        <IconComponent
          size={iconSizes[size]}
          className={cn(platform === "line" && "fill-white")}
        />
      );
    }

    // Custom icons for platforms without icon components
    if (platform === "tiktok") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconSizes[size]}
          height={iconSizes[size]}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
        </svg>
      );
    }

    return null;
  };

  const buttonContent = (
    <Button
      className={cn(
        "bg-transparent w-auto h-auto p-0 rounded-full [&_svg]:size-auto transition-transform hover:scale-110 shadow-md hover:shadow-lg",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {renderIcon()}
    </Button>
  );

  return (
    <a
      href={config.href}
      target={platform === "phone" ? undefined : "_blank"}
      rel={platform === "phone" ? undefined : "noopener noreferrer"}
      className="focus:outline-none transition-all duration-300"
      aria-label={config.label}
    >
      {buttonContent}
    </a>
  );
};

// Social buttons group component
interface SocialButtonsGroupProps {
  platforms: SocialPlatform[];
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "ghost";
  layout?: "horizontal" | "vertical";
  spacing?: "sm" | "md" | "lg";
  className?: string;
  showLabels?: boolean;
  onButtonClick?: (platform: SocialPlatform) => void;
}

export const SocialButtonsGroup = ({
  platforms,
  size = "md",
  variant = "default",
  layout = "horizontal",
  spacing = "md",
  className = "",
  showLabels = false,
  onButtonClick,
}: SocialButtonsGroupProps) => {
  const spacingClasses = {
    sm: layout === "horizontal" ? "space-x-2" : "space-y-2",
    md: layout === "horizontal" ? "space-x-3" : "space-y-3",
    lg: layout === "horizontal" ? "space-x-4" : "space-y-4",
  };

  const layoutClasses = {
    horizontal: "flex flex-row",
    vertical: "flex flex-col",
  };

  return (
    <div
      className={cn(layoutClasses[layout], spacingClasses[spacing], className)}
    >
      {platforms.map((platform) => (
        <SocialButton
          key={platform}
          platform={platform}
          size={size}
          variant={variant}
          showLabel={showLabels}
          onClick={onButtonClick ? () => onButtonClick(platform) : undefined}
        />
      ))}
    </div>
  );
};

// Floating social buttons component (replacement for the original)
interface FloatingSocialButtonsProps {
  className?: string;
  showOnNailPageOnly?: boolean;
  currentPath?: string;
}

export const FloatingSocialButtons = ({
  className = "",
  showOnNailPageOnly = true,
  currentPath = "",
}: FloatingSocialButtonsProps) => {
  const isNailPage = showOnNailPageOnly ? currentPath.includes("/nail") : true;

  return (
    <div
      className={cn(
        "fixed bottom-8 right-5 z-50 flex flex-col gap-2",
        className
      )}
    >
      {/* Phone button - always visible */}
      <SocialButton platform="phone" size="md" />

      {isNailPage && (
        <SocialButtonsGroup
          platforms={["facebook", "line", "hotpepper", "tiktok"]}
          size="md"
          layout="vertical"
          spacing="sm"
        />
      )}
    </div>
  );
};
