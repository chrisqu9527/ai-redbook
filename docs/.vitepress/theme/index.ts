import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import WechatCTA from './components/WechatCTA.vue'
import ChapterMeta from './components/ChapterMeta.vue'
import RoadmapGrid from './components/RoadmapGrid.vue'
import './custom.css'

// 自定义 VitePress 主题入口：
// 1. 通过 doc-after 插槽，自动在每一篇正文章节底部注入公众号【AI博物志】引流卡片
// 2. 全局注册 ChapterMeta 与 RoadmapGrid 组件，方便在 Markdown 中直接使用
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(WechatCTA)
    })
  },
  enhanceApp({ app }: { app: any }) {
    app.component('ChapterMeta', ChapterMeta)
    app.component('RoadmapGrid', RoadmapGrid)
    app.component('WechatCTA', WechatCTA)
  }
}
