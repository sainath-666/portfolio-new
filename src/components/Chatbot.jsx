import { useState } from "react";
import botAnswers from "../data/botAnswers";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const matched = botAnswers.find((q) =>
      input.toLowerCase().includes(q.question.toLowerCase())
    );
    const botMessage = {
      sender: "bot",
      text: matched
        ? matched.answer
        : "I'm not sure how to respond to that. Please ask something else!",
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-gray-800 text-white rounded-xl shadow-xl overflow-hidden z-50">
      <div className="bg-blue-600 px-4 py-3 font-bold">🤖 Ask Me Anything</div>
      <div className="h-64 overflow-y-auto p-4 space-y-2 text-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-md ${
              msg.sender === "user"
                ? "bg-blue-500 text-right ml-12"
                : "bg-gray-700 text-left mr-12"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex border-t border-gray-600">
        <input
          type="text"
          className="flex-1 p-2 bg-gray-700 text-white outline-none"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 px-4 hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
