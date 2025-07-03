type content = {
  src: string;
  alt: string;
  caption: string;
  layout: "aspect" | "fixed";
  coordinates: [number, number];
  location: string;
};

export const snow_day_hike_metadata = {
  title: "【雪主東單攻】大地試睡員的會師之旅",
  date: "June 15 2025",
  level: "Intermediate",
  rating: 4.7,
  reviews: 16,
  participants: 207,
  banner: "/2025-07-snow-day-hike/title.jpg",
  trail: {
    duration: "11:00",
    distance: "22 km",
    ascent: "1800 m",
    descent: "1800 m",
  },
  excerpt:
    "小小荒謬的爬山，本來以為是一場可以看到很多老朋友的場合，結果到山腳才發現山社六路會師已經倒團，就剩下我們了，不過都在山腳下了，那就出發嚕！不出發也不對，所幸大家實力堅強，天氣也很好，快快樂樂的爬完了。（不過就從頭睡到尾就是了）",
  gpxFile: "snow-day-hike.gpx",
  gpxColor: "green",
};

export const snow_day_hike_content: content[] = [
  {
    src: "/2025-07-snow-day-hike/1.jpg",
    alt: "雪山登山口的合照",
    caption: "三更半夜，大家還想睡覺，一起拍了一張合照出發。",
    layout: "aspect",
    coordinates: [24.3854313, 121.2990604],
    location: "雪山登山口",
  },
  {
    src: "/2025-07-snow-day-hike/2.jpg",
    alt: "這是一張圖片",
    caption: "我們走太慢了，傅昀覺得很無聊，在七卡坐下來滑個手機。",
    layout: "aspect",
    coordinates: [24.3834818, 121.2862724],
    location: "七卡山莊",
  },
  {
    src: "/2025-07-snow-day-hike/3.jpg",
    alt: "這是一張圖片",
    caption: "東峰前的最後一個小山坡，已經早上5點多了，太陽開始火燒雲了。",
    layout: "fixed",
    coordinates: [24.3894529371572, 121.27580165863039],
    location: "東峰前的小坡",
  },
  {
    src: "/2025-07-snow-day-hike/4.jpg",
    alt: "這是一張圖片",
    caption: "睡眼惺忪的大家，本來已經想要躺下去睡了，被叫起來拍照。",
    layout: "aspect",
    coordinates: [24.388794, 121.271999],
    location: "雪山東峰",
  },
  {
    src: "/2025-07-snow-day-hike/5.jpg",
    alt: "這是一張圖片",
    caption: "終於快要到369那片大草坡了。",
    layout: "aspect",
    coordinates: [24.390498471712167, 121.25571727752687],
    location: "369大草原",
  },
  {
    src: "/2025-07-snow-day-hike/6.jpg",
    alt: "這是一張圖片",
    caption: "我努力走，邱敬淳一直追。",
    layout: "fixed",
    coordinates: [24.393068300256616, 121.25284779056423],
    location: "z字型陡上",
  },
  {
    src: "/2025-07-snow-day-hike/7.jpg",
    alt: "這是一張圖片",
    caption: "走到黑森林，太困了，坐下來偷偷睡一下。",
    layout: "fixed",
    coordinates: [24.393742505174114, 121.24356150627138],
    location: "黑森林",
  },
  {
    src: "/2025-07-snow-day-hike/8.jpg",
    alt: "這是一張圖片",
    caption: "我:「 到圈谷了，休息一下嗎 ?」",
    layout: "fixed",
    coordinates: [24.388003, 121.236312],
    location: "圈谷底部",
  },
  {
    src: "/2025-07-snow-day-hike/9.jpg",
    alt: "這是一張圖片",
    caption: "傅:「 好阿。 」",
    layout: "fixed",
    coordinates: [24.388003, 121.236312],
    location: "圈谷底部",
  },
  {
    src: "/2025-07-snow-day-hike/10.jpg",
    alt: "這是一張圖片",
    caption: "三十秒後後全部睡死。",
    layout: "fixed",
    coordinates: [24.388003, 121.236312],
    location: "圈谷底部",
  },
  {
    src: "/2025-07-snow-day-hike/12.jpg",
    alt: "這是一張圖片",
    caption: "暖身都需要10公里的淳，終於暖身完了，開始跑了起來。",
    layout: "fixed",
    coordinates: [24.38406878580517, 121.23428574751074],
    location: "圈谷中間",
  },
  {
    src: "/2025-07-snow-day-hike/13.jpg",
    alt: "這是一張圖片",
    caption:
      "一下都屌虐我1個小時的柏廷這次有點走不動，可能是因為早上兩個饅頭有點太少了，提供不了他需要的養分。",
    layout: "fixed",
    coordinates: [24.38406878580517, 121.23428574751074],
    location: "圈谷中間",
  },
  {
    src: "/2025-07-snow-day-hike/14.jpg",
    alt: "這是一張圖片",
    caption: "真的太困了，找了一個沒有風又溫暖的好位置躺下來睡覺。",
    layout: "fixed",
    coordinates: [24.385857013961758, 121.23599029003107],
    location: "圈谷中間",
  },
  {
    src: "/2025-07-snow-day-hike/15.jpg",
    alt: "這是一張圖片",
    caption:
      "一路睡覺抵達主峰了，比預計晚了2個小時登頂，如果是真的會師可能會在黑森林碰到會師的大隊人馬。",
    layout: "fixed",
    coordinates: [24.383405, 121.231766],
    location: "雪山主峰",
  },
  {
    src: "/2025-07-snow-day-hike/16.jpg",
    alt: "這是一張圖片",
    caption:
      "主峰風超大超冷，站都站不太穩，所幸躲在沒有風的小小灌木叢後面，陽光還是蠻溫暖的。",
    layout: "aspect",
    coordinates: [24.383405, 121.231766],
    location: "雪山主峰",
  },
  {
    src: "/2025-07-snow-day-hike/17.jpg",
    alt: "這是一張圖片",
    caption:
      "吸了兩果膠的柏廷下山跑得飛快，讓我們免費上了一堂越野間歇課，沒想到下山比上山還喘。",
    layout: "fixed",
    coordinates: [24.384420570392287, 121.23498380184175],
    location: "圈谷中間",
  },
  {
    src: "/2025-07-snow-day-hike/18.jpg",
    alt: "這是一張圖片",
    caption:
      "下山的途中，淳可能是在問:「 我們後天真的還要來爬雪西嗎 ?」我的腦袋一時之間轉不過來，不過這又是另一個故事了。",
    layout: "aspect",
    coordinates: [24.38520719627385, 121.28538787364961],
    location: "七卡山莊",
  },
  {
    src: "/2025-07-snow-day-hike/19.jpg",
    alt: "這是一張圖片",
    caption: "單攻後，把鞋子脫下來休息真的是很舒服的一件事情",
    layout: "aspect",
    coordinates: [24.385500347524125, 121.29884183406831],
    location: "雪山登山口",
  },
];
