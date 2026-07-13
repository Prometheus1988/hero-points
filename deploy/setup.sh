#!/usr/bin/env bash
# 小英雄上学积分 —— 腾讯云一键部署脚本
# 用法（在服务器上以 root 运行）：
#   bash <(curl -fsSL https://raw.githubusercontent.com/Prometheus1988/hero-points/main/deploy/setup.sh)
# 或把本文件内容整段粘贴到服务器终端执行。
set -e

REPO="https://github.com/Prometheus1988/hero-points.git"
APP_DIR="/opt/hero-points"
PORT="${PORT:-80}"

echo "==> 1/5 安装 Node.js 与 git"
if command -v apt-get >/dev/null 2>&1; then
  export DEBIAN_FRONTEND=noninteractive
  apt-get update -y
  if ! command -v node >/dev/null 2>&1; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
  fi
  apt-get install -y git
elif command -v dnf >/dev/null 2>&1; then
  dnf install -y nodejs git || (curl -fsSL https://rpm.nodesource.com/setup_20.x | bash - && dnf install -y nodejs git)
elif command -v yum >/dev/null 2>&1; then
  if ! command -v node >/dev/null 2>&1; then curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -; fi
  yum install -y nodejs git
else
  echo "未识别的包管理器，请手动安装 Node.js 20+ 和 git 后重试"; exit 1
fi
echo "    node 版本: $(node -v)"

echo "==> 2/5 获取代码到 $APP_DIR"
if [ -d "$APP_DIR/.git" ]; then
  git -C "$APP_DIR" pull --ff-only
else
  git clone "$REPO" "$APP_DIR"
fi
mkdir -p "$APP_DIR/data"

echo "==> 3/5 创建 systemd 服务（开机自启、崩溃自动重启）"
cat >/etc/systemd/system/hero-points.service <<EOF
[Unit]
Description=Hero Points App
After=network.target

[Service]
Type=simple
WorkingDirectory=$APP_DIR
Environment=PORT=$PORT
ExecStart=$(command -v node) $APP_DIR/server.js
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
EOF

echo "==> 4/5 启动服务"
systemctl daemon-reload
systemctl enable hero-points
systemctl restart hero-points
sleep 1

echo "==> 5/5 完成"
IP=$(curl -fsSL https://api.ipify.org 2>/dev/null || echo "你的公网IP")
echo ""
echo "======================================================"
echo " 部署完成！访问地址： http://$IP/"
echo " 状态查看： systemctl status hero-points"
echo " 更新到最新： cd $APP_DIR && git pull && systemctl restart hero-points"
echo ""
echo " ⚠️ 别忘了在【腾讯云控制台 → 安全组】放行 TCP 端口 $PORT"
echo "======================================================"
