<script setup lang="ts">
import { computed, ref } from 'vue'
import { data as days } from '../../../daily.data'

// 最近 7 天展开，更早的收进归档
const RECENT = 7
const recent = computed(() => days.slice(0, RECENT))
const archive = computed(() => days.slice(RECENT))
const showArchive = ref(false)

const weekday = ['日', '一', '二', '三', '四', '五', '六']
const fmtDate = (d: string) => {
  const [y, m, day] = d.split('-').map(Number)
  const w = new Date(Date.UTC(y, m - 1, day)).getUTCDay()
  return `${m} 月 ${day} 日 · 星期${weekday[w]}`
}
const copied = ref('')
const copy = async (text: string, key: string) => {
  try {
    await navigator.clipboard.writeText(text)
    copied.value = key
    setTimeout(() => (copied.value = ''), 1500)
  } catch {}
}
const tone = (v: string) =>
  v === '能用' || v === '免费' ? 'ok' : v === '不能用' || v === '收费' ? 'no' : 'mid'
</script>

<template>
  <div class="daily">
    <p v-if="!days.length" class="daily-empty">第一期正在整理，明天早上见。</p>

    <section v-for="day in recent" :key="day.date" class="daily-day">
      <h2 :id="day.date" class="daily-date">{{ fmtDate(day.date) }}</h2>
      <article v-for="(it, i) in day.items" :key="i" class="daily-item">
        <h3 class="daily-title"><span class="daily-scene">{{ it.scene }}</span>{{ it.title }}</h3>
        <p class="daily-what"><span class="daily-label q">遇到的事</span>{{ it.problem }}</p>
        <p class="daily-use"><span class="daily-label">怎么解决</span>{{ it.how }}</p>
        <div v-if="it.prompt" class="daily-prompt">
          <span class="daily-prompt-head">照抄这句话</span>
          <button class="daily-copy" @click="copy(it.prompt, day.date + i)">
            {{ copied === day.date + i ? '已复制' : '复制' }}
          </button>
          <p>{{ it.prompt }}</p>
        </div>
        <div class="daily-meta">
          <span class="daily-tool">用 {{ it.tool }}</span>
          <span class="pill" :class="tone(it.domestic)">国内{{ it.domestic }}</span>
          <span class="pill" :class="tone(it.price)">{{ it.price }}</span>
          <span v-if="it.heat" class="daily-heat">{{ it.heat }}</span>
          <a :href="it.source_url" target="_blank" rel="noopener" class="daily-src">{{ it.source_name }} ↗</a>
          <a v-if="it.lesson" :href="it.lesson" class="daily-lesson">想自己试？看课程 →</a>
        </div>
      </article>
    </section>

    <section v-if="archive.length" class="daily-archive">
      <button class="daily-archive-btn" @click="showArchive = !showArchive">
        {{ showArchive ? '收起往期' : `看往期（${archive.length} 天）` }}
      </button>
      <ul v-if="showArchive">
        <li v-for="day in archive" :key="day.date">
          <strong>{{ day.date }}</strong>
          <span v-for="(it, i) in day.items" :key="i">
            <a :href="it.source_url" target="_blank" rel="noopener">{{ it.title }}</a>
          </span>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.daily-empty {
  color: var(--vp-c-text-2);
}
.daily-day {
  margin-top: 32px;
}
.daily-date {
  margin: 0 0 12px !important;
  padding: 0 !important;
  border: none !important;
  font-size: 18px !important;
  color: var(--vp-c-brand-1);
}
.daily-item {
  padding: 16px 18px;
  margin-bottom: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
.daily-title {
  margin: 0 0 6px !important;
  font-size: 16.5px !important;
}
.daily-what {
  margin: 0 0 8px !important;
  line-height: 1.7;
}
.daily-use {
  margin: 0 0 10px !important;
  line-height: 1.7;
  color: var(--vp-c-text-1);
}
.daily-label {
  display: inline-block;
  margin-right: 8px;
  padding: 0 8px;
  border-radius: 6px;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
.daily-scene {
  display: inline-block;
  margin-right: 8px;
  padding: 0 8px;
  border-radius: 6px;
  font-size: 12.5px;
  vertical-align: 2px;
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
}
.daily-label.q {
  color: var(--vp-c-text-2);
  background: var(--vp-c-default-soft);
}
.daily-prompt {
  position: relative;
  margin: 0 0 12px;
  padding: 10px 14px;
  border-left: 3px solid var(--vp-c-brand-1);
  border-radius: 6px;
  background: var(--vp-c-bg);
}
.daily-prompt-head {
  font-size: 12.5px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}
.daily-prompt p {
  margin: 4px 0 0 !important;
  line-height: 1.7;
  font-size: 14.5px;
}
.daily-copy {
  position: absolute;
  top: 8px;
  right: 10px;
  padding: 0 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  font-size: 12.5px;
  cursor: pointer;
}
.daily-tool {
  font-weight: 600;
}
.daily-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 12px;
  font-size: 13px;
}
.pill {
  padding: 1px 8px;
  border-radius: 999px;
  font-weight: 600;
}
.pill.ok {
  color: var(--vp-c-green-1);
  background: var(--vp-c-green-soft);
}
.pill.mid {
  color: var(--vp-c-yellow-1);
  background: var(--vp-c-yellow-soft);
}
.pill.no {
  color: var(--vp-c-red-1);
  background: var(--vp-c-red-soft);
}
.daily-heat {
  color: var(--vp-c-text-2);
}
.daily-src,
.daily-lesson {
  text-decoration: none;
}
.daily-lesson {
  margin-left: auto;
  font-weight: 600;
}
.daily-archive {
  margin-top: 36px;
}
.daily-archive-btn {
  padding: 6px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
}
.daily-archive ul {
  padding-left: 0;
  list-style: none;
}
.daily-archive li {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
  margin: 10px 0;
  font-size: 14px;
}
@media (max-width: 640px) {
  .daily-lesson {
    margin-left: 0;
  }
}
</style>
