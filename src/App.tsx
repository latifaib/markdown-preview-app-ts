import { Routes, Route } from "react-router-dom";
import EditorPage from "./pages/EditorPage";
import ErrorTestPage from "./pages/ErrorTestPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostsPage from "./pages/PostsPage";
import ErrorBoundary from "./components/ErrorBoundary";
import ThemeToggle from "./components/ThemeToggle";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import "./index.css";

function App() {
  // State
  const [markdown, setMarkdown] = useState<string>(
    localStorage.getItem("markdown") ||
      "# Welcome to My Markdown Preview App\n\n```html\nI'm a Frontend Engineer!```"
  );
  const [statusMessage, setStatusMessage] = useState<string>("");

  // React Query mutation
  const saveMutation = useMutation({
  mutationFn: async (content: string) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Markdown Doc", body: content }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to save");
    }
  },
  onSuccess: () => setStatusMessage("Markdown saved successfully!"),
  onError: () => setStatusMessage("Failed to save markdown!"),
});


  // Handlers
  const handleSave = () => {
    setStatusMessage("");
    saveMutation.mutate(markdown);
  };

  const handleLoad = () => {
    setStatusMessage("");
    const savedMarkdown = localStorage.getItem("markdown");
    if (savedMarkdown) {
      setMarkdown(savedMarkdown);
      setStatusMessage("Markdown loaded from local storage.");
    } else {
      setStatusMessage("No saved markdown found in local storage.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="p-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">Markdown Preview</h1>
        <div className="flex gap-2 items-center relative">
          <button
            onClick={handleSave}
            aria-label="Save markdown to API"
            aria-busy={saveMutation.isPending}
            disabled={saveMutation.isPending}
            className={`px-4 py-2 text-white rounded ${
              saveMutation.isPending
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {saveMutation.isPending ? "Saving..." : "Save"}
          </button>

          <button
            onClick={handleLoad}
            aria-label="Load markdown from local storage"
            disabled={saveMutation.isPending}
            className={`px-4 py-2 text-white rounded ${
              saveMutation.isPending
                ? "bg-green-300 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            Load
          </button>

          {/* Screen reader status */}
          <span className="sr-only" role="status" aria-live="polite">
            {statusMessage}
          </span>

          <ThemeToggle />
        </div>
      </header>

      {/* Routes */}
      <main className="p-4">
        <ErrorBoundary>
          <Routes>
            <Route
              path="/"
              element={
                <EditorPage
                  markdown={markdown}
                  setMarkdown={setMarkdown}
                />
              }
            />
             <Route path="/" element={<EditorPage markdown={markdown} setMarkdown={setMarkdown} />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/error-test" element={<ErrorTestPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
