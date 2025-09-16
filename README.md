# Warp Task Manager 🚀

A modern, lightweight task management application built with Next.js 15, TypeScript, and Tailwind CSS. Features a beautiful dark/light mode toggle, priority-based task organization, and persistent local storage.

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

## 🚢 Deployment

This app is optimized for deployment on Vercel:

```bash
npm run build
vercel --prod
```

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and Tailwind CSS
