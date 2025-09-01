import Image from "next/image";
import FlyToButton from "@/components/FlyToButton";

interface FixedImageBlockProps {
  src: string;
  alt: string;
  caption: string;
  coordinates: [number, number];
}

export default function FixedImageBlock({
  src,
  alt,
  caption,
  coordinates,
}: FixedImageBlockProps) {
  return (
    <div className="mb-8">
      <div className="relative w-full h-full flex justify-center">
        <Image
          src={src}
          width={500}
          height={500}
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
