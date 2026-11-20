<script setup lang="ts">
import { ref } from 'vue'

// 加载公众号真实二维码，缺失时回退到占位图
const qrSrc = ref('/images/wechat-qr.jpg')
const onImgError = () => {
  if (qrSrc.value !== '/images/wechat-qr-placeholder.svg') {
    qrSrc.value = '/images/wechat-qr-placeholder.svg'
  }
}
</script>

<template>
  <!-- 极简清爽的公众号引流条：无术语、直白一句话 -->
  <section class="wechat-cta-simple">
    <div class="wechat-cta-text">
      <h3 class="wechat-cta-title">想有人带着学，或第一时间收到新课更新？</h3>
      <p class="wechat-cta-desc">
        微信搜 <strong>「AI博物志」</strong>，回复 <code class="keyword-pill">红宝书</code>，领每课配套模板，也可以把你做出的成品截图发给我看。
      </p>
    </div>
    <div class="wechat-cta-qr">
      <img :src="qrSrc" alt="公众号 AI博物志 二维码" @error="onImgError" />
      <span>扫码关注 · 回复「红宝书」</span>
    </div>
  </section>
</template>

<style scoped>
.wechat-cta-simple {
  margin-top: 48px;
  padding: 22px 26px;
  border-radius: 14px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.wechat-cta-text {
  flex: 1;
}

.wechat-cta-title {
  margin: 0 0 8px 0 !important;
  font-size: 17px !important;
  font-weight: 700;
  border: none !important;
  padding: 0 !important;
}

.wechat-cta-desc {
  margin: 0 !important;
  font-size: 14.5px;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

.keyword-pill {
  font-weight: 700;
  color: var(--vp-c-brand-1) !important;
  background: var(--vp-c-brand-soft) !important;
  padding: 2px 8px;
  border-radius: 6px;
}

.wechat-cta-qr {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.wechat-cta-qr img {
  width: 112px;
  height: 112px;
  border-radius: 10px;
  object-fit: cover;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
}

.wechat-cta-qr span {
  font-size: 12px;
  color: var(--vp-c-text-3);
}

@media (max-width: 640px) {
  .wechat-cta-simple {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  .wechat-cta-qr {
    align-self: center;
    margin-top: 8px;
  }
}
</style>
