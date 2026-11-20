import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import WechatCTA from './components/WechatCTA.vue'
import ChapterMeta from './components/ChapterMeta.vue'
import SimpleHome from './components/SimpleHome.vue'
import DailyHot from './components/DailyHot.vue'
import './custom.css'

// 自定义 VitePress 主题入口：
// 1. 正文页面底部自动挂载极简公众号引导条（WechatCTA）
// 2. 全局注册精简时长提示（ChapterMeta）与极简首页组件（SimpleHome）
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(WechatCTA)
    })
  },
  enhanceApp({ app }: { app: any }) {
    app.component('ChapterMeta', ChapterMeta)
    app.component('SimpleHome', SimpleHome)
    app.component('WechatCTA', WechatCTA)
    app.component('DailyHot', DailyHot)
  }
}
