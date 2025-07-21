"use client";

import { redirect } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function BackButton() {
  return (
    <button
      onClick={() => redirect("/")}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent text-black hover:bg-black hover:text-white transition-colors dark:text-white hover:dark:text-gray-800 hover:dark:bg-white"
    >
      <FiArrowLeft className="text-xl" />
    </button>
  );
}
