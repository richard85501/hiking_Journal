import React, { ReactNode } from "react";

interface children {
  children: ReactNode;
}

interface FlyToButtonProps extends children {
  flyTo: () => void;
}

const TrailCardContainer = ({ children }: children) => {
  return <div className="relative w-full aspect-[3/2]">{children}</div>;
};

const MainLayout = ({ children }: children) => {
  return (
    <div className="w-full shadow-lg rounded-none mb-5 gap-2 h-auto">
      {children}
    </div>
  );
};

const MainContainer = ({ children }: children) => {
  return (
    <div className="w-full shadow-xl bg-white dark:bg-gray-800 rounded-none mb-5 gap-2">
      {children}
    </div>
  );
};

const PictureContainer = ({ children }: children) => {
  return <div className="relative w-full aspect-[3/2]">{children}</div>;
};

const FlyToButton = ({ children, flyTo }: FlyToButtonProps) => {
  return (
    <button
      className="absolute bottom-4 right-4 p-2 bg-white/80 dark:bg-gray-700/80 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition"
      onClick={flyTo}
    >
      {children}
    </button>
  );
};

const WordContainer = ({ children }: children) => {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
};

const TitleContainer = ({ children }: children) => {
  return <div className="flex items-center justify-between">{children}</div>;
};

const TitleStyle = ({ children }: children) => {
  return (
    <div className="font-bold text-2xl cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-200 ease-in-out">
      {children}
    </div>
  );
};

const RightTitleContainer = ({ children }: children) => {
  return (
    <div className="flex items-center gap-2 text-yellow-500">
      <div className="flex items-center gap-1 ml-4">{children}</div>
    </div>
  );
};

const DescriptionContainer = ({ children }: children) => {
  return (
    <div className="text-sm text-gray-600 dark:text-gray-400 ">{children}</div>
  );
};

// Attach compound components to main component
TrailCardContainer.MainLayout = MainLayout;
TrailCardContainer.MainContainer = MainContainer;
TrailCardContainer.PictureContainer = PictureContainer;
TrailCardContainer.FlyToButton = FlyToButton;
TrailCardContainer.WordContainer = WordContainer;
TrailCardContainer.TitleContainer = TitleContainer;
TrailCardContainer.TitleStyle = TitleStyle;
TrailCardContainer.RightTitleContainer = RightTitleContainer;
TrailCardContainer.DescriptionContainer = DescriptionContainer;

export default TrailCardContainer;
