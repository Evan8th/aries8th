# 尘世闲游 · 个人作品集

当前网页包含：首页、工作经历、品牌视觉、视频编辑、游戏策划和期待合作六个板块。

## 本地预览

双击「本地预览.cmd」，或在项目目录运行：

```sh
npm install
npm run dev
```

已安装依赖时，无需重复运行 npm install。开发环境要求 Node.js 20.19 或更新版本。

## 修改网页内容

网页内容集中在 `src/data/`：

- `siteConfig.js`：导航、首页文字和网站身份。
- `profileData.js`：工牌、工作经历与工具图标。
- `ipProjects.js`：品牌视觉作品、列表封面及详情图片顺序。
- `aigcVideoData.js`：视频编辑作品、封面、标签与时长。
- `brandProjects.js`：游戏策划作品。
- `contactData.js`：联系方式。

图片、首页视频和图标位于项目内部的 `public/` 中。生田社访谈视频使用越牛新闻原文中的 HTTPS MP4 直链，避免将超出 GitHub 单文件限制的视频提交到仓库；本地原视频保留并由 `.gitignore` 排除。添加新作品时，先将文件复制到 public/ 的对应目录，再填写相应数据中的网页路径。

- `public/images/`：网页图标、个人图片、视频封面与品牌视觉作品。
- `public/videos/`：视频作品。
- `public/icons/tools/`：工具图标及来源说明。

部分字体通过 Google Fonts 加载；本机字体和系统字体提供备用显示。生田社视频从 video.shaoxing.com.cn 加载，其余图片与首页视频使用本地资源。

## 检查与发布

### GitHub Pages

仓库 `Evan8th/aries8th` 的公开网页地址为 `https://evan8th.github.io/aries8th/`（首次成功部署后生效）。
在仓库 Settings → Pages → Build and deployment 中选择 **GitHub Actions**。
将项目推送到 `main` 后，`.github/workflows/deploy-pages.yml` 会自动检查、构建并发布。
本地默认使用根路径；发布流程通过 `GITHUB_PAGES_BASE=/aries8th/` 适配图片、视频和脚本地址。
不要提交 `node_modules/`、`dist/` 或本地私密文件。

```sh
npm test
npm run build
```

构建生成 `dist/`，发布静态网页时上传此目录中的全部文件。修改源码或素材后，需要重新构建，不能只上传旧的 dist/。

其他检查：

- `npm run privacy:check`：扫描个人信息与敏感内容。
- `npm run verify`：依次执行测试、构建及隐私扫描。
- `npm run release:check`：执行发布检查；没有 Git 仓库时跳过 Git 专属检查。

隐私扫描可能标记作品集里主动公开的真实姓名或联系方式，请结合实际公开意图核对，不要将检查结果直接视为网页运行错误。

## 项目文件用途

- `src/`：当前网页源码、样式及数据。
- `public/`：网页所需的资源原件。
- `dist/`：已经构建的可发布网页。
- `node_modules/`：本地运行和构建依赖。
- `tests/`、`scripts/`：功能检查及发布检查工具。
- `package.json`、`package-lock.json`、`vite.config.js`、`index.html`：运行、安装及构建配置。

未使用的模板示例图片和旧首页动画已清理。当前首页视频位于 `public/videos/hero-background.mp4`。项目许可见 LICENSE，图标来源见 public/icons/tools/SOURCES.md。
