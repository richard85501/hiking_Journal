"use client";

import BackButton from "./BackButton";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full p-4 relative flex items-center justify-center sticky top-0 z-10">
      {pathname !== "/" && (
        <div className="absolute left-4">
          <BackButton />
        </div>
      )}
      <h1 className="text-xl font-bold">CHANG CHANG Hiking Journal</h1>
    </nav>
  );
}
