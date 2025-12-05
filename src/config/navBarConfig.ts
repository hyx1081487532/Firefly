import {LinkPreset, type NavBarConfig, type NavBarLink, NavBarSearchMethod, type NavBarSearchConfig} from "../types/config";
import {siteConfig} from "./siteConfig";

// 根据页面开关动态生成导航栏配置
const getDynamicNavBarConfig = (): NavBarConfig => {
  const links: (NavBarLink | LinkPreset)[] = [
    LinkPreset.Home,
    LinkPreset.Archive,
  ];

  // 支持自定义导航栏链接,并且支持多级菜单
  links.push({
    name: "链接",
    url: "/links/",
    icon: "material-symbols:link",
    children: [
      {
        name: "GitHub",
        url: "https://github.com/hyx1081487532/Firefly",
        external: true,
        icon: "fa6-brands:github",
      },
      {
        name: "Bilibili",
        url: "https://space.bilibili.com/3546772846676004",
        external: true,
        icon: "fa6-brands:bilibili",
      },
    ],
  });

  links.push(LinkPreset.Friends);

  // 根据配置决定是否添加留言板页面
  if (siteConfig.pages.guestbook) {
    links.push(LinkPreset.Guestbook);
  }

  links.push({
    name: "关于",
    url: "/content/",
    icon: "material-symbols:info",
    children: [
      {
        name: "关于服务器",  // 或者添加国际化键
        url: "/minecraft-guide/",  // 详细手册页
        icon: "mdi:minecraft",
      },
      {
        name: "下载中心",
        url: "/downloads/",
        icon: "fa6-solid:download",
      },
      {
        name: "关于我",  // 或者添加国际化键
        url: "/about/",  // 详细手册页
        icon: "fa6-solid:user",
      },
      
    ],
  });
  return { links };
};
export { LinkPreset };
// 导航栏配置类型
export type { NavBarConfig, NavBarLink, NavBarSearchConfig };

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
  // 可选：PageFind， MeiliSearch
  // 选择PageFind时：NavBarSearchMethod.PageFind,
  // 选择MeiliSearch时：NavBarSearchMethod.MeiliSearch,
  method: NavBarSearchMethod.PageFind,
  // 当选择 MeiliSearch 时的配置
  meiliSearchConfig: {
    INDEX_NAME: 'posts',
    CONTENT_DIR: 'src/content/posts',
    MEILI_HOST: "http://localhost:7700",
    PUBLIC_MEILI_HOST: "http://localhost:7700",
    PUBLIC_MEILI_SEARCH_KEY: "41134b15079da66ca545375edbea848a9b7173dff13be2028318fefa41ae8f2b",
  }
}

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
