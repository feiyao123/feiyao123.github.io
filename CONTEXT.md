# 个人博客

feiyao 的个人博客，Hexo + Butterfly 主题。本文件记录博客相关的领域术语。

## Language

**封面（cover）**:
文章在首页列表卡片、侧边栏"最近文章"等处显示的配图。
_Avoid_: 图片、配图、缩略图

**顶部图（top_img）**:
文章详情页顶部的大幅背景图，与封面是两回事，各自独立配置。
_Avoid_: 头图、封面

**默认封面（default cover）**:
文章未手动设置封面时，系统自动显示的封面（当前为外链随机图）。
_Avoid_: 自动封面、兜底图

**手动封面（manual cover）**:
用户在文章 front-matter 中显式设置的封面；存在时优先显示，默认封面不生效。
_Avoid_: 上传图片、自定义封面

**空状态页（empty-state page）**:
某个板块没有内容时显示的提示页面，当前应用于首页（`/`）与归档页（`/archives/`）。零文章时 Hexo 的首页/归档生成器不产出页面，由 `source/index.md` 与 `source/archives/index.md` 兜底；一旦有文章，生成器输出会覆盖它们。
_Avoid_: 兜底页、空页面、暂无文章页
