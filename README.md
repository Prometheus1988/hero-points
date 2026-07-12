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

## 免费部署（推荐 Netlify Drop，约 2 分钟）
1. 打开 https://app.netlify.com/drop
2. 把整个 `hero-points-app` 文件夹拖进网页
3. 得到一个网址（如 `https://xxx.netlify.app`），手机打开即可
4. 全家在各自手机打开同一网址 →「家长」→ 创建/加入家庭码 → 添加到主屏幕

也可用 GitHub Pages、Vercel、Cloudflare Pages，都是纯静态托管，免费。

## 数据说明
- 单机数据存在浏览器 localStorage
- 家庭共享用免费的 jsonblob.com 云存储（家庭码即数据地址）。如需更可靠/私密的后端，可后续换成 Supabase 等。
