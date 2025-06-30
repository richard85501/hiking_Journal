import BackButton from "@/components/BackButton";
import DynamicMap from "@/components/DynamicMap";
import { trails } from "@/data/trail-markers";

export default function TrailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-chang">
      <nav className="w-full p-4 flex items-center justify-center sticky top-0 z-10">
        <BackButton />
        <h1 className="text-xl font-bold">Hiking Journal</h1>
      </nav>

      <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
        {/* 左邊：會換的內容 */}
        <div className="w-full md:basis-[60%] max-w-3xl overflow-y-auto p-6 mx-auto">
          {children}
        </div>

        {/* 右邊：永遠存在，不會重刷 */}
        <div className="hidden md:block basis-[40%] p-6 sticky top-0 h-screen">
          <DynamicMap
            center={[24.383401, 121.231754]}
            zoom={15}
            markers={trails}
          />
        </div>
      </div>
    </div>
  );
}
