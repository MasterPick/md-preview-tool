# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [3.1.0] - 2026-03-28

### Added

#### New Features
- **Mermaid 图表支持** - 支持流程图、时序图、类图、状态图等
- **KaTeX 数学公式** - 支持 LaTeX 数学公式渲染，包括块级和行内公式
- **Markdown 模板** - 预设 6 种常用模板（README、技术文档、博客、Changelog、Mermaid 示例、数学公式示例）
- **全屏模式** - 编辑器和预览区全屏切换
- **查找替换** - 编辑器内查找和替换功能

#### UI Improvements
- 新增模板下拉菜单
- 新增全屏切换按钮
- 新增查找替换面板
- 工具栏新增 Mermaid 和数学公式按钮
- 点击外部自动关闭模板菜单
- ESC 键退出全屏/关闭面板

### Changed
- 服务端支持 Mermaid 和 KaTeX 代码块渲染
- 自定义 marked renderer 处理特殊代码块
- 导出 HTML 时包含 Mermaid 和 KaTeX CDN

### Technical
- 新增 `insertMermaid()` 和 `insertMath()` 工具栏函数
- 新增 `toggleFullscreen()` 和 `exitFullscreen()` 函数
- 新增 `toggleFindPanel()`、`findNext()`、`replaceOne()` 等查找替换函数
- 新增 `templates` 对象存储预设模板

---

## [3.0.0] - 2026-03-15

### Added
- 初始版本发布
- 实时预览、多主题、同步滚动
- 工具栏快捷按钮
- 代码高亮
- 目录生成
- 自动保存
- 导出 HTML/PDF
- 拖拽打开文件
- 可调节布局
- 键盘快捷键
- 字数统计

---

## Version History

| Version | Date | Highlights |
|---------|------|------------|
| 3.1.0 | 2026-03-28 | Mermaid 图表、KaTeX 公式、模板、全屏、查找替换 |
| 3.0.0 | 2026-03-15 | 初始发布，核心功能 |
