import { useRef, ChangeEvent } from "react";
import Editor from "../components/Editor";
import Preview from "../components/Preview";

interface EditorPageProps {
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

export default function EditorPage({ markdown, setMarkdown }: EditorPageProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleEditorChange = (value: string) => {
    setMarkdown(value);
    localStorage.setItem("markdown", value);
  };

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

    localStorage.setItem("markdown", markdown);
  };

  const handleLoadFromFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (!event.target) return;
      const content = event.target.result as string;
      setMarkdown(content);
      localStorage.setItem("markdown", content);
    };
    reader.readAsText(file);
  };

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="p-4 border-b md:border-r md:border-b-0 flex flex-col gap-2">
        <Editor value={markdown} onChange={handleEditorChange} />
        <div className="flex gap-2 items-center">
          <button onClick={handleSaveToFile}>Save to File</button>
          <input
            type="file"
            accept=".md"
            ref={fileInputRef}
            className="hidden"
            onChange={handleLoadFromFile}
          />
          <button onClick={() => fileInputRef.current?.click()}>
            Load from File
          </button>
        </div>
      </div>
      <div className="p-4 overflow-auto bg-gray-50 dark:bg-gray-900">
        <Preview markdown={markdown} />
      </div>
    </div>
  );
}
