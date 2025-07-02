// components/TrailCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface TrailCardProps {
  imageSrc: string;
  title: string;
  rating: number;
  ratingCount: number;
  description: string;
  flyTo: () => void;
  children: ReactNode;
}

export default function TrailCard({
  imageSrc,
  title,
  rating,
  ratingCount,
  description,
  flyTo,
  children,
}: TrailCardProps) {
  return (
    <div className="w-full shadow-2xl bg-white rounded-none mb-5 gap-2">
      {/* 圖片容器 */}
      <div className="relative w-full aspect-[3/2]">
        <Image src={imageSrc} fill alt={title} style={{ objectFit: "cover" }} />

        {/* 右下角按鈕 */}
        <button
          className="absolute bottom-4 right-4 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition"
          onClick={flyTo}
        >
          <FaMapMarkerAlt className="w-5 h-5 text-gray-800" />
        </button>
      </div>

      {/* 文字區塊 */}
      <div className="p-4 sm:p-6">
        <div className="flex flex-col gap-4">
          {/* Level & Rating */}
          <div className="flex items-center justify-between">
            <Link href={`/trail/1`}>
              <div className="font-bold text-2xl">{title}</div>
            </Link>
            <div className="flex items-center gap-2">
              <div>⭐</div>
              <div>{rating.toFixed(1)}</div>
              <div>({ratingCount})</div>
            </div>
          </div>
          {children}
          {/* Description */}
          <div className="text-sm text-gray-600">{description}</div>
        </div>
      </div>
    </div>
  );
}
