# 🚀 上线与域名 `chrisqulab.com` 绑定保姆级指南

这份指南帮你把本地建好的《普通人 AI 实战红宝书》以 **0 服务器费用** 挂到你的域名 `https://chrisqulab.com`，并跑通后续“写完即自动发布”的流水线。

---

## 第一步：换上你的真实公众号二维码（1 分钟）

1. 把你的公众号 **「AI博物志」** 二维码图片保存为 `wechat-qr.png`。
2. 放进目录：`docs/public/images/wechat-qr.png`。
3. 网站每篇文章底部的引流卡片会自动识别并显示你的真实二维码（不需要改任何代码）。
4. 顺手打开 `docs/.vitepress/config.mts`，把 `socialLinks` 里的 `https://github.com/你的GitHub用户名/ai-redbook` 替换成你真实建好的 GitHub 仓库地址。

---

## 第二步：把本地代码推送到 GitHub（3 分钟）

1. 登录 GitHub，点击右上角 `+` → `New repository`，仓库名填 `ai-redbook`，设为 **Public（公开）**，不要勾选自带 README。
2. 在本目录打开终端执行：

```bash
git init
git add .
git commit -m "初始化《普通人 AI 实战红宝书》v0.1 骨架"
git branch -M main
git remote add origin https://github.com/chrisqu9527/ai-redbook.git
git push -u origin main
```

---

## 第三步：Spaceship 域名绑定 Cloudflare Pages（免费 + 免备案 + 自动 HTTPS，全程 5 分钟）

你的域名 `chrisqulab.com` 在 **Spaceship** 购买且未备案，最省心、零成本、国内打开最稳的做法是：**把 DNS 托管给 Cloudflare，再用 Cloudflare Pages 直接对接 GitHub 自动部署**。

### 3.1 把 `chrisqulab.com` 接入 Cloudflare（2 分钟）
1. 打开 [Cloudflare 控制台](https://dash.cloudflare.com/)（免费注册登录）。
2. 点击 **添加域（Add a domain）** → 输入 `chrisqulab.com` → 下滑选择 **$0 Free（免费计划）**。
3. 页面会给出 **2 个 Nameserver 地址**（形如 `alice.ns.cloudflare.com` 和 `bob.ns.cloudflare.com`），复制留用。

### 3.2 在 Spaceship 修改 Nameservers（1 分钟）
1. 登录 [Spaceship](https://www.spaceship.com/) → 打开 **Launchpad** → 点击 **Domain Manager**。
2. 点击你的域名 `chrisqulab.com` → 找到 **Nameservers** → 点击 **Change**。
3. 选择 **Custom nameservers**，将 Cloudflare 给的那 2 个地址依次填入并保存。
4. 回到 Cloudflare 点击检查更新（通常 5~15 分钟生效，无需额外付费，域名续费仍在 Spaceship 完成）。

### 3.3 部署网站并一键绑定域名（2 分钟）
1. 在 Cloudflare 左侧菜单点击 **Workers 和 Pages** → **创建（Create）** → 切换到 **Pages** → **连接到 Git**。
2. 授权连接你的 GitHub 账号，选中 `ai-redbook` 仓库，按下面填写构建参数：
   * **构建命令（Build command）**：`npm run build`
   * **构建输出目录（Build output directory）**：`docs/.vitepress/dist`
   * **环境变量（可选）**：`NODE_VERSION` = `22`
3. 点击 **保存并部署**，等待约 1 分钟部署完成。
4. 进入该项目的 **自定义域（Custom domains）** → 点击 **设置自定义域** → 输入 `chrisqulab.com` → 点击 **激活域**（Cloudflare 会自动添加解析并签发 HTTPS 证书，几分钟后即可直接访问 `https://chrisqulab.com`！）。
5. 建议再顺手加一个 `www.chrisqulab.com`，确保读者不管输不输 `www` 都能正常打开。

> **备选方案**：如果你想直接用 **GitHub Pages**，本仓库已经内置了 `.github/workflows/deploy.yml` 和 `docs/public/CNAME`；只需在 GitHub 仓库 `Settings -> Pages -> Source` 选 **GitHub Actions**，并把域名 DNS 解析指向 GitHub Pages 即可。

---

## 第四步：以后的每周更新日常（2 分钟搞定）

以后每周写完新章节（比如把 `docs/01-quick-win/01-first-project.md` 写完），只需要在本地运行三行命令：

```bash
git add .
git commit -m "更新第01章：20分钟做出第一个作品"
git push
```

- **域名主站 `chrisqulab.com`**：约 30 秒后自动上线更新！
- **飞书国内镜像**：配置好 `scripts/sync-feishu.mjs` 中的飞书知识空间 ID 后，运行一次即可同步到飞书知识库。
- **公众号「AI博物志」**：把本章改写成 C 叔口吻的实测/踩坑故事文发布，文末引导回复【红宝书】！
