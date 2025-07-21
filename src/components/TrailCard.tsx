// components/TrailCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

interface TrailCardProps {
  id: number;
  imageSrc: string;
  title: string;
  participants: number;
  description: string;
  flyTo: () => void;
  children: ReactNode;
}

export default function TrailCard({
  id,
  imageSrc,
  title,
  participants,
  description,
  flyTo,
  children,
}: TrailCardProps) {
  return (
    <div className="w-full shadow-2xl bg-white dark:bg-gray-800 rounded-none mb-5 gap-2">
      {/* 圖片容器 */}
      <div className="relative w-full aspect-[3/2]">
        <Image src={imageSrc} fill alt={title} style={{ objectFit: "cover" }} />

        {/* 右下角按鈕 */}
        <button
          className="absolute bottom-4 right-4 p-2 bg-white/80 dark:bg-gray-700/80 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition"
          onClick={flyTo}
        >
          <FaMapMarkerAlt className="w-5 h-5 text-gray-800 dark:text-gray-200" />
        </button>
      </div>

      {/* 文字區塊 */}
      <div className="p-4 sm:p-6">
        <div className="flex flex-col gap-4">
          {/* Level & Rating */}
          <div className="flex items-center justify-between">
            <Link href={`/trail/${id}`}>
              <div className="font-bold text-2xl">{title}</div>
            </Link>
            <div className="flex items-center gap-2 text-yellow-500">
              <div className="flex items-center gap-1 ml-4">
                <BsFillPeopleFill />
                <span className="text-yellow-500">{participants}</span>
              </div>
            </div>
          </div>
          {children}
          {/* Description */}
          <div className="text-sm text-gray-600 dark:text-gray-400">{description}</div>
        </div>
      </div>
    </div>
  );
}
