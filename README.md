# Text to Plain Text

[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=flat&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightning-fast, **privacy-first** text-stripping and utility scratchpad ecosystem. Built for developers, writers, and power users who need to clean, transform, and format text without compromising their data privacy.

[**Visit the Website**](https://texttoplaintext.com) <!-- Replace with actual URL if known -->

---

## 🌟 Key Features

- **Privacy-First Architecture:** All text processing happens locally in your web browser. No data ever leaves your computer; we never see, store, or track your content.
- **Comprehensive Toolset:** 30+ tools for cleaning, transforming, encoding, decoding, and filtering text and data.
- **Modern Experience:** A minimal, Vercel-inspired design with a focus on performance and usability.
- **Command Palette:** Instantly jump between tools using `Cmd+K` or `Ctrl+K`.
- **Dark Mode:** Native support for both light and dark themes with seamless transitions.
- **SEO Optimized:** Built with Astro for lightning-fast page loads and excellent search visibility.

## 🛠️ The Toolset

Our ecosystem is organized into five core categories:

### 🧹 Cleaning
- **Plain Text Converter:** Instantly strip all formatting from rich text.
- **Whitespace Visualizer:** Make invisible spaces and tabs visible.
- **Extra Spaces Remover:** Normalize text spacing and remove redundant characters.
- **HTML Tag Stripper:** Extract pure text content from markup.

### 🔄 Transform
- **Case Converter:** Switch between UPPERCASE, lowercase, Title Case, etc.
- **Markdown Strip:** Convert Markdown syntax into clean plain text.
- **Slug Generator:** Create URL-friendly slugs or desluggify them.
- **Line Numberer:** Automatically sequence every line of text.

### 🔐 Encode / Decode
- **Base64 Converter:** Securely encode or decode text to/from Base64.
- **URL Converter:** Percent-encode or decode URLs for web safety.

### 📊 Data
- **JSON Formatter/Minifier:** Pretty-print or compress JSON data.
- **JSON ↔ CSV Converter:** Seamlessly switch between JSON arrays and CSV tables.
- **Duplicate Remover:** Filter out identical lines, paragraphs, words, or sentences.

### 🔍 Filter
- **Redact Sensitive Info:** Automatically hide emails, phone numbers, and IP addresses.
- **Character Frequency:** Analyze the distribution of characters in any text block.
- **Social Trimmers:** Truncate text for Twitter, SMS, or LinkedIn limits.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build/) (v6+)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography:** Geist (Geometric Sans) & Geist Mono (Technical Labels)
- **Deployment:** Optimized for Vercel
- **Privacy:** Client-side JavaScript (ESM)

## 💻 Getting Started

### Prerequisites

- **Node.js:** `v22.12.0` or higher
- **NPM:** Standard package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/text-to-plain-text.git
   cd text-to-plain-text
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/` |
| `npm run preview` | Preview your build locally before deploying |

## 📂 Project Structure

```text
/
├── src/
│   ├── components/     # Reusable UI components (Workspace, RelatedTools)
│   ├── layouts/        # BaseLayout and page templates
│   ├── lib/            # Shared logic and tool definitions
│   ├── pages/          # Individual tool pages (Astro routes)
│   └── styles/         # Global CSS and Tailwind directives
├── public/             # Static assets (favicons, etc.)
└── astro.config.mjs    # Astro configuration
```

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Built with ❤️ for the open web.
