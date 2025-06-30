// components/DynamicMap.js
import dynamic from "next/dynamic";

// 動態載入 MapComponent，關閉 SSR
const DynamicMap = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
      <div className="text-gray-500">載入地圖中...</div>
    </div>
  ),
});

export default DynamicMap;
