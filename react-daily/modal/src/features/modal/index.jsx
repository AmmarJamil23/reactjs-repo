import React from 'react'
import { useEffect } from "react";

const Modal = ({ open = false, onClose = () => {}, children }) => {
  if (!open) return null;

  useEffect(() => {
    function handleKey(e) {
        if (e.key === "Escape") {
            onClose();
        }
    }

    if (open) {
        window.addEventListener("keydown", handleKey);
    }

    return () => {
        window.removeEventListener("keydown", handleKey);
    }
  }, [open, onClose])

  return (
    <div
    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    onClick={onClose}
  >
    <div
      className="bg-white p-6 rounded shadow-lg w-[400px] animate-[fadeIn_0.2s_ease]"
      onClick={(e) => e.stopPropagation()}
    >
      {children || "Modal content here..."}

      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Close
      </button>
    </div>
  </div>
  );
}


export default Modal;