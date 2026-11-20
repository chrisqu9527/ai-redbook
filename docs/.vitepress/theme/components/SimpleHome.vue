<script setup lang="ts">
import { ref } from 'vue'

// 动态图片路径映射：以后把真实成品图放入 docs/public/images/ 对应文件名即自动替换，未放入时平滑展示内置高颜值成品样图
const workSrc: Record<string, string> = {
  card: '/images/work-card.jpg',
  poster: '/images/work-poster.jpg',
  video: '/images/work-video.jpg',
  story: '/images/work-story.jpg',
  author: '/images/cshu-work.jpg'
}

const imgLoaded = ref<Record<string, boolean>>({
  card: true,
  poster: true,
  video: true,
  story: true,
  author: true
})

const markMissing = (key: string) => {
  imgLoaded.value[key] = false
}

// 底部微信二维码
const qrSrc = ref('/images/wechat-qr.jpg')
const onQrError = () => {
  if (qrSrc.value !== '/images/wechat-qr-placeholder.svg') {
    qrSrc.value = '/images/wechat-qr-placeholder.svg'
  }
}
</script>

<template>
  <div class="simple-home">
    <!-- 1. 极简首屏：只做一件事，让人点进第一课 -->
    <section class="hero-block">
      <h1 class="hero-title">不会写代码，也能用 AI 做出好东西</h1>
      <p class="hero-subtitle">跟着做，20 分钟做出你的第一个作品</p>
      <div class="hero-action">
        <a href="/01-start/01-first-project" class="primary-cta-btn">开始第一课 →</a>
      </div>
    </section>

    <!-- 2. 直接亮成品：小白只关心“我能做出什么” -->
    <section class="section-block">
      <h2 class="section-heading">你会做出这些</h2>
      <div class="works-grid">
        <!-- 成品 1：一张信息卡片 -->
        <a href="/01-start/01-first-project" class="work-card">
          <div class="work-preview preview-card">
            <img
              v-if="imgLoaded.card"
              :src="workSrc.card"
              alt="一张信息卡片成品图"
              class="real-work-img"
              @error="markMissing('card')"
            />
            <div v-else class="mock-card">
              <div class="mock-card-tag">AI 实战笔记</div>
              <div class="mock-card-title">为什么你收藏了 100 篇教程还是不会用？</div>
              <div class="mock-card-line"><span>01</span> 别光收藏网址，先挑 1 件每天都在干的事</div>
              <div class="mock-card-line"><span>02</span> 别当成百度搜，把它当刚入职的新员工</div>
              <div class="mock-card-quote">“先花 20 分钟做出第一个成品。”</div>
            </div>
          </div>
          <div class="work-caption">
            <strong>一张信息卡片</strong>
            <span>第 1 课就能做出 · 可发朋友圈/小红书</span>
          </div>
        </a>

        <!-- 成品 2：一张海报 -->
        <div class="work-card is-static">
          <div class="work-preview preview-poster">
            <img
              v-if="imgLoaded.poster"
              :src="workSrc.poster"
              alt="一张海报成品图"
              class="real-work-img"
              @error="markMissing('poster')"
            />
            <div v-else class="mock-poster">
              <div class="mock-poster-sub">周末读书分享会</div>
              <div class="mock-poster-big">长安<br />三万里</div>
              <div class="mock-poster-foot">本周六晚 20:00 · 线上直播</div>
            </div>
          </div>
          <div class="work-caption">
            <strong>一张海报</strong>
            <span>中文大字不乱码 · 封面宣传图直接用</span>
          </div>
        </div>

        <!-- 成品 3：一条短视频 -->
        <div class="work-card is-static">
          <div class="work-preview preview-video">
            <img
              v-if="imgLoaded.video"
              :src="workSrc.video"
              alt="一条短视频成品图"
              class="real-work-img"
              @error="markMissing('video')"
            />
            <div v-else class="mock-video">
              <div class="mock-play">▶</div>
              <div class="mock-subtitle">“其实苏轼被贬黄州那年，差点连饭都吃不上……”</div>
              <div class="mock-bar"><span /></div>
            </div>
          </div>
          <div class="work-caption">
            <strong>一条短视频</strong>
            <span>配画面 + 真人感配音 · 手机就能发</span>
          </div>
        </div>

        <!-- 成品 4：一个一分钟历史小故事 -->
        <div class="work-card is-static">
          <div class="work-preview preview-story">
            <img
              v-if="imgLoaded.story"
              :src="workSrc.story"
              alt="一个一分钟历史小故事成品图"
              class="real-work-img"
              @error="markMissing('story')"
            />
            <div v-else class="mock-story">
              <div class="mock-story-head">一分钟读懂 · 《将进酒》</div>
              <p>很多人以为李白写这首诗时正春风得意，其实那天他刚被赶出长安，身上连酒钱都是朋友凑的……</p>
              <div class="mock-story-meta">60 秒图文 / 口播成品</div>
            </div>
          </div>
          <div class="work-caption">
            <strong>一个一分钟历史小故事</strong>
            <span>从查资料到成稿 · 一口人话不拗口</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. 只要三步：打消门槛焦虑 -->
    <section class="section-block steps-section">
      <h2 class="section-heading">只要三步</h2>
      <div class="steps-row">
        <div class="step-item">
          <div class="step-num">1</div>
          <h3>打开 DeepSeek</h3>
          <p>免费，国内直接用，手机电脑都行</p>
        </div>
        <div class="step-arrow">→</div>
        <div class="step-item">
          <div class="step-num">2</div>
          <h3>复制我给你的一段话</h3>
          <p>不用自己琢磨怎么问，照抄填上你的文字</p>
        </div>
        <div class="step-arrow">→</div>
        <div class="step-item">
          <div class="step-num">3</div>
          <h3>拿到成品</h3>
          <p>20 分钟内做出第一件能发出去的好东西</p>
        </div>
      </div>
    </section>

    <!-- 4. 我是 C 叔：一段实在的真人介绍 + 成果图 -->
    <section class="section-block">
      <div class="author-box">
        <div class="author-text">
          <h2>我是 C 叔</h2>
          <p>
            理科生出身，但不会写代码。平时跨界聊历史，在中信出版社出版过一本书《别长安》。
          </p>
          <p>
            过去一年多，我没雇员工，靠 AI 一个人同时做六个平台——<strong>今日头条 17 万、B站 16 万、抖音 7.3 万、微博 3 万、小红书 2.1 万</strong>，加上公众号「C叔聊历史」和「AI博物志」。
          </p>
          <p class="author-note">
            这本免费小册子不讲技术术语，只写普通人照着抄就能出活的实在步骤。
            <a href="/01-start/" class="author-more-link">看我的完整介绍 →</a>
          </p>
        </div>
        <div class="author-visual">
          <img
            v-if="imgLoaded.author"
            :src="workSrc.author"
            alt="C叔的成品展示"
            class="real-work-img"
            @error="markMissing('author')"
          />
          <div v-else class="mock-author-card">
            <div class="mock-author-book">📕 《别长安》· 中信出版社</div>
            <div class="mock-author-stats">
              <div><strong>45万+</strong><span>全网累计粉丝</span></div>
              <div><strong>6个</strong><span>同步运营平台</span></div>
              <div><strong>0人</strong><span>全职雇佣员工</span></div>
            </div>
            <div class="mock-author-platforms">头条 · B站 · 抖音 · 微博 · 小红书 · 公众号</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. 底部极简公众号引导 -->
    <section class="section-block bottom-cta-section">
      <div class="bottom-cta">
        <div class="bottom-cta-text">
          <p class="bottom-cta-q">想有人带着学？</p>
          <p class="bottom-cta-a">
            微信搜 <strong>「AI博物志」</strong>，回复 <code class="keyword-tag">红宝书</code>
          </p>
          <p class="bottom-cta-sub">新课上线第一时间通知，还可以把你做的第一张成品发后台给我看。</p>
        </div>
        <div class="bottom-cta-qr">
          <img :src="qrSrc" alt="公众号 AI博物志 二维码" @error="onQrError" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.simple-home {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 24px 56px 24px;
}

/* 1. 首屏：极度克制，只聚焦一个主按钮 */
.hero-block {
  text-align: center;
  padding: 72px 16px 56px 16px;
}

.hero-title {
  margin: 0 auto 18px auto;
  font-size: 42px;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.hero-subtitle {
  margin: 0 auto 36px auto;
  font-size: 20px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.primary-cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 40px;
  font-size: 17px;
  font-weight: 700;
  color: #ffffff !important;
  background-color: #c93b2b;
  border-radius: 999px;
  text-decoration: none !important;
  box-shadow: 0 10px 24px rgba(201, 59, 43, 0.28);
  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.primary-cta-btn:hover {
  background-color: #b02e20;
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(201, 59, 43, 0.36);
}

/* 通用分区 */
.section-block {
  margin-top: 56px;
}

.section-heading {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 28px 0 !important;
  padding: 0 !important;
  border: none !important;
  color: var(--vp-c-text-1);
}

/* 2. 成品展示网格 */
.works-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.work-card {
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  text-decoration: none !important;
  color: inherit !important;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.work-card:not(.is-static):hover {
  transform: translateY(-3px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 10px 24px rgba(201, 59, 43, 0.1);
}

.work-preview {
  height: 196px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
}

.real-work-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* 微缩成品样图 1：信息卡片 */
.preview-card {
  background: #f2efe9;
}
.mock-card {
  width: 100%;
  background: #fcfbf8;
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  color: #222;
  font-size: 11px;
  line-height: 1.45;
}
.mock-card-tag {
  display: inline-block;
  font-size: 9px;
  font-weight: 700;
  color: #c93b2b;
  margin-bottom: 4px;
}
.mock-card-title {
  font-weight: 800;
  font-size: 12px;
  margin-bottom: 8px;
  line-height: 1.3;
}
.mock-card-line {
  font-size: 10px;
  color: #555;
  margin-bottom: 4px;
}
.mock-card-line span {
  color: #c93b2b;
  font-weight: 700;
  margin-right: 4px;
}
.mock-card-quote {
  margin-top: 8px;
  padding-top: 6px;
  border-top: 1px dashed #e2dcd3;
  font-size: 10px;
  font-weight: 600;
  color: #8f2217;
}

/* 微缩成品样图 2：海报 */
.preview-poster {
  background: linear-gradient(145deg, #2b1a17 0%, #7c2319 60%, #b53a26 100%);
}
.mock-poster {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(253, 230, 184, 0.35);
  border-radius: 8px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fde6b8;
  text-align: center;
}
.mock-poster-sub {
  font-size: 10px;
  letter-spacing: 0.15em;
  opacity: 0.85;
}
.mock-poster-big {
  font-size: 26px;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: 0.12em;
  color: #fff6e5;
}
.mock-poster-foot {
  font-size: 10px;
  opacity: 0.85;
}

/* 微缩成品样图 3：短视频 */
.preview-video {
  background: linear-gradient(160deg, #1b2230 0%, #2d3748 100%);
}
.mock-video {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px 8px 8px 8px;
  color: #fff;
}
.mock-play {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(201, 59, 43, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  padding-left: 3px;
  margin-top: 16px;
}
.mock-subtitle {
  font-size: 11px;
  line-height: 1.45;
  text-align: center;
  background: rgba(0, 0, 0, 0.45);
  padding: 6px 8px;
  border-radius: 6px;
  color: #fde68a;
}
.mock-bar {
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
}
.mock-bar span {
  display: block;
  width: 62%;
  height: 100%;
  background: #ef6452;
}

/* 微缩成品样图 4：一分钟历史小故事 */
.preview-story {
  background: #f6f1e7;
}
.mock-story {
  width: 100%;
  height: 100%;
  background: #fffdf9;
  border-left: 3px solid #c93b2b;
  border-radius: 6px;
  padding: 12px;
  color: #2c2420;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.mock-story-head {
  font-size: 12px;
  font-weight: 800;
  color: #8f2217;
}
.mock-story p {
  margin: 0 !important;
  font-size: 11px;
  line-height: 1.55;
  color: #4a403a;
}
.mock-story-meta {
  font-size: 10px;
  color: #8c7b70;
}

.work-caption {
  padding: 14px 14px 16px 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.work-caption strong {
  font-size: 15px;
  color: var(--vp-c-text-1);
}

.work-caption span {
  font-size: 12.5px;
  color: var(--vp-c-text-2);
  line-height: 1.45;
}

/* 3. 只要三步 */
.steps-section {
  padding: 32px 24px;
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

.steps-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.step-item {
  flex: 1;
  text-align: center;
  padding: 0 8px;
}

.step-num {
  width: 34px;
  height: 34px;
  margin: 0 auto 12px auto;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-item h3 {
  margin: 0 0 6px 0 !important;
  font-size: 16px !important;
  font-weight: 700;
  border: none !important;
  padding: 0 !important;
}

.step-item p {
  margin: 0 !important;
  font-size: 13.5px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.step-arrow {
  padding-top: 6px;
  font-size: 20px;
  color: var(--vp-c-text-3);
  font-weight: 600;
}

/* 4. 我是 C 叔 */
.author-box {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 28px 30px;
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.author-text {
  flex: 1.25;
}

.author-text h2 {
  margin: 0 0 12px 0 !important;
  font-size: 22px !important;
  font-weight: 800;
  border: none !important;
  padding: 0 !important;
}

.author-text p {
  margin: 0 0 10px 0 !important;
  font-size: 15px;
  line-height: 1.75;
  color: var(--vp-c-text-1);
}

.author-note {
  color: var(--vp-c-text-2) !important;
  margin-bottom: 0 !important;
}

.author-more-link {
  margin-left: 8px;
  font-weight: 600;
  color: var(--vp-c-brand-1) !important;
  text-decoration: none;
}

.author-more-link:hover {
  text-decoration: underline;
}

.author-visual {
  flex: 1;
  min-width: 260px;
}

.mock-author-card {
  padding: 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, #fff9f5 0%, #f9efe6 100%);
  border: 1px solid rgba(201, 59, 43, 0.2);
  color: #2b1f1a;
}

.dark .mock-author-card {
  background: linear-gradient(135deg, rgba(201, 59, 43, 0.14) 0%, rgba(217, 119, 6, 0.08) 100%);
  color: var(--vp-c-text-1);
}

.mock-author-book {
  font-size: 13px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  margin-bottom: 14px;
}

.mock-author-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 14px;
}

.mock-author-stats div {
  display: flex;
  flex-direction: column;
}

.mock-author-stats strong {
  font-size: 20px;
  font-weight: 800;
  line-height: 1.2;
}

.mock-author-stats span {
  font-size: 11.5px;
  opacity: 0.72;
  margin-top: 2px;
}

.mock-author-platforms {
  font-size: 12px;
  opacity: 0.75;
  padding-top: 10px;
  border-top: 1px dashed rgba(201, 59, 43, 0.25);
}

/* 5. 底部公众号极简引导 */
.bottom-cta-section {
  margin-top: 44px;
}

.bottom-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 26px 30px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(201, 59, 43, 0.06) 0%, rgba(217, 119, 6, 0.04) 100%);
  border: 1px solid rgba(201, 59, 43, 0.22);
}

.bottom-cta-q {
  margin: 0 0 6px 0 !important;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.bottom-cta-a {
  margin: 0 0 6px 0 !important;
  font-size: 20px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.bottom-cta-sub {
  margin: 0 !important;
  font-size: 13.5px;
  color: var(--vp-c-text-2);
}

.keyword-tag {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 2px 10px;
  border-radius: 6px;
  font-weight: 800;
}

.bottom-cta-qr img {
  width: 112px;
  height: 112px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* 移动端自适应 */
@media (max-width: 860px) {
  .works-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .author-box {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 600px) {
  .hero-block {
    padding: 48px 8px 36px 8px;
  }
  .hero-title {
    font-size: 28px;
  }
  .hero-subtitle {
    font-size: 16px;
  }
  .works-grid {
    grid-template-columns: 1fr;
  }
  .steps-row {
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }
  .step-arrow {
    transform: rotate(90deg);
    padding: 0;
  }
  .bottom-cta {
    flex-direction: column;
    text-align: center;
  }
}
</style>
