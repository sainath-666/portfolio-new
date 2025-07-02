import { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Sai's portfolio assistant. Ask me anything." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    // Build Gradio-compatible history format: [[user, assistant], ...]
    const history = [];
    for (let i = 0; i < newMessages.length - 1; i += 2) {
      if (
        newMessages[i].role === "user" &&
        newMessages[i + 1] &&
        newMessages[i + 1].role === "assistant"
      ) {
        history.push([newMessages[i].content, newMessages[i + 1].content]);
      }
    }

    try {
      const res = await axios.post(
        "https://sai455651651651--sai-chatbot.hf.space/run/predict",
        {
          data: [input, history],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const reply = res.data?.data?.[0] || "Hmm... I didn't get that.";
      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("Chatbot error:", err);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Something went wrong. Try again later." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="w-full h-full flex flex-col p-4 bg-white rounded shadow-md">
      <div className="flex-1 overflow-y-auto space-y-2 mb-4 pr-2 max-h-[500px]">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-md max-w-[80%] break-words ${
              msg.role === "user"
                ? "bg-blue-100 text-black ml-auto text-right"
                : "bg-gray-200 text-black mr-auto text-left"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && (
          <div className="text-sm italic text-gray-500">SaiBot is typing...</div>
        )}
      </div>

      <div className="flex gap-2 items-center">
        <input
          className="flex-1 border border-gray-300 rounded px-3 py-2 text-black focus:outline-none"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
