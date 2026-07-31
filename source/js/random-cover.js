/**
 * 默认封面随机化
 * 文章未手动设置封面时，每次刷新页面随机换一张 picsum 图。
 * 同一篇文章（首页列表 / 侧边栏最近文章）用同一个 seed → 显示同一张图。
 * 只替换命中 seed/blog- 前缀的图（默认图），手动上传的封面永不替换。
 */
(function () {
  'use strict'

  const SEED_PREFIX = 'seed/blog-'

  // 页面级随机盐：每次刷新变，全站默认图一起换新
  const salt = Math.random().toString(36).slice(2, 8)

  // 同一篇文章（href 相同）→ 同一 seed → 同一张图
  const seedFrom = href =>
    'blog-' + salt + '-' + (href || '').replace(/[^a-z0-9]/gi, '')

  const picsum = (w, h, seed) => `https://picsum.photos/seed/${seed}/${w}/${h}`

  // 首页列表封面 + 侧边栏最近文章缩略图
  const imgs = document.querySelectorAll(
    '.post_cover img.post-bg, .card-recent-post .thumbnail img'
  )
  imgs.forEach(img => {
    const src = img.getAttribute('src') || ''
    if (src.includes(SEED_PREFIX)) {
      const link = img.closest('a')
      img.src = picsum(400, 300, seedFrom(link ? link.getAttribute('href') : ''))
    }
  })

  // 详情页顶部背景图：只在命中默认前缀时换（归档/标签等页面背景不命中，不受影响）
  const header = document.getElementById('page-header')
  if (header) {
    const style = header.getAttribute('style') || ''
    const match = style.match(/url\((['"]?)(.*?)\1\)/)
    if (match && match[2].includes(SEED_PREFIX)) {
      header.style.backgroundImage = `url(${picsum(1600, 900, seedFrom(location.pathname))})`
    }
  }
})()
