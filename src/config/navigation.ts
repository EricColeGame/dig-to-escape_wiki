export type NavigationItem = {
  key: string;
  path: string;
  isContentType: boolean;
};

// 导航在重构期间被清空，后续阶段按新游戏的内容类型重建。
export const NAVIGATION_CONFIG: readonly NavigationItem[] = [];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter(
  (item) => item.isContentType,
).map((item) => item.path.replace(/^\//, ""));
