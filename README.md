# Warp Task Manager 🚀

[![CI/CD Pipeline](https://github.com/ramansaini14/new-warp-made/actions/workflows/ci.yml/badge.svg)](https://github.com/ramansaini14/new-warp-made/actions/workflows/ci.yml)
[![Security Scan](https://github.com/ramansaini14/new-warp-made/actions/workflows/security.yml/badge.svg)](https://github.com/ramansaini14/new-warp-made/actions/workflows/security.yml)
[![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=new-warp-made)](https://new-warp-made.vercel.app)
[![TypeScript](https://badgen.net/badge/icon/TypeScript?icon=typescript&label)](https://typescriptlang.org)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, lightweight task management application built with Next.js 15, TypeScript, and Tailwind CSS. Features a beautiful dark/light mode toggle, priority-based task organization, and persistent local storage.

🌟 **[Live Demo](https://new-warp-made.vercel.app)** 🌟

## ✨ Features

- **Modern UI**: Beautiful gradient backgrounds and smooth animations
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Task Priorities**: Organize tasks with high, medium, and low priorities
- **Task Filtering**: Filter tasks by all, active, or completed status
- **Persistent Storage**: Tasks are saved in localStorage
- **Responsive Design**: Works perfectly on desktop and mobile
- **Statistics**: View task completion statistics
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Hooks** for state management
- **Local Storage** for data persistence

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd new-warp-made
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Usage

1. **Add Tasks**: Type in the input field, select priority, and click "Add Task"
2. **Toggle Completion**: Click the circle button next to any task
3. **Delete Tasks**: Click the trash icon to remove tasks
4. **Filter Tasks**: Use the filter buttons to view all, active, or completed tasks
5. **Dark Mode**: Click the theme toggle in the header

## 🎯 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Header.tsx       # Navigation with theme toggle
│   └── TaskManager.tsx  # Main task management logic
```

## 🎨 Key Features Implemented

- **Gradient Backgrounds**: Beautiful blue-to-indigo gradients
- **Smooth Animations**: Custom fade-in animations for better UX
- **Priority System**: Color-coded task priorities with emoji indicators
- **Statistics Dashboard**: Real-time task completion metrics
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🚢 Deployment & CI/CD

### Automated Deployment
This app features a complete CI/CD pipeline with:

#### 🔄 GitHub Actions Workflows
- **CI/CD Pipeline**: Runs on every push and PR
  - Code quality checks (ESLint, TypeScript)
  - Security audits
  - Automated builds
  - Production deployment to Vercel
  - Performance monitoring with Lighthouse
  
- **Security & Dependencies**: Daily scheduled scans
  - CodeQL security analysis
  - Dependency vulnerability checks
  - Automated dependency updates via Dependabot

#### 🚀 Deployment Process
1. **Push to `main`** → Automatic production deployment
2. **Create PR** → Automatic preview deployment
3. **Merge PR** → Production update with performance testing

#### Manual Deployment
```bash
# Deploy to production
vercel --prod

# Or build and deploy
npm run build
vercel --prod
```

### 📊 Monitoring & Quality
- **Performance**: Lighthouse CI runs on every deployment
- **Security**: Daily CodeQL and dependency scans
- **Dependencies**: Automated updates via Dependabot
- **Code Quality**: ESLint and TypeScript checks on every commit

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and Tailwind CSS
