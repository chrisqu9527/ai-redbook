<script setup lang="ts">
// 极简正文时长提示组件：去掉难度星级、常青层、版本号、已发布等噪音标签，只留“大约 XX 分钟”
defineProps<{
  duration?: string
}>()
</script>

<template>
  <p v-if="duration" class="simple-duration">
    ⏱️ 大约 {{ duration }}
  </p>
</template>

<style scoped>
.simple-duration {
  margin: 8px 0 24px 0 !important;
  font-size: 14px;
  color: var(--vp-c-text-2);
  padding-bottom: 14px;
  border-bottom: 1px solid var(--vp-c-divider);
}
</style>
