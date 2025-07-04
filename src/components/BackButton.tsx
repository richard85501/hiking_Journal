"use client";

import { redirect } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function BackButton() {
  return (
    <button
      onClick={() => redirect("/")}
      className="inline-flex items-center gap-2 pr-2 text-black rounded-full hover:bg-green-50 hover:text-white  transition-colors"
    >
      <FiArrowLeft className="text-xl" />
    </button>
  );
}
