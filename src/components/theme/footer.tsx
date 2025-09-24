"use client";

import Logo from "@/components/ui/logo";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { SocialButton } from "../ui/social-buttons";

export default function Footer() {
  const homeT = useTranslations("HomePage");
  const metaT = useTranslations("Meta");

  return (
    <footer id="contact" className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 text-center">
          {/* Brand & description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Logo width={160} height={44} />
            </Link>
            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
              {metaT("description")}
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <SocialButton platform="hotpepper" size="sm" />
              <SocialButton platform="facebook" size="sm" />
              <SocialButton platform="instagram" size="sm" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Whitepace Co., Ltd.{" "}
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
