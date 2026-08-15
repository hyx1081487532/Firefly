---
title: "Astro 网站项目零基础协作操作文档"
published: 2026-08-11
description: "面向完全不会Git的Windows用户，Astro网站项目完整协作教程，下载、修改、提交代码全套操作"
tags:
  - "astro"
  - "git"
  - "网站开发"
  - "协作文档"
  - "技术教程"
category: "技术文档"
author: "xiaoqueqiao"
draft: false
---

# Astro 网站项目零基础协作操作文档

面向：完全不会 Git 的朋友（Windows 电脑操作）

项目仓库地址：以`https://github.com/a10044557744998-a11y/github-flie-manager`为例

目标：下载代码、本地修改网站、提交改动、上传给主仓库，无需懂复杂原理，照着复制粘贴指令即可。

重要提醒：所有操作，**不要修改 node_modules、.astro、dist 这三个文件夹里面的任何东西**，这些是电脑自动生成的缓存，不要上传到 GitHub。

## 一、前置准备（仅需做一次）

### 1. 安装必备软件

- Git for Windows：下载地址 [https://git-scm.com/download/win](https://git-scm.com/download/win)，安装时全部选择默认选项，一路点击“下一步”即可。

- Node.js（运行网站必备）：下载地址 [https://nodejs.org/](https://nodejs.org/)，选择 LTS 长期支持版本，安装时全部默认选项。

- 推荐编辑器：VS Code，用于修改文字、配置文件，下载地址 [https://code.visualstudio.com/](https://code.visualstudio.com/)。

### 2. 获取仓库权限(如果是别人仓库则需要做这一步,如果是自己的仓库的话跳过)

项目主仓库管理员会在 GitHub 仓库设置里，把你的 GitHub 账号添加为协作者。你会收到 GitHub 邮件邀请，点击接受后，才拥有提交代码的权限。

⚠️ 注意：你必须拥有一个 GitHub 账号，牢记账号和密码。

## 二、第一次把代码下载到自己电脑（仅需做一次）

1. 在电脑新建一个空文件夹，例如 `D:\qingserver-friend`。

2. 在文件夹空白处，按住 `Shift` + 鼠标右键 → 选择【在此处打开 PowerShell 窗口】。

3. 复制下面命令粘贴到 PowerShell，按回车，把代码下载到本地：
`git clone https://github.com/a10044557744998-a11y/github-flie-manager.git`

4. 下载完成，进入项目文件夹：
`cd github-flie-manager`

5. 安装项目依赖（仅第一次下载代码执行，后续无需重复）：
`npm install`
（会自动生成 node_modules 文件夹，不要手动修改，也不要上传到 GitHub）

6. 设置你自己的提交署名（仅本项目生效，不影响电脑其他项目）：
把引号内替换成你自己的 GitHub 用户名和邮箱，逐行执行：
`git config --local user.name "你的github用户名"`
`git config --local user.email "你的github绑定邮箱"`

✅ 到此，代码已完整下载到你的电脑，可进行后续修改操作。

## 三、本地运行网站，预览修改效果

修改代码前，一定要先把网站跑起来，确认修改后的效果。

1. 在项目文件夹的 PowerShell 中执行：
`npm run dev`

2. 终端会输出类似 `Local: http://localhost:4321/` 的地址，复制到浏览器打开，即可看到完整网站。

3. 修改文件后，浏览器页面会自动刷新，立刻看到修改后的效果。

4. 按 `Ctrl + C` 可停止网站运行。

✅ 可修改的文件范围：

- 网站配置：`src/config/website.config.js`

- 样式：`public/styles/global.css`

- 图片资源：放到 `public/` 下对应文件夹

## 四、每次修改网站的标准完整流程（必看！）

重点：动手改代码之前，**一定要先拉取别人最新的改动**，防止代码冲突！

1. 打开 PowerShell，进入项目文件夹：
`cd D:\qingserver-friend\github-flie-manager`

2. **第一步：拉取服务器最新代码（必做）**
把其他人刚刚上传的改动下载到你电脑，避免两人改同一文件互相覆盖：
`git pull origin main`
（如果提示冲突，立刻停止操作，联系项目管理员，不要自己乱改）

3. 修改你的图片、配置、CSS 等文件，本地运行 `npm run dev` 确认效果没问题。

4. 查看哪些文件被你修改了：
`git status`
（确认：`node_modules/`、`.astro/`、`dist/` 出现在 Untracked（未跟踪），不要出现在待提交列表）

5. 将你的改动加入暂存区：
`git add .`

6. 填写本次修改的备注（写清楚你干了什么，方便别人看懂）：
引号里面文字自己改写，不要删掉前后双引号，示例：
`git commit -m "修改首页图标，更新背景壁纸"`

7. 上传代码到 GitHub 仓库：
`git push`
（此时会弹出登录窗口，登录**你自己的 GitHub 账号**；如果403报错，看下方常见问题处理）

🎉 执行完毕，你的改动已上传到公共仓库，其他人下次拉代码就能拿到你的修改。

## 五、重要避坑清单（零基础一定要看）

- ❌ 不要手动修改`node_modules`、`.astro`、`dist` 文件夹内任何文件，不要提交这三个文件夹。

- ✅ 每次修改代码**第一件事先执行 git pull origin main**，同步远程最新代码，不做这一步大概率出现代码冲突。

- ❌ 不要直接修改 `package-lock.json`，这个文件由 npm 自动管理。

- 如果执行命令出现一大段红色报错，不要继续往下操作，截图发给管理员。

- commit 里面写的文字只是备注，**不能用来登录推送**，推送登录必须用你自己的 GitHub 账号。

- 所有操作不会删除你的本地文件，不用担心文件丢失。

## 六、常见简单问题处理

### 问题1：git push 报403权限拒绝

解决：打开 Windows 凭据管理器，找到并删除 `git:https://github.com` 这条凭据，重新执行 `git push`，登录你自己的 GitHub 账号。

### 问题2：git pull 提示冲突

解决：代表你和另一个人修改了同一个文件，不要自己乱编辑，把报错截图发给项目负责人处理。

### 问题3：npm run dev 报错

解决：执行以下命令重新安装依赖，再启动开发服务器：
`npm install`

### 问题4：想放弃本地全部修改，还原成网上仓库的版本

注意：这个操作会丢掉你本地没提交的修改，谨慎使用！

执行命令：
`git reset --hard origin/main`

## 七、极简速查表（可直接复制发给朋友）

```powershell
# 下载项目（仅第一次）
git clone https://github.com/a10044557744998-a11y/github-flie-manager.git
cd github-flie-manager
npm install

# 日常开发流程
git pull origin main          # 拉取别人最新代码
npm run dev                   # 本地预览网站
# --------在这里修改你的文件--------
git status                    # 查看改动文件
git add .
git commit -m "填写本次修改描述"
git push                      # 上传到github