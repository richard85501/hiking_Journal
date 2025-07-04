"use Client";

import AspectImageBlock from "@/components/articalBlock/AspectImageBlock";
import FixedImageBlock from "@/components/articalBlock/FixedImageBlock";
import { useFlyToStore } from "@/lib/useFlyToStore";
import ComingSoonBlock from "./articalBlock/ComingSoonBlock";

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  layout: string;
  coordinates: [number, number];
}

interface GalleryProps {
  items: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
  const setFlyTo = useFlyToStore((state) => state.setFlyTo);

  const flyToHandler: (coordinates: [number, number]) => void = (
    coordinates
  ) => {
    setFlyTo(coordinates);
  };

  return (
    <div>
      {items.map((item, index) => {
        if (item.layout === "aspect") {
          return (
            <AspectImageBlock
              key={index}
              src={item.src}
              alt={item.alt}
              coordinates={item.coordinates}
              caption={item.caption}
              flyTo={flyToHandler}
            />
          );
        } else if (item.layout === "fixed") {
          return (
            <FixedImageBlock
              key={index}
              src={item.src}
              alt={item.alt}
              coordinates={item.coordinates}
              caption={item.caption}
              flyTo={flyToHandler}
            />
          );
        } else {
          // 如果未指定或未知，就顯示 ComingSoonBlock
          return <ComingSoonBlock key={index} />;
        }
      })}
    </div>
  );
}
