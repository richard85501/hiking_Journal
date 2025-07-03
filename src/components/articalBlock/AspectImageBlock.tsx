import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

interface AspectImageBlockProps {
  src: string;
  alt: string;
  caption: string;
  coordinates: [number, number];
  flyTo: (coords: [number, number]) => void;
}

export default function AspectImageBlock({
  src,
  alt,
  caption,
  coordinates,
  flyTo,
}: AspectImageBlockProps) {
  return (
    <div className="mb-8">
      <div className="relative w-full h-full aspect-[3/2]">
        <Image
          src={src}
          fill
          alt={alt}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <button
          className="absolute bottom-4 right-4 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition"
          onClick={() => flyTo(coordinates)}
        >
          <FaMapMarkerAlt className="w-5 h-5 text-gray-800" />
        </button>
      </div>
      <p className="text-gray-600 text-md mt-2 text-center">{caption}</p>
    </div>
  );
}
