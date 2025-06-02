import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ code, language = "javascript" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative bg-[#282c34] rounded-lg overflow-auto text-white my-4">
      <div className="flex items-center bg-zinc-700 justify-between px-4 py-2 border-b border-gray-700">
        <p className="text-xs opacity-70">{language}</p>
        <button
          onClick={handleCopy}
          className="text-xs px-2 py-1 cursor-pointer"
        >
          {copied ? "✅ Copied!" : "📋 Copy code"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          background: "transparent", // agar menyatu dengan parent
          padding: "1rem",
          fontSize: "0.9rem",
          margin: 0,
          maxHeight: "400px",
          overflow: "auto",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
