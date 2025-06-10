# Academic Research Website Template

这是一个使用Astro框架构建的学术研究个人网站模板，采用温馨的暖色系配色方案，设计优雅简约，适合研究人员展示其学术成果。

## 技术栈

- **[Astro](https://astro.build/)** - 快速的静态站点生成器，提供极佳的性能
- **现代CSS** - 使用CSS变量、Flexbox和Grid布局
- **响应式设计** - 适配各种设备尺寸
- **无JS依赖** - 极简的JavaScript使用，提高网站性能
- **SEO友好** - 适当的元标签和语义化HTML结构

## 功能亮点

- 🏠 **主页** - 个人简介、精选研究项目和最新动态
- 🔍 **研究页面** - 展示研究项目，包含图片、描述和标签
- 📚 **出版物页面** - 列出学术论文和出版物
- 👤 **关于页面** - 详细的个人简历和背景介绍
- 📄 **CV页面** - 完整的学术履历

## 设计特色

- 温暖学院风配色方案
- 清晰的排版层次结构
- 微交互和动画效果（如导航栏的下划线动画）
- 精心设计的卡片组件
- 专为学术内容阅读优化的布局

## 快速开始

### 安装

```bash
# 克隆仓库
git clone <repository-url>
cd proud-point

# 安装依赖
npm install
```

### 开发

```bash
# 启动开发服务器
npm run dev
```

访问 `http://localhost:4321` 查看网站。

### 构建

```bash
# 构建生产版本
npm run build
```

构建的文件将位于 `dist/` 目录中。

## 项目结构

```
proud-point/
├── public/            # 静态资源
│   ├── images/        # 图片资源
│   └── favicon.svg    # 网站图标
├── src/
│   ├── components/    # 可复用组件
│   ├── layouts/       # 页面布局
│   ├── pages/         # 页面文件
│   │   ├── index.astro       # 主页
│   │   ├── research/         # 研究相关页面
│   │   ├── publications.astro # 出版物页面
│   │   ├── about.astro       # 关于页面 
│   │   └── cv.astro          # CV页面
│   └── assets/        # 其他资源
└── astro.config.mjs   # Astro配置
```

## 自定义

### 更改内容

1. 编辑 `src/pages/` 目录下的各个页面文件来更新内容
2. 研究项目在 `src/pages/research/` 目录下
3. 更新 `src/layouts/MainLayout.astro` 中的导航菜单和页脚信息

### 更改样式

- 主要颜色变量位于 `src/layouts/MainLayout.astro` 文件的 `:root` 部分
- 每个页面都有自己的样式部分，可以单独修改

## 部署

该网站可以部署到任何支持静态网站的平台：

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- 或任何其他静态网站托管服务

## 浏览器支持

- 支持所有现代浏览器
- Chrome, Firefox, Safari, Edge 的最新版本

## 许可

MIT

## 视频文件

由于GitHub的文件大小限制，项目中的视频文件已被移除。您可以从以下链接下载相关视频：

- Personal Daily Life Fashion Show Demo: [下载链接]
- Shared AR Shopping Demo: [下载链接]

请将下载的视频文件放置在 `public/videos/` 目录下。

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
