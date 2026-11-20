<script setup lang="ts">
// 章节顶部元信息胶囊组件：展示难度、预计耗时、内容分层（常青层/时效层）与版本号
defineProps<{
  difficulty?: string
  duration?: string
  layer?: '常青层' | '时效层'
  version?: string
  status?: '已发布' | '施工中' | '首发重点'
}>()
</script>

<template>
  <div class="chapter-meta">
    <span v-if="difficulty" class="meta-chip">🎯 难度：{{ difficulty }}</span>
    <span v-if="duration" class="meta-chip">⏱️ 预计耗时：{{ duration }}</span>
    <span v-if="layer" class="meta-chip" :class="layer === '时效层' ? 'is-fresh' : 'is-evergreen'">
      {{ layer === '时效层' ? '🔄 时效层（月度更新）' : '🌲 常青层（长期有效）' }}
    </span>
    <span v-if="version" class="meta-chip">🏷️ {{ version }}</span>
    <span v-if="status" class="meta-chip" :class="status === '施工中' ? 'is-wip' : 'is-ready'">
      {{ status === '施工中' ? '🚧 施工中' : status === '首发重点' ? '🔥 首发核弹章' : '✅ 已发布' }}
    </span>
  </div>
</template>

<style scoped>
.chapter-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 14px 0 24px 0;
  padding-bottom: 16px;
  border-bottom: 1px dashed var(--vp-c-divider);
}

.meta-chip {
  display: inline-flex;
  align-items: center;
  font-size: 12.5px;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
}

.meta-chip.is-fresh {
  color: #b45309;
  background: rgba(245, 158, 11, 0.1);
  border-color: rgba(245, 158, 11, 0.3);
}

.meta-chip.is-evergreen {
  color: #15803d;
  background: rgba(34, 197, 94, 0.08);
  border-color: rgba(34, 197, 94, 0.25);
}

.meta-chip.is-wip {
  color: #6b7280;
}

.meta-chip.is-ready {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border-color: rgba(201, 59, 43, 0.25);
}
</style>
