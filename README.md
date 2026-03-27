# 📝 Markdown Preview Tool v2

> 强大的 Markdown 实时预览编辑器，支持多主题、自动保存、文件拖入、同步滚动，零依赖、开箱即用。
>
> A powerful Markdown live preview editor with multi-theme, auto-save, file drop, and sync-scroll. Zero dependencies.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D14-green.svg)](package.json)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)]()

[English](#english) · [中文](#中文)

---

## ✨ v2.0 新增功能

| 功能 | 说明 |
|------|------|
| 🌙 **4 套主题** | Catppuccin Mocha · Light · Green GitHub · Vintage |
| 💾 **自动保存** | 每 1.5 秒自动保存到浏览器 localStorage |
| 📂 **文件拖入** | 直接拖入 `.md` 文件加载内容 |
| 🔄 **同步滚动** | 编辑器与预览区联动滚动定位 |
| 🔲 **全屏预览** | 一键隐藏编辑器，专注阅读模式 |
| 🖨 **打印 PDF** | 浏览器原生打印，直接导出 PDF |
| 📋 **快捷键** | `Ctrl+B` 粗体 / `Ctrl+I` 斜体 / `Ctrl+S` 保存 |
| 📊 **实时统计** | 字符 · 单词 · 行数 · 标题数量 · 光标行号 |
| 💾 **多格式导出** | 导出 HTML / 导出 Markdown 源文件 |

---

## 中文

### 📖 功能详情

#### 🌙 多主题切换
在工具栏右上角选择主题，立即切换界面配色：
- **Catppuccin Mocha**（默认）：暗色紫灰配色，护眼舒适
- **Light**：简洁浅色，适合白天使用
- **Green GitHub**：GitHub 风格暗色，开发者友好
- **Vintage**：复古纸张风格，温暖怀旧

#### 💾 自动保存
- 编辑后自动在 1.5 秒后保存到浏览器 `localStorage`
- 刷新页面或重新打开工具，内容自动恢复
- 标题栏实时显示保存状态（绿色圆点 = 已保存，脉冲动画 = 保存中）
- `Ctrl+S` 手动立即保存

#### 📂 文件拖入
- 直接将 `.md` / `.markdown` / `.txt` 文件拖入窗口，自动加载内容
- 工具栏「📂 打开」按钮也支持文件选择

#### 🔄 同步滚动
- 编辑器滚动时，预览区自动滚动到对应位置
- 预览区滚动时，编辑器同步回跳

#### 🖨 打印与导出
- **打印**：`Ctrl+P` 或工具栏「🖨 打印」按钮，浏览器打印对话框，可选「另存为 PDF」
- **导出 HTML**：导出为包含样式的完整 HTML 文件
- **导出 MD**：导出 Markdown 源文件

#### 快捷键
| 快捷键 | 功能 |
|--------|------|
| `Ctrl+B` | 插入粗体 |
| `Ctrl+I` | 插入斜体 |
| `Ctrl+S` | 立即保存 |
| `Ctrl+P` | 打印 / 导出 PDF |

---

### 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/MasterPick/md-preview-tool.git
cd md-preview-tool

# 启动（无需 npm install，零依赖）
node server.js
```

打开浏览器访问：**http://localhost:3000**

> 💡 Node.js >= 14.0.0 即可运行，无任何外部 npm 依赖。

---

### 📁 项目结构

```
md-preview-tool/
├── server.js           # Node.js HTTP 服务器（原生 http 模块，零依赖）
├── package.json        # 项目配置
├── .gitignore
├── public/
│   └── index.html      # 前端单页应用（所有逻辑内嵌）
└── README.md
```

---

### 🛠️ 技术栈

| 技术 | 用途 |
|------|------|
| **Node.js**（原生 `http` 模块） | 本地 HTTP 服务器，零依赖 |
| **Marked.js**（CDN） | Markdown 解析与渲染 |
| **原生 HTML/CSS/JS** | 前端 UI，无框架依赖 |
| **CSS 变量 + 主题系统** | 4 套主题切换 |

---

### 📖 使用说明

1. **输入**：在左侧编辑器输入 Markdown，或直接拖入 `.md` 文件
2. **预览**：右侧实时显示渲染后的 HTML 效果
3. **工具栏**：点击按钮快速插入 Markdown 语法
4. **主题**：右上角选择主题，立即切换配色
5. **保存**：内容自动保存，刷新不丢失
6. **导出**：点击「导出 HTML」或「导出 MD」保存文件
7. **全屏**：点击「🔲 全屏预览」隐藏编辑器，专注阅读
8. **打印**：点击「🖨 打印」通过浏览器导出 PDF

---

### 🧭 适用场景

- 📝 撰写 README、技术文档时快速预览
- 📚 学习 Markdown 语法
- 🔄 将 Markdown 内容转换为 HTML 片段
- 💡 团队文档编写与审阅
- 📄 通过浏览器打印功能导出 PDF

---

## English

### Key Features

- 🌙 **4 Built-in Themes** — Catppuccin Mocha / Light / Green GitHub / Vintage
- 💾 **Auto-Save** — Automatically saves to browser localStorage every 1.5 seconds
- 📂 **File Drop** — Drag and drop `.md` files directly into the editor
- 🔄 **Sync Scroll** — Editor and preview scroll in sync
- 🔲 **Focus Mode** — Hide editor for distraction-free reading
- 🖨 **Print to PDF** — Native browser print dialog, save as PDF
- 📋 **Keyboard Shortcuts** — `Ctrl+B` bold / `Ctrl+I` italic / `Ctrl+S` save
- 📊 **Live Stats** — Characters, words, lines, headings, cursor line
- 💾 **Multi-Export** — Export as HTML or Markdown source file

### Quick Start

```bash
git clone https://github.com/MasterPick/md-preview-tool.git
cd md-preview-tool
node server.js
```

Visit **http://localhost:3000**

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+B` | Insert bold |
| `Ctrl+I` | Insert italic |
| `Ctrl+S` | Save now |
| `Ctrl+P` | Print / Export PDF |

---

## 📄 License

MIT © [MasterPick](https://github.com/MasterPick)

---

> 🤖 本项目由 AI 辅助开发，作为每日项目积累计划的一部分。