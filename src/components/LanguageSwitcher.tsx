"use client";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/i18n/locale";
import { LanguagesIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { startTransition } from "react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale();

  const handleChangeLanguage = (newLocale: string) => {
    const locale = newLocale as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("text-primary", className)}
      onClick={() => handleChangeLanguage(locale === "ja" ? "vi" : "ja")}
      aria-label={
        locale === "ja" ? "Chuyển sang tiếng Việt" : "日本語に切り替える"
      }
    >
      <LanguagesIcon />
    </Button>
  );
}
