/**
 * 默认封面随机化
 * 文章未手动设置封面时，每次刷新页面随机换一张 picsum 图。
 * 只替换命中 seed/blog- 前缀的图（默认图），手动上传的封面永不替换。
 */
(function () {
  'use strict'

  const SEED_PREFIX = 'seed/blog-'
  const rndSeed = () =>
    'blog-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8)

  const picsum = (w, h) => `https://picsum.photos/seed/${rndSeed()}/${w}/${h}`

  // 首页列表封面 + 侧边栏最近文章缩略图
  const imgs = document.querySelectorAll('.post_cover img.post-bg, .card-recent-post .thumbnail img')
  imgs.forEach(img => {
    const src = img.getAttribute('src') || ''
    if (src.includes(SEED_PREFIX)) {
      img.src = picsum(400, 300)
    }
  })

  // 详情页顶部背景图：只在命中默认前缀时换（归档/标签等页面背景不命中，不受影响）
  const header = document.getElementById('page-header')
  if (header) {
    const style = header.getAttribute('style') || ''
    const match = style.match(/url\((['"]?)(.*?)\1\)/)
    if (match && match[2].includes(SEED_PREFIX)) {
      header.style.backgroundImage = `url(${picsum(1600, 900)})`
    }
  }
})()
