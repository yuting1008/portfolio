"use client";

export function BackToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 w-12 h-12 z-50 rounded-full bg-black dark:bg-gray-100 text-white dark:text-black p-3 shadow-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition cursor-pointer"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
