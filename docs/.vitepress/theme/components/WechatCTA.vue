<script setup lang="ts">
import { ref } from 'vue'

// 默认优先加载用户替换的真实公众号二维码；加载失败时自动回退到占位提示图
const qrSrc = ref('/images/wechat-qr.jpg')
const onImgError = () => {
  if (qrSrc.value !== '/images/wechat-qr-placeholder.svg') {
    qrSrc.value = '/images/wechat-qr-placeholder.svg'
  }
}
</script>

<template>
  <!-- 每篇教程底部自动出现的公众号【AI博物志】引流与配套资料卡片 -->
  <section class="wechat-cta-card">
    <div class="wechat-cta-content">
      <div class="wechat-cta-badge">📢 公众号「AI博物志」免费开源维护</div>
      <h3 class="wechat-cta-title">领取本章配套模板 &amp; 每周更新通知</h3>
      <p class="wechat-cta-desc">
        《普通人 AI 实战红宝书》全文永久免费、免登录阅读。
        关注公众号 <strong>「AI博物志」</strong>，后台回复关键词 <code class="keyword-pill">红宝书</code>，免费领取：
      </p>
      <ul class="wechat-cta-list">
        <li>📦 <strong>配套可复制提示词包 &amp; 精简版 Skill 文件</strong></li>
        <li>🗓️ <strong>每月工具红黑榜更新提醒</strong>（第一时间避坑）</li>
        <li>✍️ <strong>课后作业提交与翻车答疑入口</strong>（优秀作业将收录进开源贡献者墙）</li>
      </ul>
    </div>
    <div class="wechat-cta-qr">
      <img :src="qrSrc" alt="公众号 AI博物志 二维码" @error="onImgError" />
      <span>微信扫码关注 · 回复「红宝书」</span>
    </div>
  </section>
</template>

<style scoped>
.wechat-cta-card {
  margin-top: 48px;
  padding: 24px 28px;
  border-radius: 14px;
  border: 1px solid rgba(201, 59, 43, 0.25);
  background: linear-gradient(135deg, rgba(201, 59, 43, 0.05) 0%, rgba(217, 119, 6, 0.04) 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.wechat-cta-content {
  flex: 1;
}

.wechat-cta-badge {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 3px 10px;
  border-radius: 999px;
  margin-bottom: 10px;
}

.wechat-cta-title {
  margin: 0 0 8px 0 !important;
  font-size: 18px !important;
  font-weight: 700;
  border: none !important;
  padding: 0 !important;
}

.wechat-cta-desc {
  margin: 0 0 12px 0 !important;
  font-size: 14px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.keyword-pill {
  font-weight: 700;
  color: var(--vp-c-brand-1) !important;
  background: var(--vp-c-brand-soft) !important;
  padding: 2px 8px;
  border-radius: 6px;
}

.wechat-cta-list {
  margin: 0 !important;
  padding-left: 0 !important;
  list-style: none !important;
  font-size: 13.5px;
  line-height: 1.85;
  color: var(--vp-c-text-1);
}

.wechat-cta-qr {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.wechat-cta-qr img {
  width: 136px;
  height: 136px;
  border-radius: 10px;
  object-fit: cover;
  background: #fff;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
}

.wechat-cta-qr span {
  font-size: 12px;
  color: var(--vp-c-text-2);
}

/* 移动端竖排自适应 */
@media (max-width: 640px) {
  .wechat-cta-card {
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
