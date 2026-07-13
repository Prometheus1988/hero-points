# 小英雄上学积分 (Hero Points PWA)

给 4 岁小朋友的上学积分 app：每天打卡赚「能量星」，攒星升级英雄等级、解锁奖励，全家共享同步。

## 功能
- 🏫 每日上学打卡（+10 能量星），连续天数统计
- ⚡ 能量星：用来兑换奖励；英雄等级：按累计获得星数升级，永不掉级
- 🏆 6 级英雄成长，奖励按等级逐步解锁
- 🦸 8 个手绘超级英雄形象 + 自定义 emoji 头像
- 🎯 任务加分 / 家长快捷加扣分 / 历史记录
- 👨‍👩‍👦 家庭共享：一个家庭码，爸妈爷奶各自手机实时同步积分
- 📱 PWA：可添加到手机主屏幕，离线可用

## 文件结构
- `index.html` — 页面结构与样式
- `app.js` — 全部逻辑
- `manifest.json` — PWA 应用清单
- `sw.js` — Service Worker（离线缓存）
- `icons/` — 应用图标（源文件 `icon.svg`）

## 本地预览
```bash
cd hero-points-app
python3 -m http.server 8080
# 浏览器打开 http://localhost:8080
```
（注意：Service Worker 和「添加到主屏幕」需要 https 或 localhost 才生效。）

## 部署到自己的服务器（推荐，数据私有持久）

前端 + 后端同源，一个 Node 进程搞定（`server.js`，零依赖，数据存 `data/<家庭码>.json`）。

**一键部署（在服务器上以 root 运行）：**
```bash
bash <(curl -fsSL https://raw.githubusercontent.com/Prometheus1988/hero-points/main/deploy/setup.sh)
```
脚本会：装 Node/git → 拉代码到 `/opt/hero-points` → 建 systemd 服务（开机自启/崩溃自愈）→ 启动在 80 端口。
完成后访问 `http://<服务器公网IP>/`。

> ⚠️ 记得在【腾讯云控制台 → 安全组】放行 TCP 80 端口。
> HTTPS（PWA 完整安装/微信内最顺滑）需要域名 + 证书，可后续加。

**更新到最新：**
```bash
cd /opt/hero-points && git pull && systemctl restart hero-points
```

## 本地开发
```bash
PORT=8090 node server.js   # 打开 http://localhost:8090
```

## 数据与共享
- 单机数据存浏览器 localStorage；家庭共享数据存服务器 `data/` 目录（永久保存，随 `git pull` 不会被覆盖，已在 .gitignore）。
- 家庭码为 6 位短码。分享：家长页「分享给家人（微信）」复制带 `?f=家庭码` 的链接，家人在微信打开即自动加入。
- 孩子的名字/头像/主题存在共享档案里，家人加入后自动同步。
