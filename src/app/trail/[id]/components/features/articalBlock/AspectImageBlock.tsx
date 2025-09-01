import Image from "next/image";
import FlyToButton from "@/components/FlyToButton";

interface AspectImageBlockProps {
  src: string;
  alt: string;
  caption: string;
  coordinates: [number, number];
}

export default function AspectImageBlock({
  src,
  alt,
  caption,
  coordinates,
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
        <FlyToButton coordinates={coordinates} />
      </div>
      <p className="text-gray-600 dark:text-white text-md mt-2 text-center">
        {caption}
      </p>
    </div>
  );
}
