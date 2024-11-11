import React from "react";
import { MdOutlineClose } from "react-icons/md";

interface ToastProps {
  message: string;
  type: string;
}

const Toast = ({ message, type }: ToastProps) => {
  const typeClasses = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
  };

  return (
    <div
      className={`flex items-center p-4 rounded shadow-lg ${typeClasses[type]}`}
    >
      <span className="flex-1">{message}</span>
      <button
        className="ml-4 text-white hover:text-gray-200 focus:outline-none"
        onClick={() => {}}
      >
        <MdOutlineClose className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Toast;
