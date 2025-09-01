import React, { ReactNode } from "react";

interface children {
  children: ReactNode;
}

const ItineraryContainer = ({ children }: children) => {
  return <div className="relative w-full aspect-[3/2]">{children}</div>;
};

const MainContainer = ({ children }: children) => {
  return (
    <div className="overflow-scroll">
      <div className="mt-5 overflow-y-auto h-96">{children}</div>
    </div>
  );
};

const LogContainer = ({ children }: children) => {
  return (
    <div className="p-2 m-1 font-medium bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md text-sm w-fit">
      {children}
    </div>
  );
};

ItineraryContainer.MainContainer = MainContainer;
ItineraryContainer.LogContainer = LogContainer;

export default ItineraryContainer;
