# Academic Research Website 部署指南

本文档提供详细的部署说明，以帮助您将这个Astro学术研究网站部署到各种托管平台。

## 目录

1. [前期准备](#前期准备)
2. [Netlify部署](#netlify部署)
3. [Vercel部署](#vercel部署)
4. [GitHub Pages部署](#github-pages部署)
5. [传统Web主机部署](#传统web主机部署)
6. [自定义域名配置](#自定义域名配置)
7. [部署后的维护](#部署后的维护)

## 前期准备

在部署之前，请确保：

1. 网站内容已经完成修改和本地测试
2. 项目代码已提交到Git仓库（如GitHub、GitLab或Bitbucket）
3. 在本地运行构建测试：
   ```bash
   npm run build
   ```
   确保没有错误产生

## Netlify部署

[Netlify](https://netlify.com)是一个流行的静态网站托管平台，免费计划已足够个人学术网站使用。

### 通过Git自动部署（推荐）

1. 注册并登录[Netlify](https://app.netlify.com/)
2. 点击"New site from Git"
3. 选择您的Git提供商（GitHub、GitLab或Bitbucket）并授权
4. 选择您的项目仓库
5. 配置构建设置：
   - 构建命令：`npm run build`
   - 发布目录：`dist`
6. (可选)点击"Show advanced"设置环境变量
7. 点击"Deploy site"

部署完成后，Netlify会提供一个随机子域名（如`random-name-123456.netlify.app`）。

### 通过手动上传

1. 在本地构建网站：
   ```bash
   npm run build
   ```
2. 登录Netlify
3. 转到"Sites"页面
4. 将`dist`文件夹拖放到指定区域

## Vercel部署

[Vercel](https://vercel.com)是另一个流行的静态和Jamstack网站托管平台，特别适合个人项目。

1. 注册并登录[Vercel](https://vercel.com)
2. 点击"Import Project"或"+ New Project"
3. 选择"Import Git Repository"
4. 选择您的代码仓库
5. Vercel会自动检测Astro项目：
   - 构建命令应自动设置为`npm run build`
   - 输出目录应自动设置为`dist`
6. (可选)配置环境变量
7. 点击"Deploy"

部署完成后，Vercel会提供一个子域名（如`your-project.vercel.app`）。

## GitHub Pages部署

通过GitHub Actions可以自动部署到GitHub Pages：

1. 首先，更新`astro.config.mjs`文件添加site和base配置：

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name/',
  // 其他配置...
});
```

2. 安装GitHub Pages集成：

```bash
npx astro add github
```

3. 这将自动配置GitHub Action工作流程文件

4. 将更改推送到GitHub：

```bash
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push
```

5. 在仓库设置中启用GitHub Pages:
   - 转到仓库设置
   - 选择"Pages"
   - 在"Source"下选择"GitHub Actions"

## 传统Web主机部署

如果您有传统的Web主机（如HostGator、Bluehost、DreamHost等）：

1. 在本地构建网站：
   ```bash
   npm run build
   ```

2. 使用FTP客户端（如FileZilla）连接到您的Web主机

3. 上传`dist`目录中的所有文件到Web主机的公共目录（通常为`public_html`或`www`）

## 自定义域名配置

### Netlify自定义域名

1. 在Netlify控制面板中，选择您的网站
2. 点击"Domain settings"
3. 点击"Add custom domain"
4. 输入您的域名并点击"Verify"
5. 按照指示配置DNS：
   - 选项1：通过Netlify管理DNS（推荐）
   - 选项2：在您的域名注册商设置DNS记录指向Netlify

### Vercel自定义域名

1. 在Vercel仪表板中，选择您的项目
2. 点击"Settings" > "Domains"
3. 输入您的域名并点击"Add"
4. 按照指示配置DNS：
   - 可以通过Vercel添加域名记录
   - 或在您的域名注册商配置DNS指向Vercel

### GitHub Pages自定义域名

1. 在仓库根目录创建名为`CNAME`的文件（不带扩展名），内容为您的域名：
   ```
   yourdomain.com
   ```

2. 在域名注册商处添加DNS记录：
   - 对于子域名（如`research.yourdomain.com`）：添加CNAME记录指向`yourusername.github.io`
   - 对于根域名：添加A记录指向GitHub Pages的IP地址（可在GitHub文档中找到）

## 部署后的维护

### 更新网站内容

1. 在本地修改内容
2. 测试更改：
   ```bash
   npm run dev
   ```
3. 提交更改并推送到Git仓库：
   ```bash
   git add .
   git commit -m "更新内容描述"
   git push
   ```
4. 如果配置了自动部署（Netlify、Vercel或GitHub Actions），更改会自动部署

### 监控部署状态

- Netlify和Vercel都提供部署日志和状态监控
- 可以设置部署通知（电子邮件、Slack等）
- 定期检查网站是否正常运行

### 性能优化

部署后，使用以下工具检查网站性能：

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://webpagetest.org/)

### SEO检查

确保您的学术网站能被搜索引擎正确索引：

- 提交网站到[Google Search Console](https://search.google.com/search-console)
- 确保所有页面都有适当的标题和描述
- 检查网站地图是否正确生成（通常位于`/sitemap.xml`）

---

如有任何部署问题，请参考：

- [Astro部署文档](https://docs.astro.build/en/guides/deploy/)
- 各托管平台的文档
- GitHub问题或论坛寻求帮助 