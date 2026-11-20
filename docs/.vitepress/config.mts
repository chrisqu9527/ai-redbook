import { defineConfig } from 'vitepress'

// 《普通人 AI 实战红宝书》VitePress 站点核心配置
export default defineConfig({
  lang: 'zh-CN',
  title: '普通人 AI 实战红宝书',
  description: '不写一行代码，从聊天新手到一人 AI 工作流 —— 公众号「AI博物志」免费开源实战手册',

  // 清除 URL 中的 .html 后缀，链接更干净美观
  cleanUrls: true,

  // 头部 SEO 与图标配置
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#C93B2B' }],
    ['meta', { name: 'author', content: 'C叔 · AI博物志' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '普通人 AI 实战红宝书' }],
    ['meta', { property: 'og:description', content: '不会写代码的普通人，从零到用 AI 做出自己的第一个作品。' }],
    ['meta', { property: 'og:url', content: 'https://chrisqulab.com' }]
  ],

  // 站点地图配置（利于搜索引擎收录）
  sitemap: {
    hostname: 'https://chrisqulab.com'
  },

  // 开启最后更新时间显示（依赖 Git 提交记录）
  lastUpdated: true,

  themeConfig: {
    logo: '/images/logo.svg',
    siteTitle: '普通人 AI 实战红宝书',

    // 顶部导航栏
    nav: [
      { text: '🚀 从头通关', link: '/00-start/' },
      { text: '🧰 工具速查表', link: '/00-start/tools-map' },
      { text: '⚙️ 实战流水线', link: '/05-workflows/12-topic-research' },
      {
        text: '🏛️ AI博物标本馆',
        items: [
          { text: '月度工具红黑榜', link: '/museum/red-black-list' },
          { text: 'AI 翻车实录馆', link: '/museum/fail-cases' },
          { text: '读者作业墙 & 贡献者', link: '/museum/showcase' }
        ]
      },
      {
        text: 'v2026.11',
        items: [
          { text: '📅 当前工具版本：v2026.11', link: '/00-start/tools-map' },
          { text: '📢 公众号「AI博物志」', link: '/00-start/#如何获取更新与配套模板' }
        ]
      }
    ],

    // 左侧全书闯关目录（17 篇主线 + 3 个附馆）
    sidebar: [
      {
        text: '序幕 · 掀开屋顶',
        collapsed: false,
        items: [
          { text: '00. 发刊词与通关地图', link: '/00-start/' },
          { text: '🧰 2026 工具一页纸首选表', link: '/00-start/tools-map' }
        ]
      },
      {
        text: '第一关 · 20 分钟拿正反馈',
        collapsed: false,
        items: [
          { text: '01. 20分钟做出第一个惊艳作品', link: '/01-quick-win/01-first-project' },
          { text: '02. 新手10分钟避坑准备', link: '/01-quick-win/02-setup-guide' }
        ]
      },
      {
        text: '第二关 · 祛魅与对话心法',
        collapsed: false,
        items: [
          { text: '03. 1篇讲透AI底层认知', link: '/02-mindset/03-ai-basics' },
          { text: '04. 把AI用成靠谱员工的3个心法', link: '/02-mindset/04-talk-to-ai' }
        ]
      },
      {
        text: '第三关 · 四大场景做作品',
        collapsed: false,
        items: [
          { text: '05. 写作与阅读（去AI味实战）', link: '/03-scenarios/05-writing-reading' },
          { text: '06. 视觉与配图（稳定不抽卡）', link: '/03-scenarios/06-visual-design' },
          { text: '07. 音视频极简制作流', link: '/03-scenarios/07-audio-video' },
          { text: '08. 办公提效与零代码做小网页', link: '/03-scenarios/08-office-webpage' }
        ]
      },
      {
        text: '第四关 · 智能体双轨入门',
        collapsed: false,
        items: [
          { text: '09. 讲透 Skill、Workflow 与 Agent', link: '/04-agents/09-agent-concepts' },
          { text: '10. 【L1零门槛】国内图形化小助理', link: '/04-agents/10-agent-l1-nocode' },
          { text: '11. 【L2高阶】Agent 核武器入门', link: '/04-agents/11-agent-l2-advanced' }
        ]
      },
      {
        text: '第五关 · 一人 AI 工作流',
        collapsed: false,
        items: [
          { text: '12. 案例一：选题与资料研究流水线', link: '/05-workflows/12-topic-research' },
          { text: '13. 案例二：写作与自动审稿流水线', link: '/05-workflows/13-write-review' },
          { text: '14. 案例三：一鱼多吃多平台改写流', link: '/05-workflows/14-multi-platform' }
        ]
      },
      {
        text: '第六关 · 从会用到值钱',
        collapsed: false,
        items: [
          { text: '15. 普通人的3条AI提效与变现路径', link: '/06-monetize/15-career-sidehustle' },
          { text: '16. 打造你的AI个人作品集', link: '/06-monetize/16-portfolio' }
        ]
      },
      {
        text: '🏛️ 附馆 · AI 博物标本馆',
        collapsed: false,
        items: [
          { text: '月度工具红黑榜（v2026.11）', link: '/museum/red-black-list' },
          { text: 'AI 翻车实录馆', link: '/museum/fail-cases' },
          { text: '读者作业墙 & 贡献者名单', link: '/museum/showcase' }
        ]
      }
    ],

    // 社交链接（GitHub 开源仓库）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chrisqu9527/ai-redbook' }
    ],

    // 内置全站本地中文搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索红宝书',
            buttonAriaLabel: '搜索红宝书'
          },
          modal: {
            noResultsText: '没有找到相关内容，换个关键词试试',
            resetButtonTitle: '清除搜索条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    // 中文本地化界面文案
    outline: {
      label: '本页导航',
      level: [2, 3]
    },
    docFooter: {
      prev: '上一关',
      next: '下一关'
    },
    lastUpdated: {
      text: '最近更新于',
      formatOptions: {
        dateStyle: 'short'
      }
    },
    darkModeSwitchLabel: '外观切换',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '全书目录',
    returnToTopLabel: '回到顶部',

    // 页脚版权信息
    footer: {
      message: '由公众号「AI博物志」免费开源维护 · 遵循 CC BY-NC-SA 4.0 协议',
      copyright: 'Copyright © 2026 C叔 · chrisqulab.com'
    }
  }
})
