/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly MEILI_MASTER_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// TOC 相关的全局类型声明
declare global {
  interface Window {
    SidebarTOC?: {
      manager: {
        init: () => void;
        cleanup: () => void;
      } | null;
    };
    FloatingTOC?: {
      btn: HTMLElement | null;
      panel: HTMLElement | null;
      manager: {
        init: () => void;
        cleanup: () => void;
      } | null;
      isPostPage: () => boolean;
    };
    toggleFloatingTOC?: () => void;
    tocInternalNavigation?: boolean;
  }
}
