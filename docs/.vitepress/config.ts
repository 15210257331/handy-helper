import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "handy-helper API文档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '使用指南', link: '/' },
      { text: 'API文档', link: '/api' },
      { text: 'Examples', link: '/examples' }
    ],

    sidebar: [
      {
        text: '文档列表',
        items: [
          { text: 'API文档', link: '/api' },
          { text: 'Examples', link: '/examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/15210257331/handy-helper' }
    ]
  }
})
