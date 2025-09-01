import AspectImageBlock from "./articalBlock/AspectImageBlock";
import FixedImageBlock from "./articalBlock/FixedImageBlock";
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
