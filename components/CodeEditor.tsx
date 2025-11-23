"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
}

export function CodeEditor({ code, onChange }: CodeEditorProps) {
  const [language, setLanguage] = useState("javascript");

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-700 border border-gray-600 text-white text-sm px-3 py-1 rounded"
        >
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="go">Go</option>
          <option value="rust">Rust</option>
        </select>
      </div>
      <div className="border border-gray-700 rounded overflow-hidden">
        <Editor
          height="400px"
          defaultLanguage={language}
          language={language}
          value={code}
          onChange={(value) => onChange(value || "")}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            wordWrap: "on",
          }}
        />
      </div>
    </div>
  );
}

