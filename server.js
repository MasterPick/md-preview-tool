/**
 * Markdown Preview Tool v3.1 - Express Server
 * 功能增强版：实时预览、代码高亮、多主题、导出、目录生成
 * 
 * v3.1 新增:
 * - Mermaid 图表支持
 * - KaTeX 数学公式支持
 */
const express = require("express");
const fs       = require("fs");
const path     = require("path");
const { JSDOM } = require("jsdom");
const { marked } = require("marked");
const hljs = require("highlight.js");
const DOMPurify = require("dompurify");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(express.static(path.join(__dirname, "public")));

// ── Marked Config ─────────────────────────────────────────────────────────────
const renderer = new marked.Renderer();

// 自定义代码块渲染，支持 mermaid
renderer.code = function(code, language) {
  // Mermaid 图表
  if (language === 'mermaid') {
    return `<div class="mermaid">${code}</div>`;
  }
  // 数学公式块
  if (language === 'math' || language === 'katex') {
    return `<div class="katex-block" data-latex="${escapeHtml(code)}"></div>`;
  }
  // 普通代码块
  if (language && hljs.getLanguage(language)) {
    try {
      const highlighted = hljs.highlight(code, { language }).value;
      return `<pre><code class="hljs language-${language}">${highlighted}</code></pre>`;
    } catch {}
  }
  try {
    const highlighted = hljs.highlightAuto(code).value;
    return `<pre><code class="hljs">${highlighted}</code></pre>`;
  } catch {
    return `<pre><code>${escapeHtml(code)}</code></pre>`;
  }
};

marked.setOptions({
  gfm: true,
  breaks: true,
  renderer: renderer
});

// ── DOMPurify with JSDOM window ──────────────────────────────────────────────
const { window } = new JSDOM("").window;
const purify = DOMPurify(window);

// 允许 mermaid 和 katex 相关的标签/属性
purify.addHook('uponSanitizeElement', (node, data) => {
  if (data.tagName === 'div') {
    if (node.classList.contains('mermaid') || node.classList.contains('katex-block')) {
      // 保留这些元素
    }
  }
});

// ── Helpers ──────────────────────────────────────────────────────────────────
function renderMarkdown(md) {
  const rawHtml = marked.parse(md);
  // 允许 mermaid 和 katex 类
  return purify.sanitize(rawHtml, { 
    ADD_ATTR: ["target", "data-latex"],
    ADD_TAGS: ["div"]
  });
}

function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function extractTOC(md) {
  const headings = [];
  const lines = md.split("\n");
  for (const line of lines) {
    const m = line.match(/^(#{1,3})\s+(.+)/);
    if (m) {
      const level = m[1].length;
      const text = m[2].trim();
      const id = text.toLowerCase().replace(/[^\w]+/g, "-");
      headings.push({ level, text, id });
    }
  }
  return headings;
}

function wordCount(md) {
  const text = md.replace(/[#*`_\[\](){}|\\]/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

function estimateReadTime(md) {
  const mins = Math.ceil(wordCount(md) / 200);
  return mins < 1 ? "< 1 min" : `${mins} min`;
}

// ── Routes ───────────────────────────────────────────────────────────────────

// POST /api/render - Render Markdown to HTML
app.post("/api/render", (req, res) => {
  const { markdown, theme } = req.body;
  if (!markdown) return res.status(400).json({ success: false, error: "markdown is required" });
  try {
    const html = renderMarkdown(markdown);
    const toc = extractTOC(markdown);
    const words = wordCount(markdown);
    const readTime = estimateReadTime(markdown);
    res.json({ success: true, html, toc, stats: { words, readTime, chars: markdown.length } });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// POST /api/export/html - Export as HTML file
app.post("/api/export/html", (req, res) => {
  const { markdown, title = "Document" } = req.body;
  try {
    const html = renderMarkdown(markdown);
    const full = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/github.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
<style>
body{max-width:800px;margin:0 auto;padding:40px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.8;color:#24292f}
code{background:#f6f8fa;padding:2px 6px;border-radius:4px;font-size:.9em}
pre{background:#f6f8fa;padding:16px;border-radius:8px;overflow-x:auto}
pre code{background:none;padding:0}
blockquote{border-left:4px solid #d1d5da;margin:0;padding-left:16px;color:#6a737d}
table{border-collapse:collapse;width:100%}
th,td{border:1px solid #d1d5da;padding:8px 12px}
th{background:#f6f8fa}
img{max-width:100%}
a{color:#0366d6}
h1,h2,h3{border-bottom:1px solid #e1e4e8;padding-bottom:8px}
.mermaid{background:#f6f8fa;padding:16px;border-radius:8px;margin:16px 0;text-align:center}
.katex-block{margin:16px 0;text-align:center;overflow-x:auto}
</style>
</head>
<body>
${html}
<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
<script>
mermaid.initialize({startOnLoad:true});
document.querySelectorAll('.katex-block').forEach(el=>{
  try{katex.render(el.dataset.latex,el,{displayMode:true,throwOnError:false});}
  catch(e){el.textContent=e.message;}
});
</script>
</body>
</html>`;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Content-Disposition", `attachment; filename="${sanitizeFilename(title)}.html"`); 
    res.send(full);
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// POST /api/export/pdf - Return HTML with print CSS for browser PDF printing
app.post("/api/export/pdf", (req, res) => {
  const { markdown, title = "Document" } = req.body;
  try {
    const html = renderMarkdown(markdown);
    res.json({ success: true, title, html });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// GET /api/preview/:id - Get saved preview session
app.get("/api/preview/:id", (req, res) => {
  const sessionsDir = path.join(__dirname, "data", "sessions");
  const file = path.join(sessionsDir, `${sanitizeFilename(req.params.id)}.json`);
  if (!fs.existsSync(file)) return res.status(404).json({ success: false, error: "Session not found" });
  try {
    const data = JSON.parse(fs.readFileSync(file, "utf-8"));
    res.json({ success: true, data });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// POST /api/preview - Save preview session
app.post("/api/preview", (req, res) => {
  const { id, markdown, title } = req.body;
  if (!id) return res.status(400).json({ success: false, error: "id is required" });
  const sessionsDir = path.join(__dirname, "data", "sessions");
  if (!fs.existsSync(sessionsDir)) fs.mkdirSync(sessionsDir, { recursive: true });
  const file = path.join(sessionsDir, `${sanitizeFilename(id)}.json`);
  fs.writeFileSync(file, JSON.stringify({ id, markdown: markdown || "", title: title || "", savedAt: new Date().toISOString() }, null, 2), "utf-8");
  res.json({ success: true, savedAt: new Date().toISOString() });
});

// ── Utils ────────────────────────────────────────────────────────────────────
function sanitizeFilename(name) {
  return String(name).replace(/[^a-zA-Z0-9_\-]/g, "_").substring(0, 64);
}

// ── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Markdown Preview v3.1 running at http://localhost:${PORT}`);
  console.log("  POST /api/render       - Render Markdown to HTML");
  console.log("  POST /api/export/html  - Export as standalone HTML");
  console.log("  POST /api/export/pdf   - Export for PDF (print)");
  console.log("  GET  /api/preview/:id  - Load saved session");
  console.log("  POST /api/preview      - Save session");
  console.log("  NEW: Mermaid diagram & KaTeX math support");
});
