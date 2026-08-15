# Firefly

一个基于 Astro 的个人博客主题 / 站点，适合用于技术分享、生活记录、创作展示、文章归档和个人主页。

本项目整体风格偏简洁、现代、适合内容创作型博客，内置了文章列表、分类归档、评论系统、侧边栏、图片展示、音乐播放器、看板娘等常见功能。

## 特色

- Astro 5 + Tailwind CSS 构建
- 支持 Markdown / MDX 文章写作
- 文章列表、归档页、关于页、友链页等页面
- 代码高亮和数学公式支持
- 评论、公告、站点配置模块化管理
- 支持自定义主题、背景壁纸、导航栏、字体等
- 可部署到 Vercel、Cloudflare Pages 等平台

## 技术栈

- Astro
- TypeScript
- Svelte
- Tailwind CSS
- MDX / remark / rehype
- Pagefind / Meilisearch（搜索能力）
- Vercel / Wrangler（部署配置）

## 项目结构

```text
.
├── public/                  # 静态资源
├── scripts/                 # 辅助脚本
├── src/
│   ├── components/          # 组件
│   ├── config/              # 全站配置
│   ├── content/             # 文章内容
│   ├── i18n/                # 国际化
│   ├── integrations/        # Astro 集成
│   ├── layouts/             # 页面布局
│   ├── pages/               # 路由页面
│   ├── plugins/             # Markdown/rehype 插件
│   ├── styles/              # 样式文件
│   ├── types/               # 类型定义
│   └── utils/               # 工具函数
├── astro.config.mjs         # Astro 配置
├── package.json             # 项目脚本与依赖
├── pnpm-lock.yaml           # pnpm 锁文件
├── tailwind.config.cjs      # Tailwind 配置
├── tsconfig.json            # TypeScript 配置
├── vercel.json              # Vercel 部署配置
├── wrangler.toml            # Cloudflare Pages / Workers 配置
└── README.md                # 项目说明
```

## 快速开始

### 1. 安装依赖

使用 pnpm 安装：

```bash
pnpm install
```

### 2. 启动开发服务器

```bash
pnpm dev
```

项目启动后，通常可在浏览器中访问：

```text
http://localhost:4321
```

### 3. 构建项目

```bash
pnpm build
```

### 4. 预览生产构建

```bash
pnpm preview
```

## 常用脚本

```bash
pnpm dev          # 启动开发环境
pnpm build        # 构建站点
pnpm preview      # 预览生产构建
pnpm check        # Astro 类型检查
pnpm type-check   # TypeScript 检查
pnpm lint         # 代码格式检查
pnpm format       # 格式化代码
pnpm new-post     # 创建新文章
pnpm index:meili  # 索引搜索数据
```

## 配置说明

站点核心配置位于：

- [src/config/siteConfig.ts](src/config/siteConfig.ts)
- [src/config/index.ts](src/config/index.ts)
- [src/config/README.md](src/config/README.md)

这些文件用于配置站点信息、主题样式、导航、页面开关、评论、友链、音乐播放器等功能。

如需修改站点标题、描述、URL、壁纸或页面权限，优先修改对应配置文件。

## 文章编写

文章通常放在：

- [src/content/posts](src/content/posts)

如果需要从模板创建新文章，可以运行：

```bash
pnpm new-post
```

文章支持 Frontmatter，并可通过配置控制标题、封面、类别、标签、阅读时间等信息。

## 部署

### Vercel

项目已附带 [vercel.json](vercel.json)，可直接部署到 Vercel。

### Cloudflare

项目也提供 [wrangler.toml](wrangler.toml)，适合 Cloudflare Pages / Workers 相关托管方案。

## 说明

本项目适合作为个人博客、技术博客、创作记录站点进行二次开发和自定义扩展。

如果你希望进一步定制主题、添加新页面或调整文章样式，可以先查看：

- [src/config](src/config)
- [src/pages](src/pages)
- [src/components](src/components)
- [src/styles](src/styles)

## 许可证

该项目默认遵循仓库中的许可证说明，如需使用，请根据仓库实际许可条款进行检查。
