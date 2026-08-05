# 零文章时的空状态兜底页

Status: accepted

在全部文章删除（零文章）状态下，Hexo 的首页生成器（`hexo-generator-index`）与归档生成器（`hexo-generator-archive`）因没有文章而**不生成任何页面**：`public/index.html` 与 `public/archives/index.html` 缺失。GitHub Pages 只是静态托管，根目录无 `index.html` 时访问 `/` 直接返回 404（实测复现）。归档页 `/archives/` 同理。`tags/`、`categories/`、`about/` 等页面有独立 `source` 文件，不受影响。

决策：
1. 在 `source/` 新增 `source/index.md` 与 `source/archives/index.md`，以主题页面布局渲染"空状态页"。理由：零文章时提供风格统一的友好提示（标题"这里还什么都没有..."）而非 404；成本极低，无需插件或 JS。
2. 有文章时，首页/归档生成器输出会自动**覆盖**这两个兜底页，无需额外清理逻辑（本地实测验证覆盖行为：零文章时兜底页生效，有文章时 `暂无文章`/`暂无归档` 内容计数为 0）。
3. 文案采用友好版：首页附带 [关于]/[分类]/[标签] 引导链接分流访客；归档页保持简单一句。
4. 不使用 `layout: false` 独立裸页面方案。理由：主题页与站点导航/页脚风格统一，且 markdown 写法更易维护；裸页面方案实测正文渲染为空，不可行。

相关概念见 `CONTEXT.md` 中「空状态页（empty-state page）」术语。
