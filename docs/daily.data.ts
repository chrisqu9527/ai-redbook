import fs from 'node:fs'
import path from 'node:path'

export interface HotItem {
  title: string
  scene: string
  problem: string
  how: string
  prompt?: string
  tool: string
  domestic: string
  price: string
  source_name: string
  source_url: string
  heat?: string
  lesson?: string
}

export interface HotDay {
  date: string
  items: HotItem[]
}

declare const data: HotDay[]
export { data }

// 读取 data/hot/*.json，只取 status 为 published 的，按日期倒序
export default {
  watch: ['../data/hot/*.json'],
  load(watchedFiles: string[]): HotDay[] {
    return watchedFiles
      .map((file) => {
        try {
          return JSON.parse(fs.readFileSync(file, 'utf-8'))
        } catch {
          console.warn(`[daily] 跳过无法解析的文件：${path.basename(file)}`)
          return null
        }
      })
      .filter((d) => d && d.status === 'published' && Array.isArray(d.items) && d.items.length)
      .map((d) => ({ date: d.date, items: d.items }))
      .sort((a, b) => b.date.localeCompare(a.date))
  }
}
