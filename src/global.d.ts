// src/global.d.ts
declare global {
  interface Window {
    // Table of Contents
    FloatingTOC?: {
      btn?: HTMLElement | null;
      panel?: HTMLElement | null;
      manager?: {
        init: () => void;
        cleanup: () => void;
      } | null;
      isPostPage?: () => boolean;
    };

    SidebarTOC?: {
      manager: {
        init: () => void;
        cleanup: () => void;
      } | null;
    };

    // Navigation
    tocInternalNavigation?: boolean;

    // Icons
    iconifyLoaded?: boolean;

    // Live2D/Spine
    live2dModelInitialized?: boolean;
    spineModelInitialized?: boolean;
    spinePlayerInstance?: any;

    // Swup
    swup?: any;

    // Pagefind
    pagefind?: any;

    // Other custom properties
    closeAnnouncement?: () => void;
    toggleFloatingTOC?: () => void;

    // spine player
    spine?: any;
  }
}

export {};