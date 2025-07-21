import "./globals.css";
import DynamicMap from "@/components/DynamicMap";
import { trails } from "@/data/trail-markers";
import { Itinerary } from "@/components/Itinerary";
import Navbar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <meta name="description" content="我的一些小小記錄。" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Chang's hiking journal" />
        <meta property="og:description" content="hiking website。" />
        <meta
          property="og:image"
          content="hiking-journal.vercel.app/meta_image.jpg"
        />
        <meta
          property="og:url"
          content="https://hiking-journal.vercel.app
"
        />
        <meta property="og:type" content="website" />
        <title>CHANG CHANG Hiking Journal</title>
      </head>
      <body className="antialiased">
        <div className="flex flex-col h-screen overflow-hidden bg-white dark:bg-black">
          <Navbar />
          <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
            {/* 左邊：會換的內容 */}
            <div className="w-full md:basis-[60%] max-w-3xl overflow-y-auto p-6 pt-0 mx-auto">
              {children}
            </div>

            {/* 右邊：永遠存在，不會重刷 */}
            <div className="hidden md:block basis-[40%] sticky top-0 h-screen">
              <DynamicMap
                center={[24.383401, 121.231754]}
                zoom={15}
                markers={trails}
              />
              <Itinerary />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
