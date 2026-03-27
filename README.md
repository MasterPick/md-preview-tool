# 📝 MD Preview

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Node](https://img.shields.io/badge/Node-%3E%3D14-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Markdown](https://img.shields.io/badge/Markdown-Preview-DC382D?style=for-the-badge&logo=markdown&logoColor=white)](https://commonmark.org/)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey?style=for-the-badge)]()
[![Stars](https://img.shields.io/github/stars/MasterPick/md-preview?style=for-the-badge&color=gold)](https://github.com/MasterPick/md-preview/stargazers)

*A powerful Markdown live preview editor with multi-theme, auto-save, file drop, and sync-scroll. Zero dependencies, open instantly.*

**[English](#english)** · **[中文](#中文)** · **[快速开始](#-快速开始)** · **[功能列表](#-功能列表)** · **[安装](#-安装)** · **[使用示例](#-使用示例)**

</div>

---

## 🌟 项目亮点

> 随手写 Markdown，随时预览 — 4 套主题、自动保存、文件拖入、打印导出，满足你的一切文档编写需求。

| 亮点 | 说明 |
|------|------|
| 🌙 **4 套主题** | Catppuccin Mocha · Light · Green GitHub · Vintage，一键切换 |
| 💾 **自动保存** | 每 1.5 秒自动保存到浏览器本地，刷新不丢失 |
| 📂 **文件拖入** | 直接拖入 `.md` 文件加载内容 |
| 🔄 **同步滚动** | 编辑器与预览区联动滚动定位 |
| 🖨 **打印导出** | 浏览器原生打印，一键另存为 PDF |
| ⚡ **零依赖** | Node.js 原生 `http` 模块，无需 `npm install`，开箱即用 |

---

## ✨ 功能列表

### 🔧 核心功能

| 功能 | 说明 |
|------|------|
| 📝 **实时预览** | 输入 Markdown，右侧即时渲染 HTML |
| 🌙 **4 套主题** | 暗色/浅色/GitHub 风格/复古，工具栏一键切换 |
| 💾 **自动保存** | localStorage 自动保存 + `Ctrl+S` 手动保存 |
| 📂 **文件拖入** | 拖入 `.md` / `.markdown` / `.txt` 文件自动加载 |
| 🔄 **同步滚动** | 编辑器与预览区双向联动滚动 |
| 🔲 **全屏预览** | 一键隐藏编辑器，专注阅读模式 |
| 🖨 **打印 / PDF** | 浏览器打印对话框，可导出 PDF |
| 📋 **快捷键** | `Ctrl+B` 粗体 / `Ctrl+I` 斜体 / `Ctrl+S` 保存 |
| 📊 **实时统计** | 字符数 · 单词数 · 行数 · 标题数 · 光标行号 |
| 💾 **多格式导出** | 导出 HTML 或导出 Markdown 源文件 |
| 📋 **语法工具栏** | 粗体、斜体、代码块、链接、表格、待办等 20+ 按钮 |
| 🍞 **操作提示** | Toast 弹窗，操作结果即时反馈 |

---

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/MasterPick/md-preview.git
cd md-preview

# 启动（无需 npm install，零依赖）
node server.js

# 访问
open http://localhost:3000
```

> 💡 Node.js >= 14.0.0 即可运行，无任何外部 npm 依赖。

---

## 📖 使用示例

### 基础操作

1. **在左侧编辑器输入 Markdown**，右侧实时预览渲染效果
2. **点击工具栏按钮**快速插入语法（粗体、代码块、表格等）
3. **拖入本地 `.md` 文件**直接加载内容
4. **右上角选择主题**，立即切换界面配色

### 快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+B` | 插入粗体 |
| `Ctrl+I` | 插入斜体 |
| `Ctrl+S` | 立即保存到浏览器 |
| `Ctrl+P` | 打开打印对话框（可另存为 PDF） |

### 导出

- **📋 复制 HTML**：点击底部「📋 复制 HTML」复制渲染后的 HTML 源码
- **💾 导出 HTML**：导出为包含样式的完整 HTML 文件
- **💾 导出 MD**：导出 Markdown 源文件
- **🖨 打印**：点击「🖨 打印」→ 浏览器另存为 PDF

---

## 🛠️ 安装

### 环境要求

- Node.js >= 14.0.0

### 安装步骤

```bash
# 克隆仓库
git clone https://github.com/MasterPick/md-preview.git
cd md-preview

# 直接运行（无需安装依赖）
node server.js

# 或使用 npm
npm start
```

启动后打开浏览器访问：**http://localhost:3000**

---

## 📁 项目结构

```
md-preview/
│
├── server.js            # 🚀 Node.js HTTP 服务器（原生 http 模块，零依赖）
├── package.json         # 📦 项目配置
├── .gitignore
│
└── public/
    └── index.html       # 🎨 前端单页应用（所有逻辑内嵌，无需构建）
        ├── CSS 变量主题系统（4 套主题）
        ├── Marked.js CDN 渲染引擎
        └── 原生 JavaScript 交互逻辑
```

---

## 🏗️ 技术架构

```
┌──────────────────────────────────────────────────────┐
│                  Node.js (原生 http)                  │
│                   🚀 HTTP Server                       │
│              零依赖 · 端口 3000                       │
└──────────────────────────┬───────────────────────────┘
                           │ GET /
                           ▼
┌──────────────────────────────────────────────────────┐
│                   public/index.html                   │
│                   🎨 前端单页应用                     │
├──────────────────────────────────────────────────────┤
│  [CSS 变量主题系统]                                   │
│  4 套主题 → .theme-{name} / :root 全局变量           │
├──────────────────────────────────────────────────────┤
│  [Marked.js CDN]                                     │
│  marked.parse(md) → HTML 渲染                        │
├──────────────────────────────────────────────────────┤
│  [本地存储层]                                        │
│  localStorage → 自动保存 / 主题偏好持久化             │
└──────────────────────────────────────────────────────┘
```

**设计亮点：**
- **零构建**：纯 HTML + CSS + JS，无需 webpack/vite，clone 即可运行
- **零依赖**：后端仅用 Node.js 原生模块，前端 Marked.js 通过 CDN 加载
- **主题扩展**：新增主题仅需在 CSS 中定义一套 CSS 变量
- **模块化**：功能逻辑按渲染/存储/交互清晰分层

---

## 🌍 适用场景

| 场景 | 说明 |
|------|------|
| 📝 **文档编写** | 写 README、技术文档时实时预览效果 |
| 📚 **学习 Markdown** | 边写边看，快速掌握语法 |
| 🔄 **内容转换** | 将 Markdown 内容转换为 HTML 片段 |
| 💡 **团队协作** | 文档编写与审阅，预览即结果 |
| 📄 **PDF 导出** | 通过浏览器打印功能直接生成 PDF |

---

## 📄 License

MIT License · Copyright © 2026 [MasterPick](https://github.com/MasterPick)

---

<div align="center">

*🤖 由 AI 辅助生成 · Daily Project — 每日积累，持续迭代*

</div>