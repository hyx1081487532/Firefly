export const commentConfig: Record<string, any> = {
  type: 'waline',
  
  waline: {
    // 使用你的实际地址
    serverURL: "xqqwaline.dpdns.org",
    
    // 其他配置
    lang: "zh-CN",
    locale: {
      placeholder: "欢迎留言！支持 Markdown 语法 🎉",
    },
    login: "enable",
    requiredMeta: ['nick', 'mail'],
    visitor: true,
    pageview: true,
    avatar: 'mp',
    emoji: [
      'https://unpkg.com/@waline/emojis@1.1.0/weibo',
      'https://unpkg.com/@waline/emojis@1.1.0/qq',
    ],
    dark: 'html[data-theme="dark"]',
  },
};