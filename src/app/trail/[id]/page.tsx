import TrailCardMetadata from "@/app/trail/components/ui/TrailCardMetadata";
import Image from "next/image";
import Gallery from "./components/features/Gallery";
import { artical_metadata, artical_content } from "@/data/artical-content";
import type {
  articalMetadataEvent,
  articalContentEvent,
} from "@/data/artical-content";
import React from "react";
import { redirect } from "next/navigation";
import TrailContainer from "./components/ui/TrailContainer";
import ClientWrapper from "./components/features/ClientWrapperProps";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Artical({ params }: PageProps) {
  const { id } = params;

  if (!id) {
    redirect("/");
  }

  const meta = artical_metadata.find(
    (item) => item.id === +id
  ) as articalMetadataEvent;

  const content = artical_content.find(
    (item) => item.id === +id
  ) as articalContentEvent;

  if (!meta?.title) {
    redirect("/");
  }

  return (
    <ClientWrapper meta={meta} content={content}>
      <TrailContainer>
        <TrailContainer.BannerContainer>
          <Image
            src={meta.banner}
            fill
            alt={"banner"}
            style={{ objectFit: "cover" }}
            priority
          />
        </TrailContainer.BannerContainer>
        <TrailContainer.ContentWrapper>
          <TrailContainer.MainMeta meta={meta} />
          <TrailCardMetadata
            duration={meta?.duration || "N/A"}
            distance={meta?.distance || "N/A"}
            ascent={meta?.ascent || "N/A"}
            descent={meta?.descent || "N/A"}
          />
          <TrailContainer.ExcerptWrapper>
            {meta.excerpt}
          </TrailContainer.ExcerptWrapper>
          <Gallery items={content.content} />
        </TrailContainer.ContentWrapper>
      </TrailContainer>
    </ClientWrapper>
  );
}
