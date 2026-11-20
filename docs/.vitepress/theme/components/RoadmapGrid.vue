<script setup lang="ts">
// 首页可视化 6 关闯关路线图数据
const stages = [
  {
    step: '序幕',
    title: '掀开屋顶 & 工具速查',
    desc: '先看懂不会写代码的普通人怎么用 AI 干完一个团队的活，拿走 2026 一页纸首选工具表。',
    tag: '已就绪',
    link: '/00-start/'
  },
  {
    step: '第一关',
    title: '20 分钟拿正反馈',
    desc: '不讲废话，先照着步骤在 20 分钟内做出你的第一个惊艳小作品，彻底打破“AI 也就那样”的偏见。',
    tag: '已上线 · 推荐先做',
    link: '/01-quick-win/01-first-project'
  },
  {
    step: '第二关',
    title: '祛魅与对话心法',
    desc: '1 篇大白话讲透大模型为什么胡说八道，掌握把 AI 当新员工用的 3 个核心对话动作。',
    tag: '已上线 · 核心心法',
    link: '/02-mindset/03-ai-basics'
  },
  {
    step: '第三关',
    title: '四大高频场景做作品',
    desc: '写作去 AI 味、视觉稳出图、音视频极简流、零代码做小网页——每场景只推 1 个国内可用首选工具。',
    tag: '连载更新',
    link: '/03-scenarios/05-writing-reading'
  },
  {
    step: '第四关',
    title: '智能体双轨入门',
    desc: '先用飞书/扣子零门槛体验自动干活（L1），再手把手带愿意折腾的人上手 Agent 核武器（L2）。',
    tag: '核心分水岭',
    link: '/04-agents/09-agent-concepts'
  },
  {
    step: '第五关',
    title: '搭一座一人 AI 工作流',
    desc: '直接把「AI博物志」内容工厂里的 3 条真实流水线拆开，给小白可抄走的精简版配置。',
    tag: '已上线 · 镇馆标本',
    link: '/05-workflows/12-topic-research'
  },
  {
    step: '第六关',
    title: '从“会用”到“值钱”',
    desc: '拆解普通人提效、副业与接单的 3 条现实路线，把前面做的成品打包成你的 AI 作品集。',
    tag: '变现闭环',
    link: '/06-monetize/15-career-sidehustle'
  },
  {
    step: '附馆',
    title: 'AI 博物标本馆',
    desc: '每月更新工具红黑榜（v2026.11）、真实 AI 翻车实录、读者作业墙与开源贡献者名单。',
    tag: '持续生长',
    link: '/museum/red-black-list'
  }
]
</script>

<template>
  <section class="roadmap-wrapper">
    <div class="roadmap-header">
      <h2>🗺️ 全书通关路线图（不走弯路的一条直线）</h2>
      <p>拒绝几百个链接的“资料大杂烩”。按顺序逐关打通，每一关结束你手里都会多一件真能用上的作品。</p>
    </div>
    <div class="roadmap-grid">
      <a v-for="item in stages" :key="item.step" :href="item.link" class="roadmap-card">
        <div class="roadmap-card-top">
          <span class="roadmap-step">{{ item.step }}</span>
          <span class="roadmap-tag">{{ item.tag }}</span>
        </div>
        <h3 class="roadmap-title">{{ item.title }}</h3>
        <p class="roadmap-desc">{{ item.desc }}</p>
      </a>
    </div>
  </section>
</template>

<style scoped>
.roadmap-wrapper {
  max-width: 1152px;
  margin: 40px auto 24px auto;
  padding: 0 24px;
}

.roadmap-header {
  text-align: center;
  margin-bottom: 28px;
}

.roadmap-header h2 {
  font-size: 26px;
  font-weight: 700;
  margin: 0 0 10px 0;
  border: none;
  padding: 0;
}

.roadmap-header p {
  font-size: 15px;
  color: var(--vp-c-text-2);
  margin: 0;
}

.roadmap-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.roadmap-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  text-decoration: none !important;
  color: inherit !important;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.roadmap-card:hover {
  transform: translateY(-3px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 10px 24px rgba(201, 59, 43, 0.08);
}

.roadmap-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.roadmap-step {
  font-size: 12px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 2px 8px;
  border-radius: 6px;
}

.roadmap-tag {
  font-size: 11.5px;
  color: var(--vp-c-text-3);
}

.roadmap-title {
  margin: 0 0 8px 0 !important;
  font-size: 16px !important;
  font-weight: 700;
  line-height: 1.4;
  border: none !important;
  padding: 0 !important;
}

.roadmap-desc {
  margin: 0 !important;
  font-size: 13px;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}

@media (max-width: 960px) {
  .roadmap-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .roadmap-grid {
    grid-template-columns: 1fr;
  }
}
</style>
