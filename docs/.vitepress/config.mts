import { defineConfig } from 'vitepress'

// 《普通人 AI 实战红宝书》极简版 VitePress 配置
export default defineConfig({
  lang: 'zh-CN',
  title: '普通人 AI 实战红宝书',
  description: '不会写代码，也能用 AI 做出好东西。跟着做，20 分钟做出你的第一个作品。',

  // 清除 URL 中的 .html 后缀
  cleanUrls: true,

  // 彻底隐藏尚未写完的草稿页面，绝不让读者点进空页面
  srcExclude: ['_drafts/**'],

  // 页面头部信息
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#C93B2B' }],
    ['meta', { name: 'author', content: 'C叔 · AI博物志' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '普通人 AI 实战红宝书' }],
    ['meta', { property: 'og:description', content: '不会写代码，也能用 AI 做出好东西。跟着做，20 分钟做出你的第一个作品。' }],
    ['meta', { property: 'og:url', content: 'https://red.chrisqulab.com' }]
  ],

  // 站点地图
  sitemap: {
    hostname: 'https://red.chrisqulab.com'
  },

  themeConfig: {
    logo: '/images/logo.svg',
    siteTitle: '普通人 AI 实战红宝书',

    // 顶部导航极简，只留 3 项核心入口
    nav: [
      { text: '开始学', link: '/01-start/01-first-project' },
      { text: '全部课程', link: '/courses' },
      { text: '每日妙用', link: '/daily' },
      { text: '工具表', link: '/museum/tools-map' }
    ],

    // 左侧目录：只放已完稿内容，课程名直说“做出什么”，进阶内容默认折叠
    sidebar: [
      {
        text: '基础课程',
        collapsed: false,
        items: [
          { text: '第 1 课：做一张信息卡片', link: '/01-start/01-first-project' },
          { text: '第 2 课：让 AI 听懂你的话', link: '/01-start/02-mindset-and-prompts' }
        ]
      },
      {
        text: '进阶（学完基础再看）',
        collapsed: true,
        items: [
          { text: '进阶 1：我是怎么用 AI 找选题和查资料的', link: '/03-workflows/08-content-pipelines' }
        ]
      },
      {
        text: '实用参考',
        collapsed: false,
        items: [
          { text: 'AI 每日妙用', link: '/daily' },
          { text: '工具表（国内免费好用）', link: '/museum/tools-map' },
          { text: '我是 C 叔', link: '/01-start/' }
        ]
      }
    ],

    // 右上角保留极简 GitHub 图标
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chrisqu9527/ai-redbook' }
    ],

    // 站内本地中文搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索课程'
          },
          modal: {
            noResultsText: '没有找到相关内容，换个词试试',
            resetButtonTitle: '清除',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    // 中文界面文案
    outline: {
      label: '本页内容',
      level: [2, 3]
    },
    docFooter: {
      prev: '上一课',
      next: '下一课'
    },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '浅色模式',
    darkModeSwitchTitle: '深色模式',
    sidebarMenuLabel: '课程目录',
    returnToTopLabel: '回到顶部',

    // 版本号与开源协议统一低调收进页脚，不在首页制造术语噪音
    footer: {
      message: '当前版本 v2026.11 · 遵循 CC BY-NC-SA 4.0 开源协议免费阅读',
      copyright: 'Copyright © 2026 C叔 · AI博物志 · red.chrisqulab.com'
    }
  }
})
