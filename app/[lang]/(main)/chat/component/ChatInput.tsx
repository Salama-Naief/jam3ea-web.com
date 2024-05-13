import React from "react";
import { supportQuestion } from "../../../../../dummyData";

interface ChatProps {
  label: string;
  type?: "normal" | "select";
}
function ChatInput({ label, type = "normal" }: ChatProps) {
  if (type === "select") {
    return (
      <div>
        <p className="font-bold">{label}</p>
        <select className="outline-none border-b border-x-0 border-t-0 border ring-0 w-full shadow-md h-12 px-4 py-1 mb-6 border-transparent focus:border-transparent focus:ring-0">
          {supportQuestion.results.data[0].children.map((q) => (
            <option key={q._id}>{q.name}</option>
          ))}
        </select>
      </div>
    );
  }
  return (
    <div>
      <p className="font-bold">{label}</p>
      <input
        placeholder={label}
        className="outline-none border-b border-x-0 border-t-0 border ring-0 w-full shadow-md h-12 px-4 py-1 mb-6"
      />
    </div>
  );
}

export default ChatInput;
