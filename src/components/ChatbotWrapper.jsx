import { useState } from "react";
import Chatbot from "./Chatbot";
import { FaRobot } from "react-icons/fa";

const ChatbotWrapper = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50 hover:bg-blue-700"
        aria-label="Open Chatbot"
      >
        <FaRobot size={24} />
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex justify-center items-end md:items-center">
          <div className="bg-white rounded-lg w-full max-w-md m-4 shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setOpen(false)}
            >
              ✖
            </button>
            <Chatbot />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWrapper;
