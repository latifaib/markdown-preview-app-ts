import { useRef } from "react";
import Editor from "../components/Editor";
import Preview from "../components/Preview";

export default function EditorPage({ markdown, setMarkdown }) {
  const fileInputRef = useRef(null);

  // Update editor value only (no auto-saving to localStorage)
  const handleEditorChange = (value) => {
    setMarkdown(value);
    localStorage.setItem("markdown", value);
  };

  // Save markdown to local file
  const handleSaveToFile = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "markdown.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Optional: save to localStorage when saving to file
    localStorage.setItem("markdown", markdown);
  };

  // Load markdown from local file
  const handleLoadFromFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      setMarkdown(content);
      localStorage.setItem("markdown", content);
    };
    reader.readAsText(file);
  };

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Editor Panel */}
      <div
        className="p-4 border-b md:border-r md:border-b-0 flex flex-col gap-2"
        aria-label="Markdown editor panel"
        role="region"
      >
        <Editor
          value={markdown}
          onChange={handleEditorChange}
          aria-label="Markdown editor"
        />

        {/* File Buttons */}
        <div className="flex gap-2 items-center">
          <button
            onClick={handleSaveToFile}
            className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
            aria-label="Save markdown to local file"
          >
            Save to File
          </button>

          <input
            type="file"
            accept=".md"
            ref={fileInputRef}
            className="hidden"
            onChange={handleLoadFromFile}
            aria-label="Upload markdown file"
          />
          <button
            onClick={() => fileInputRef.current.click()}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            aria-label="Load markdown from local file"
          >
            Load from File
          </button>
        </div>
      </div>

      {/* Preview Panel */}
      <div
        className="p-4 overflow-auto bg-gray-50 dark:bg-gray-900"
        aria-label="Markdown preview panel"
        role="region"
        tabIndex={0}
      >
        <Preview markdown={markdown} />
      </div>
    </div>
  );
}

