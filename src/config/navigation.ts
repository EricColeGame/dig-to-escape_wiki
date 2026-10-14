export type NavigationItem = {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
};

// 导航分类来自关键词聚类产物，slug 必须与 content/<locale>/ 下的文章子目录名一致。
// key 是翻译键（对应 src/locales/en.json 的 nav 与顶级内容类型键），path 是 URL。
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "codes", path: "/codes", isContentType: true },
  { key: "endings", path: "/endings", isContentType: true },
  { key: "maps", path: "/maps", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "controls", path: "/controls", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter(
  (item) => item.isContentType,
).map((item) => item.path.replace(/^\//, ""));
