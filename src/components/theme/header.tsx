"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";
import Logo from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Root");

  const menuItems = [
    { href: "/", label: "home" },
    { href: "/#services", label: "services" },
    { href: "/#team", label: "team" },
    { href: "/#projects", label: "projects" },
    { href: "/#contact", label: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/85 backdrop-blur-xl shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="relative">
            <Link
              href="/"
              className={cn(
                "text-3xl font-bold relative group transition-colors duration-300",
                isScrolled ? "text-gray-800" : "text-white"
              )}
            >
              <Logo width={150} height={36} />
            </Link>
          </div>

          <nav
            className={`
            fixed md:relative top-0 right-0 h-screen md:h-auto w-full md:w-auto
            bg-white md:bg-transparent transform transition-transform duration-300 ease-in-out
            ${
              isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
            }
            md:flex md:items-center md:space-x-8
          `}
          >
            <Button
              variant="ghost"
              className="md:hidden absolute top-6 right-6 text-gray-800"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="flex flex-col md:flex-row items-center justify-center h-full md:h-auto space-y-8 md:space-y-0 md:space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative inline-block font-medium transition-colors duration-300 before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-1 before:h-0.5 before:w-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full",
                    isMenuOpen ? "text-gray-800" : "text-white",
                    isScrolled ? "text-gray-800" : ""
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.label)}
                </Link>
              ))}

              <LanguageSwitcher
                className={cn(
                  "transition-colors duration-300 font-medium",
                  isMenuOpen ? "text-gray-800" : "text-white",
                  isScrolled ? "text-gray-800" : ""
                )}
              />
            </div>
          </nav>

          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
