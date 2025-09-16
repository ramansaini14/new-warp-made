'use client';

import TaskManager from '@/components/TaskManager';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in">
            Warp Task Manager
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in-delay">
            Stay organized and boost your productivity
          </p>
        </div>
        <TaskManager />
      </main>
    </div>
  );
}
