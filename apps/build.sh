#!/usr/bin/env bash
# 构建 apps/ 下的所有应用（每个应用是一个带 package.json 的 git submodule），
# 产物默认输出到 Hexo 的 public/apps/<应用名>/，与 source/apps/index.html
# 生成的应用卡片入口页(/apps/)配套，点击卡片即可访问 /apps/<应用名>/。
#
# 用法: bash apps/build.sh [输出目录]
set -euo pipefail

APPS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT_DIR="${1:-$APPS_DIR/../public/apps}"

mkdir -p "$OUT_DIR"

shopt -s nullglob
for app_dir in "$APPS_DIR"/*/; do
  name="$(basename "$app_dir")"

  if [ ! -f "$app_dir/package.json" ]; then
    echo "==> 跳过 $name（没有 package.json）"
    continue
  fi

  echo "==> 构建应用: $name"
  (
    cd "$app_dir"
    if [ -f package-lock.json ]; then
      npm ci
    else
      npm install
    fi
    npm run build
  )

  # 标准多文件构建产物在 dist/，单文件模式在 dist-single/
  dist="$app_dir/dist"
  [ -d "$dist" ] || dist="$app_dir/dist-single"

  if [ ! -d "$dist" ]; then
    echo "!! $name 构建后未找到 dist/ 产物，跳过拷贝" >&2
    continue
  fi

  mkdir -p "$OUT_DIR/$name"
  # 以 /. 结尾，包含隐藏文件
  cp -r "$dist/." "$OUT_DIR/$name/"
  echo "==> $name 已输出到 $OUT_DIR/$name"
done

echo "==> 全部应用构建完成"
