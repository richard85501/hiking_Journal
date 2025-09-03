import TrailCardMetadata from "@/app/trail/components/ui/TrailCardMetadata";
import { artical_metadata } from "@/data/artical-content";
import StoreInitializer from "./trail/components/features/StoreInitializer";
import TrailCardContainer from "./trail/components/ui/TrailCard";
import Image from "next/image";
import Link from "next/link";
import { BsFillPeopleFill } from "react-icons/bs";
import FlyToButton from "@/components/FlyToButton";

export default function Home() {
  return (
    <TrailCardContainer.MainLayout>
      <StoreInitializer artical_metadata={artical_metadata} />
      {artical_metadata.map((trail, index) => (
        <TrailCardContainer.MainContainer key={index}>
          <TrailCardContainer.PictureContainer>
            <Image
              src={trail.imageSrc}
              fill
              alt={trail.title}
              style={{ objectFit: "cover" }}
            />
            <FlyToButton coordinates={trail.coordinates} />
          </TrailCardContainer.PictureContainer>

          <TrailCardContainer.WordContainer>
            <TrailCardContainer.TitleContainer>
              <Link href={`/trail/${trail.id}`}>
                <TrailCardContainer.TitleStyle>
                  {trail.title}
                </TrailCardContainer.TitleStyle>
              </Link>
              <TrailCardContainer.RightTitleContainer>
                <BsFillPeopleFill />
                <span>{trail.participants}</span>
              </TrailCardContainer.RightTitleContainer>
            </TrailCardContainer.TitleContainer>
            <TrailCardMetadata
              duration={trail.duration}
              distance={trail.distance}
              ascent={trail.ascent}
              descent={trail.descent}
            />
            <TrailCardContainer.DescriptionContainer>
              {trail.description}
            </TrailCardContainer.DescriptionContainer>
          </TrailCardContainer.WordContainer>
        </TrailCardContainer.MainContainer>
      ))}
    </TrailCardContainer.MainLayout>
  );
}
