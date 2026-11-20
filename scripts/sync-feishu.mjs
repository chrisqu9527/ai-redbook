/**
 * 《普通人 AI 实战红宝书》飞书知识库国内镜像同步脚本（骨架）
 *
 * 使用前提：
 * 1. 本机已登录配置好 lark-cli
 * 2. 在飞书新建一个名为「普通人 AI 实战红宝书（国内镜像）」的知识空间，并获取 space_id
 *
 * 运行方式（预览将同步的文件列表）：
 *   node scripts/sync-feishu.mjs --dry-run
 */

import fs from 'node:fs'
import path from 'node:path'

// 定义需要按顺序同步到飞书知识库的章节清单
const CHAPTER_LIST = [
  { title: '00. 发刊词与通关地图', file: 'docs/00-start/index.md' },
  { title: '🧰 2026 工具一页纸首选表（v2026.11）', file: 'docs/00-start/tools-map.md' },
  { title: '01. 20分钟做出第一个惊艳作品', file: 'docs/01-quick-win/01-first-project.md' },
  { title: '02. 新手10分钟避坑准备', file: 'docs/01-quick-win/02-setup-guide.md' },
  { title: '03. 1篇讲透AI底层认知', file: 'docs/02-mindset/03-ai-basics.md' },
  { title: '04. 把AI用成靠谱员工的3个心法', file: 'docs/02-mindset/04-talk-to-ai.md' },
  { title: '05. 写作与阅读（去AI味实战）', file: 'docs/03-scenarios/05-writing-reading.md' },
  { title: '06. 视觉与配图（稳定不抽卡）', file: 'docs/03-scenarios/06-visual-design.md' },
  { title: '07. 音视频极简制作流', file: 'docs/03-scenarios/07-audio-video.md' },
  { title: '08. 办公提效与零代码做小网页', file: 'docs/03-scenarios/08-office-webpage.md' },
  { title: '09. 讲透 Skill、Workflow 与 Agent', file: 'docs/04-agents/09-agent-concepts.md' },
  { title: '10. 【L1零门槛】国内图形化小助理', file: 'docs/04-agents/10-agent-l1-nocode.md' },
  { title: '11. 【L2高阶】Agent 核武器入门', file: 'docs/04-agents/11-agent-l2-advanced.md' },
  { title: '12. 案例一：选题与资料研究流水线', file: 'docs/05-workflows/12-topic-research.md' },
  { title: '13. 案例二：写作与自动审稿流水线', file: 'docs/05-workflows/13-write-review.md' },
  { title: '14. 案例三：一鱼多吃多平台改写流', file: 'docs/05-workflows/14-multi-platform.md' },
  { title: '15. 普通人的3条AI提效与变现路径', file: 'docs/06-monetize/15-career-sidehustle.md' },
  { title: '16. 打造你的AI个人作品集', file: 'docs/06-monetize/16-portfolio.md' },
  { title: '🏛️ 月度工具红黑榜（v2026.11）', file: 'docs/museum/red-black-list.md' },
  { title: '💥 AI 翻车实录馆', file: 'docs/museum/fail-cases.md' },
  { title: '🏆 读者作业墙 & 贡献者名单', file: 'docs/museum/showcase.md' }
]

// 清理 VitePress 专属标签（如 <ChapterMeta ... />），确保同步到飞书文档时排版干净
function cleanMarkdownForFeishu(rawContent) {
  return rawContent
    .replace(/<ChapterMeta[^>]*\/>/g, '')
    .replace(/::: (tip|info|warning)([^\n]*)\n([\s\S]*?):::/g, '> **$2**\n>\n> $3')
    .trim()
}

const isDryRun = process.argv.includes('--dry-run')
const rootDir = process.cwd()

console.log('=== 《普通人 AI 实战红宝书》飞书镜像同步检查 ===')
for (const item of CHAPTER_LIST) {
  const absPath = path.resolve(rootDir, item.file)
  if (!fs.existsSync(absPath)) {
    console.warn(`[跳过] 文件不存在：${item.file}`)
    continue
  }
  const raw = fs.readFileSync(absPath, 'utf-8')
  const cleaned = cleanMarkdownForFeishu(raw)
  console.log(`[就绪] ${item.title}（清理后 ${cleaned.length} 字）`)
}

if (isDryRun) {
  console.log('\n当前为预览模式（--dry-run），未执行实际飞书写入。')
  console.log('当你建好飞书知识空间并提供 space_id 后，我可直接为你接入 lark-cli 实写命令。')
}
