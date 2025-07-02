"use client";

import TrailCardMetadata from "@/components/TrailCardMetadata";
import Image from "next/image";

export default function Artical() {
  // const setFlyTo = useFlyToStore((state) => state.setFlyTo);

  // const flyToHandler = (coordinates: [number, number]) => {
  //   setFlyTo(coordinates);
  // };

  return (
    <div className="w-full shadow-2xl bg-white rounded-none mb-5 gap-2 h-auto">
      <div className="relative w-full h-80 aspect-[3/2]">
        <Image
          src={"/2025-07-snow-day-hike/title.jpg"}
          fill
          alt={"這是一張圖片"}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div className="text-sm font-semibold bg-black text-white px-2 py-1 rounded">
            Intermediate
          </div>

          <div className="flex items-center gap-2 text-yellow-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
            </svg>
            <span className="font-bold">4.7</span>
            <span className="text-gray-500">(16)</span>
            <div className="flex items-center gap-1 ml-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
              <span className="text-gray-700">207</span>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2">
          【雪主東單攻】大地試睡員的會師之旅
        </h1>
        <div className="text-sm text-gray-500 mb-2">June 15 2025</div>
        <TrailCardMetadata
          duration="11:00"
          distance="22 km"
          ascent="1800 m"
          descent="1800 m"
        />
        <p className="text-gray-600 text-md mb-2">
          標題說明這場荒謬的爬山，本來以為是一場可以看到很多老朋友的場合，結果到山腳才發現六路會師已經倒團，就剩下我們了，這時不出發也不太對，結果因為沒睡好覺，四個人在路上睡得東倒西歪，所幸大家實力堅強，天氣也很好。
        </p>
        <div className="relative w-full h-full aspect-[3/2]">
          <Image
            src={"/2025-07-snow-day-hike/1.jpg"}
            fill
            alt={"雪山登山口的合照"}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <p className="text-gray-600 text-md mt-2 text-center">
          三更半夜，大家還想睡覺，一起拍了一張合照出發。
        </p>
        <div className="relative w-full h-full aspect-[3/2]">
          <Image
            src={"/2025-07-snow-day-hike/2.jpg"}
            fill
            alt={"這是一張圖片"}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <p className="text-gray-600 text-md mt-2  text-center">
          我們走太慢了，傅昀覺得很無聊，在七卡坐下來滑個手機。
        </p>
        <div className="relative w-full h-full flex justify-center">
          <Image
            src={"/2025-07-snow-day-hike/3.jpg"}
            width={500}
            height={500}
            alt={"這是一張圖片"}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <p className="text-gray-600 text-md mt-2  text-center">
          東峰前的最後一個小山坡，已經早上5點多了，太陽開始火燒雲了。
        </p>
        <div className="relative w-full h-full aspect-[3/2]">
          <Image
            src={"/2025-07-snow-day-hike/4.jpg"}
            fill
            alt={"這是一張圖片"}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <p className="text-gray-600 text-md mt-2  text-center">
          睡眼惺忪的大家，本來已經想要躺下去睡了，被叫起來拍照。
        </p>
        <div className="relative w-full h-full aspect-[3/2]">
          <Image
            src={"/2025-07-snow-day-hike/5.jpg"}
            fill
            alt={"這是一張圖片"}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <p className="text-gray-600 text-md mt-2  text-center">
          終於快要到369那片大草坡了。
        </p>
        <div className="relative w-full h-full flex justify-center">
          <Image
            src={"/2025-07-snow-day-hike/6.jpg"}
            width={500}
            height={500}
            alt={"這是一張圖片"}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <p className="text-gray-600 text-md mt-2  text-center">
          我努力走，邱敬淳一直追。
        </p>
        <div className="relative w-full h-full flex justify-center">
          <Image
            src={"/2025-07-snow-day-hike/7.jpg"}
            width={500}
            height={500}
            alt={"這是一張圖片"}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <p className="text-gray-600 text-md mt-2  text-center">
          走到黑森林，太困了，坐下來偷偷睡一下。
        </p>
        <div className="relative w-full h-full flex justify-center">
          <Image
            src={"/2025-07-snow-day-hike/8.jpg"}
            width={500}
            height={500}
            alt={"這是一張圖片"}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <p className="text-gray-600 text-md mt-2  text-center">
          我:「 到圈谷了，休息一下嗎 ?」
        </p>
        <div className="relative w-full h-full flex justify-center">
          <Image
            src={"/2025-07-snow-day-hike/9.jpg"}
            width={500}
            height={500}
            alt={"這是一張圖片"}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <p className="text-gray-600 text-md mt-2  text-center">
          傅昀:「 好阿。 」
        </p>
        <div className="relative w-full h-full flex justify-center">
          <Image
            src={"/2025-07-snow-day-hike/10.jpg"}
            width={500}
            height={500}
            alt={"這是一張圖片"}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <p className="text-gray-600 text-md mt-2  text-center">
          三十秒後後全部睡死。
        </p>
        <div className="relative w-full h-full flex justify-center">
          <Image
            src={"/2025-07-snow-day-hike/12.jpg"}
            width={500}
            height={500}
            alt={"這是一張圖片"}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <p className="text-gray-600 text-md mt-2  text-center">
          暖身都需要10公里的淳，終於暖身完了，開始跑了起來。
        </p>
        <div className="relative w-full h-full flex justify-center">
          <Image
            src={"/2025-07-snow-day-hike/13.jpg"}
            width={500}
            height={500}
            alt={"這是一張圖片"}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <p className="text-gray-600 text-md mt-2  text-center">
          一下都屌虐我1個小時的柏廷這次有點走不動，可能是因為早上兩個饅頭有點太少了，提供不了他需要的養分。
        </p>
        <div className="relative w-full h-full flex justify-center">
          <Image
            src={"/2025-07-snow-day-hike/14.jpg"}
            width={500}
            height={500}
            alt={"這是一張圖片"}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <p className="text-gray-600 text-md mt-2  text-center">
          我不想演了，真的太困了，找了一個沒有風又陽光明媚的好地方躺下來直接睡覺。
        </p>
        <div className="relative w-full h-full flex justify-center">
          <Image
            src={"/2025-07-snow-day-hike/15.jpg"}
            width={500}
            height={500}
            alt={"這是一張圖片"}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <p className="text-gray-600 text-md mt-2  text-center">
          一路睡覺抵達主峰了，比預計晚了2個小時登頂，如果是真的會師可能會在黑森林碰到會師的大隊人馬。
        </p>
        <div className="relative w-full h-full aspect-[3/2]">
          <Image
            src={"/2025-07-snow-day-hike/16.jpg"}
            fill
            alt={"這是一張圖片"}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <p className="text-gray-600 text-md mt-2  text-center">
          主峰風超大超冷，站都站不太穩，所幸躲在沒有風的小小灌木叢後面，陽光還是蠻溫暖的。
        </p>
      </div>
    </div>
  );
}
