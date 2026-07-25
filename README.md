# 个人博客项目文档

## 是什么

一个完全免费的静态博客，可以在电脑或手机上写文章、自动发布。

- **前台：** https://feiyao123.github.io
- **后台（写文章）：** https://feiyao123.github.io/admin/

## 怎么搭的

| 零件 | 用什么 | 干什么的 |
|---|---|---|
| 博客框架 | Hexo | 把 Markdown 文章变成网页 |
| 外观 | Butterfly 主题 | 页面皮肤，好看就行 |
| 托管 | GitHub Pages | 免费存放网页，对外访问 |
| 自动发布 | GitHub Actions | 文章提交后自动构建上线 |
| 后台编辑器 | Decap CMS | 浏览器里写文章，不用装软件 |
| 登录中转 | Vercel | 处理 GitHub 登录验证（免费） |

## 工作流程

```text
你打开后台 → GitHub 登录 → 写文章 → 点发布
    ↓
文章自动提交到 GitHub 仓库
    ↓
GitHub Actions 自动构建 → 部署到 Pages
    ↓
1-3 分钟后，前台就能看到新文章了
```

## 为什么这么做

- 不用本地写 md 文件，手机上也能更新
- 不买服务器不买域名，全部免费
- 文章和图片都存在 GitHub，不会丢
- 改动自动上线，不用手动部署

## 花了多少钱

| 项目 | 费用 |
|---|---|
| 域名 | 0 元（GitHub 送） |
| 服务器 | 0 元（GitHub Pages） |
| 自动构建 | 0 元（Actions 免费用不完） |
| 登录中转 | 0 元（Vercel 免费用不完） |
| **一年总计** | **0 元** |

## 怎么用

1. 打开 https://feiyao123.github.io/admin/，用 GitHub 账号登录
2. 点"新建文章"，写标题和内容
3. 可以上传图片、设置分类和标签
4. 点"发布"，等两分钟前台就有了
5. 电脑、手机浏览器都能用

## 本地运行

```bash
cd blog
npm install
npx hexo server     # 本地预览
```
