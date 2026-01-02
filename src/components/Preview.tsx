import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";

interface PreviewProps {
  markdown: string;
  isLoading?: boolean;
}

export default function Preview({ markdown, isLoading = false }: PreviewProps) {
  return (
    <section
      aria-label="Markdown preview"
      role="region"
      className="prose max-w-none bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 
                 p-4 rounded-lg shadow-sm overflow-auto focus:outline-none focus:ring-2 
                 focus:ring-blue-500"
      tabIndex={0}
    >
      {isLoading ? (
        <p className="animate-pulse text-gray-500 dark:text-gray-400">
          Loading preview...
        </p>
      ) : (
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {markdown}
        </ReactMarkdown>
      )}
    </section>
  );
}
