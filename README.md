# Markdown Preview v3.0

> 功能强大的 Markdown 实时预览编辑器 | Powerful Markdown Live Preview Editor

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org)

---

## 功能特性 | Features

| 功能 | 说明 |
|------|------|
| 实时预览 | 280ms 防抖，敲字即渲染 |
| 多主题 | Light / Dark / Dracula 三种主题 |
| 同步滚动 | 编辑器和预览区域同步滚动 |
| 工具栏 | 快捷插入标题、粗体、斜体、链接、图片、代码块、表格等 |
| 代码高亮 | 使用 highlight.js，支持 190+ 语言 |
| 目录生成 | 自动从标题提取目录 TOC |
| 自动保存 | 每2秒自动保存到 localStorage |
| 导出 HTML | 导出为独立 HTML 文件 |
| 导出 PDF | 通过浏览器打印对话框生成 PDF |
| 复制 HTML | 一键复制渲染后的 HTML |
| 拖拽打开 | 直接拖拽 .md 文件打开 |
| 可调节布局 | 拖拽分割线调整编辑/预览比例 |
| 键盘快捷键 | Ctrl+B/I/K/S 等 |
| 字数统计 | 实时字数、字符数、预计阅读时间 |

---

## 快速开始 | Quick Start

```bash
npm install
npm start
# 访问 http://localhost:3000
```

---

## API 接口 | API Endpoints

| Method | Endpoint | 说明 |
|--------|----------|------|
| `POST` | `/api/render` | Markdown 转 HTML，返回 TOC 和统计 |
| `POST` | `/api/export/html` | 导出为独立 HTML 文件 |
| `POST` | `/api/export/pdf` | 获取 PDF 打印用 HTML |
| `GET` | `/api/preview/:id` | 获取保存的预览会话 |
| `POST` | `/api/preview` | 保存预览会话 |

### POST /api/render
```json
{ "markdown": "# Hello\n\nThis is **bold**." }
```

---

## 技术栈 | Tech Stack

- **Express** - Web 服务器
- **marked** - Markdown 解析
- **highlight.js** - 代码语法高亮
- **jsdom + dompurify** - 安全 HTML 渲染
- **Vanilla JS** - 前端（零依赖）

---

## License

MIT © 2026 MasterPick
