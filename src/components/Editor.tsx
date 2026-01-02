import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorView } from "@codemirror/view";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Editor({ value, onChange }: EditorProps) {
  return (
    <div
      className="w-full h-full border rounded-lg overflow-hidden focus-within:ring-2 
                 focus-within:ring-blue-500"
    >
      <CodeMirror
        value={value}
        height="100%"
        extensions={[
          markdown({ base: markdownLanguage, codeLanguages: languages }),
        ]}
        onChange={(value:string) => onChange(value)}
        theme={
          document.documentElement.classList.contains("dark")
            ? oneDark
            : EditorView.theme({}, { dark: false })
        }
        aria-label="Markdown editor input"
        basicSetup={{
          lineNumbers: true,
          highlightActiveLine: true,
          highlightActiveLineGutter: true,
        }}
      />
    </div>
  );
}
