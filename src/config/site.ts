export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
    roblox?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Dig to Escape Wiki",
  shortName: "Dig to Escape",
  logoText: "D",
  tagline: "Guides, Digging Routes, Tools & Escape Tips",
  description: "Complete Dig to Escape wiki with beginner guides, digging routes, tool upgrades, escape tips, prison mechanics, VR controls and the latest update news.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dig-to-escape.wiki",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@dig-to-escape.wiki",
  gameUrl: "https://store.steampowered.com/app/4232670/",
  heroVideoId: "dPvYW_5E8dk", // Dig To Escape | Official Trailer (K&K Studio)
  social: {
    youtube: "https://www.youtube.com/@KnKStudio-GameDev",
    roblox: "https://www.roblox.com/games/92122513197996/Dig-to-Escape",
  },
  locales: ["en", "es", "pt", "de"],
  defaultLocale: "en",
};
