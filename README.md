# Algomorph 🚀

**Algomorph** is a premium, interactive offline study companion designed to accelerate your preparation for FAANG/MNC coding and SQL interviews. It offers a structured 10-Day Algorithm Roadmap and a prioritized 38-Question SQL Tiered Roadmap, equipped with localized WebAssembly database runtimes, sandboxed code test harness execution, and an AI study assistant.

---

## ✨ Features

- **📂 Dual-Track Interview Roadmaps**
  - **Algorithms**: A structured 10-day preparation program containing the most frequently asked MNC questions, supporting C++, Python, and Java.
  - **SQL & Databases**: 38 prioritized database questions ordered from fundamental JOINs to advanced window aggregations, mapped directly to MNC rounds.
- **💻 Integrated Monaco Code Editor**
  - Syntactically highlighted, fully customizable code editor powered by Microsoft's Monaco, matching VS Code dark color schemas.
- **⚡ In-Browser SQLite WebAssembly Query Execution**
  - Fully offline SQL sandbox using localized `sql.js` WASM modules. Run query scripts instantly against seed tables and database schemas without configuring servers.
- **📦 Isolated Sandbox Execution & 12+ Inbuilt Test Cases**
  - Sandboxed code sandbox (powered by OneCompiler iframe) integrated into a collapsible LeetCode-style bottom terminal console.
  - Features dynamic class/function wrapper detection to automatically execute your code against **12 exhaustive validation test cases** in a sequential loop.
- **🧠 Contextual AI Study Assistant**
  - Interactive chatbot for each problem to instantly query intuition approaches, time/space complexity bounds, edge cases, and debugging tips.
- **🎛️ Resizable Workspace Layout**
  - Claymorphic/Glassmorphic workspace with resizable panels. Drag dividers to customize the width of your Description, Code Editor, and Chat panels (preferences are persisted locally).
- **💾 100% Persistent Progress & Offline Resiliency**
  - Automatically caches code edits, active language selections, chatbot dialogues, and solved problem checklists in `localStorage` across page reloads.

---

## 🛠️ Technology Stack

- **Core**: React 19, JavaScript (ES6+), Semantic HTML5
- **Style/Branding**: Vanilla CSS3, Glassmorphic / Claymorphic UI system, custom Aurora ambient lighting
- **Code Editor**: `@monaco-editor/react`
- **SQL Engine**: `sql.js` (SQLite compiled to WebAssembly)
- **Compiler Sandbox**: OneCompiler Embed Console

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/nbdyknws-abhi/Algomorph.git
   cd Algomorph
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Build production static bundle:
   ```bash
   npm run build
   ```
   This generates ready-to-deploy static assets inside the `dist/` directory.

---

## 🔒 Security & Privacy

Algomorph runs **100% client-side** in your browser:
- SQLite databases are hosted locally in-memory via WASM.
- Progress and code edits are saved exclusively in your browser's local cache.
- Highly sensitive assets (PDFs, local documents) are explicitly excluded from tracking via the project `.gitignore`.

---

## 📜 License
This project is open-source and available under the MIT License.
