"use client";

import Logo from "@/components/ui/logo";
import { ContactInfo } from "@/data";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  SocialButton,
  SocialButtonsGroup,
  SocialPlatform,
} from "../ui/social-buttons";

export default function Footer() {
  const t = useTranslations("Root");
  const homeT = useTranslations("HomePage");
  const metaT = useTranslations("Meta");
  const locationT = useTranslations("Location");

  const menuItems = [
    { href: "/about", label: "about" },
    { href: "/recruitment", label: "recruitment" },
    { href: "/nail", label: "nail" },
    { href: "/retail", label: "retail" },
  ];

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo và thông tin công ty */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Logo width={150} height={40} />
            </Link>
            <p className="text-gray-600 mt-4 max-w-xs">
              {metaT("title")}
              <br />
              {metaT("SNSDes")}
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialButton platform="hotpepper" size="sm" />
              <SocialButton platform="facebook" size="sm" />
              <SocialButton platform="instagram" size="sm" />
            </div>
          </div>

          {/* Menu liên kết */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t("home")}</h3>
            <ul className="space-y-3">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors duration-300"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {homeT("companyInfoTitle")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  {locationT("officeAddress")}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-600">
                  {homeT("contactInfo")}: {ContactInfo.phone}
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a
                  href={`mailto:${ContactInfo.email}`}
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                >
                  {ContactInfo.email}
                </a>
              </li>

              <li className="flex items-center">
                <Globe className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a
                  href="https://lhf.co.jp"
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                >
                  {ContactInfo.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} LHF Co., Ltd.{" "}
              {homeT("allRightsReserved")}.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary text-sm"
                    aria-label={homeT("termsOfService")}
                  >
                    {homeT("termsOfService")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary text-sm"
                    aria-label={homeT("privacyPolicy")}
                  >
                    {homeT("privacyPolicy")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
