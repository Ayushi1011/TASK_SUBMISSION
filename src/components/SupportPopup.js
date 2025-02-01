import React, { useState } from "react";
import closeIcon from "../assests/support-icons/closeIcon.svg";
import mailIcon from "../assests/support-icons/mailIcon.svg";
import chatIcon from "../assests/support-icons/chatIcon.svg";
import supportIcon from "../assests/support-icons/supportButtonIcon.svg";

function SupportPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {/* Support Popup */}
      {isOpen && (
        <div className="bg-blue-200 shadow-lg rounded-2xl p-4 w-64 mb-2 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 "
          >
            <img src={closeIcon} alt="Close" className="w-4 h-4" />
          </button>
          <h3 className="font-semibold text-gray-700 mb-3">
            We are here to help!
          </h3>
          <button className="w-full flex items-center gap-2 border p-2 rounded-lg mb-2 bg-white hover:bg-blue-50 transition">
            <img src={mailIcon} alt="Mail" className="w-5 h-5" />
            Send an email
          </button>
          <button className="w-full flex items-center gap-2 border p-2 rounded-lg bg-white hover:bg-green-50 transition">
            <img src={chatIcon} alt="Chat" className="w-5 h-5" />
            Chat with us
          </button>
        </div>
      )}

      {/* Support Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <img src={supportIcon} alt="Support" className="w-5 h-5" />
        Support
      </button>
    </div>
  );
}

export default SupportPopup;
