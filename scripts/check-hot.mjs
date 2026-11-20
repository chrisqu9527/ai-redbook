// 检查 data/hot/*.json 的格式。用法：node scripts/check-hot.mjs [文件...]
// 不带参数时检查全部。出错时退出码为 1。
import fs from 'node:fs'
import path from 'node:path'

const dir = path.resolve('data/hot')
const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : fs.readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => path.join(dir, f))

const REQUIRED = ['title', 'scene', 'problem', 'how', 'tool', 'domestic', 'price', 'source_name', 'source_url']
const ENUMS = {
  domestic: ['能用', '要梯子', '不能用'],
  price: ['免费', '部分免费', '收费'],
  scene: ['工作', '生活', '学习', '带娃', '副业', '健康', '理财']
}
const LIMITS = { title: 24, problem: 60, how: 120, prompt: 150 }

let errors = 0
const fail = (file, msg) => {
  errors++
  console.error(`✗ ${path.basename(file)}：${msg}`)
}

for (const file of files) {
  let data
  try {
    data = JSON.parse(fs.readFileSync(file, 'utf-8'))
  } catch (e) {
    fail(file, `不是合法 JSON（${e.message}）`)
    continue
  }
  const base = path.basename(file, '.json')
  if (!/^\d{4}-\d{2}-\d{2}$/.test(base)) fail(file, '文件名要是 YYYY-MM-DD.json')
  if (data.date !== base) fail(file, `date 字段 ${data.date} 和文件名不一致`)
  if (!['draft', 'published'].includes(data.status)) fail(file, 'status 只能是 draft 或 published')
  if (!Array.isArray(data.items) || data.items.length === 0) {
    fail(file, 'items 为空')
    continue
  }
  if (data.items.length > 6) fail(file, `条目 ${data.items.length} 条，最多 6 条`)
  data.items.forEach((it, i) => {
    const tag = `第 ${i + 1} 条`
    for (const k of REQUIRED) if (!it[k] || typeof it[k] !== 'string') fail(file, `${tag} 缺 ${k}`)
    for (const [k, opts] of Object.entries(ENUMS))
      if (it[k] && !opts.includes(it[k])) fail(file, `${tag} ${k} 只能是 ${opts.join('/')}`)
    for (const [k, n] of Object.entries(LIMITS))
      if (it[k] && [...it[k]].length > n) fail(file, `${tag} ${k} 超过 ${n} 字`)
    if (it.source_url && !/^https?:\/\//.test(it.source_url)) fail(file, `${tag} source_url 不是链接`)
    if (it.lesson && !it.lesson.startsWith('/')) fail(file, `${tag} lesson 要以 / 开头`)
    for (const k of ['title', 'problem', 'how', 'prompt'])
      if (it[k] && /——|—/.test(it[k])) fail(file, `${tag} ${k} 里有破折号`)
  })
  if (!errors) console.log(`✓ ${path.basename(file)}（${data.status}，${data.items.length} 条）`)
}

process.exit(errors ? 1 : 0)
