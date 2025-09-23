export type Locale = (typeof locales)[number];

export const locales = ["ja", "vi"] as const;
export const defaultLocale: Locale = "ja";
