"use client";

import { FacebookIcon, HotPepperIcon, LineIcon } from "@/components/ui/icon";
import { ContactInfo } from "@/data";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SocialButton } from "./social-buttons";

interface FloatingSocialButtonsProps {
  className?: string;
}

export const FloatingSocialButtons = ({
  className = "",
}: FloatingSocialButtonsProps) => {
  const pathname = usePathname();
  const [isNailPage, setIsNailPage] = useState(false);

  useEffect(() => {
    // Memoize the check to avoid unnecessary re-renders
    const isNail = pathname.includes("/nail");
    if (isNail !== isNailPage) {
      setIsNailPage(isNail);
    }
  }, [pathname, isNailPage]);

  return (
    <div
      className={`fixed bottom-8 right-5 z-50 flex flex-col gap-2 ${className}`}
    >
      <SocialButton platform="phone" size="lg" />
      {/* Các nút mạng xã hội chỉ hiển thị trên trang nail */}
      {isNailPage && (
        <>
          <SocialButton platform="facebook" size="lg" />
          <SocialButton platform="instagram" size="lg" />
          <SocialButton platform="hotpepper" size="lg" />
          <SocialButton platform="tiktok" size="lg" />
        </>
      )}
    </div>
  );
};
