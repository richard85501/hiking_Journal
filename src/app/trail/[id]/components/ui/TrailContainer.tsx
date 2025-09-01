import React, { ReactNode } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { articalMetadataEvent } from "@/data/artical-content";

interface children {
  children: ReactNode;
}

const TrailContainer = ({ children }: children) => {
  return (
    <div className="w-full bg-white shadow-xl dark:bg-gray-800 rounded-none mb-5 gap-2 h-auto">
      {children}
    </div>
  );
};

const BannerContainer = ({ children }: children) => {
  return <div className="relative w-full h-80 aspect-[3/2]">{children}</div>;
};

const ContentWrapper = ({ children }: children) => {
  return <div className="p-4 sm:p-6">{children}</div>;
};

const MainMeta = ({ meta }: { meta: articalMetadataEvent }) => {
  return (
    <>
      <div className="flex flex-row justify-between gap-2 mb-4">
        <div className="text-sm font-semibold bg-black text-white px-2 py-1 rounded w-fit">
          {meta.level}
        </div>

        <div className="flex items-center gap-2 text-yellow-500 flex-wrap sm:flex-nowrap">
          <FaStar />
          <span className="font-bold">{meta.rating}</span>
          <div className="flex items-center gap-1 ml-4">
            <BsFillPeopleFill />
            <span className="text-yellow-500">{meta.participants}</span>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-2">{meta.title}</h1>
      <div className="text-sm text-gray-500 mb-2">{meta.date}</div>
    </>
  );
};

const ExcerptWrapper = ({ children }: children) => {
  return (
    <p className="text-gray-600 text-md mb-2 dark:text-white">{children}</p>
  );
};

TrailContainer.BannerContainer = BannerContainer;
TrailContainer.ContentWrapper = ContentWrapper;
TrailContainer.MainMeta = MainMeta;
TrailContainer.ExcerptWrapper = ExcerptWrapper;

export default TrailContainer;
