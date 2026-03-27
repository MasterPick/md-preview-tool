# CHANGELOG - 更新日志

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [2.0.0] - 2026-03-27

### 🎉 新增功能

| 功能 | 说明 | 优先级 |
|------|------|--------|
| 多主题切换 | 新增 Catppuccin Mocha / Light / Green GitHub / Vintage 四套主题，工具栏一键切换，主题偏好自动保存 | P0 |
| 自动保存 | 每 1.5 秒自动保存到浏览器 localStorage，页面刷新内容不丢失，支持 Ctrl+S 手动保存 | P0 |
| 文件拖入 | 支持直接拖入 .md / .markdown / .txt 文件到窗口，自动加载内容 | P0 |
| 同步滚动 | 编辑器与预览区联动滚动，可相互触发定位 | P0 |
| 全屏预览模式 | 一键隐藏编辑器，全屏显示 HTML 预览，专注阅读体验 | P1 |
| 打印 / PDF 导出 | 调用浏览器原生打印对话框，可直接另存为 PDF | P1 |
| 快捷键支持 | Ctrl+B（粗体）/ Ctrl+I（斜体）/ Ctrl+S（保存）/ Ctrl+P（打印） | P1 |
| 实时统计增强 | 新增标题数量（目录计数）和光标行号显示 | P1 |
| 多格式导出 | 支持导出 HTML 和 Markdown 源文件两种格式 | P1 |
| Toast 提示 | 底部弹出操作反馈提示（保存成功、文件加载等） | P2 |

### 🔧 优化改进

| 优化项 | 说明 |
|--------|------|
| CSS 变量系统 | 重构样式为 CSS 变量，支撑多主题无缝切换 |
| 代码块多语言 | 工具栏新增 Python / HTML / JavaScript 专用代码块按钮 |
| 分隔条交互 | 优化拖拽分隔条的最小宽度限制（20%~80%） |
| 编辑器背景 | 模拟等宽编辑器行号背景线效果 |
| 示例内容更新 | v2 示例文档覆盖所有新增功能展示 |

### 🛡️ 安全性

- localStorage 异常捕获（隐私模式/存储满时优雅降级）
- 文件读取使用 UTF-8 强制编码，防止乱码

### 📝 文档

- 全面更新 README.md（新增功能列表、中英双语、快捷键表）
- 新增 CHANGELOG.md（版本化变更记录）

### 🔗 提交记录

- `feat: md-preview-tool v2.0 新增自动保存/多主题/文件拖入/同步滚动等 6 项功能 - 2026-03-27`

---

## [1.0.0] - 2026-03-27

### 🎉 初始版本

- ✅ Markdown 实时预览（Marked.js 渲染）
- ✅ 快捷工具栏（粗体、斜体、代码块、链接等 12 个按钮）
- ✅ 字符/单词/行数实时统计
- ✅ 复制 HTML 源码
- ✅ 导出 HTML 文件
- ✅ Catppuccin Mocha 暗色主题
- ✅ 可拖拽分隔线（调整左右面板宽度）
- ✅ 示例内容一键加载