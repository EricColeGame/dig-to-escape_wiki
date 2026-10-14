import { defineRouting } from "next-intl/routing";

// 唯一真相源：所有语言相关配置（request.ts 的 messagesMap、
// language-switcher.tsx 的标签、src/locales/*.json 文件名）都必须与本数组保持一致。
export const locales = ["en", "es", "pt", "de"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
