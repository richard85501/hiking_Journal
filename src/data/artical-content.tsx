type content = {
  src: string;
  alt: string;
  caption: string;
  layout: "aspect" | "fixed" | "coming soon";
  coordinates: [number, number];
  location: string;
};

export type articalMetadataEvent = {
  id: number;
  title: string;
  coordinates: [number, number];
  description: string;
  imageSrc: string;
  date: string;
  level: string;
  rating: number;
  participants: number;
  banner: string;
  duration: string;
  distance: string;
  ascent: string;
  descent: string;
  excerpt: string;
  gpxFile: string;
  gpxColor: string;
  record: string[];
};

export type articalContentEvent = {
  id: number;
  content: content[];
};

export const artical_metadata: articalMetadataEvent[] = [
  {
    id: 1,
    coordinates: [24.383401, 121.231754],
    description: "一路睡上去的單攻zzz",
    imageSrc: "/2025-07-snow-day-hike/title.jpg",
    duration: "11:00",
    distance: "22 km",
    ascent: "1800 m",
    descent: "1800 m",
    title: "【雪主東單攻】多年前的組合再次出發",
    date: "June 15 2025",
    level: "Intermediate",
    rating: 3,
    participants: 4,
    banner: "/2025-07-snow-day-hike/title.jpg",
    excerpt:
      "小小荒謬的爬山，本來以為是一場可以看到很多老朋友的場合，結果到山腳才發現山社六路會師已經倒團，就剩下我們了，不過都在山腳下了，那就出發嚕！不出發也不對，所幸大家實力堅強，天氣也很好，快快樂樂的爬完了。（不過就從頭睡到尾就是了）",
    gpxFile: "snow-day-hike.gpx",
    gpxColor: "green",
    record: [
      "2:30 登山口",
      "3:13 七卡",
      "05:02 雪東",
      "05:55 三六九營地",
      "09:30 雪山主峰",
      "10:30 三六九營地",
      "11:37 雪山東峰",
      "13:05 登山口",
    ],
  },
  {
    id: 2,
    title: "【雪主西稜】先苦後甘再苦的游泳之旅",
    description: "你喜歡濕淋淋的箭竹林嗎? 如果喜歡就出發吧!",
    coordinates: [24.330751, 121.121182],
    imageSrc: "/2025-07-snow-west-ridge/title.jpg",
    participants: 2,
    duration: "40:00",
    distance: "62 km",
    ascent: "5069 m",
    descent: "4735 m",
    date: "June 17 2025",
    level: "Intermediate",
    rating: 4.5,
    banner: "/2025-07-snow-west-ridge/title.jpg",
    excerpt:
      "過了翠池之後，無窮無盡濕淋淋的箭竹外加無數跟橫跨在路中央的倒木，最終在給一個大雪山的大景當作安慰，最後再給你24公里的林道壓壓驚，這就是雪山西稜。",
    gpxFile: "snow-west-ridge.gpx",
    gpxColor: "green",
    record: [
      "03:20 七卡出發",
      "09:20 雪主",
      "10:40 翠池山屋",
      "04:22 翠池出發",
      "05:06 下翠池",
      "06:05 柏可爾草原",
      "07:42 火石山營地",
      "08:10 續行",
      "08:52 登頂火石山",
      "09:17 離開火石山",
      "09:54 火石山營地",
      "10:10 出發",
      "12:24 大南山取水處",
      "12:40 續行",
      "12:58 抵達大南山西鞍營地",
      "02:43 出發",
      "03:26 弓水營地",
      "05:44 頭鷹山",
      "06:00 續行",
      "06:28 齊郡山",
      "06:37 續行",
      "06:54 齊郡山營地",
      "07:01 取水",
      "07:15 續行",
      "08:25 大雪山北峰",
      "08:40 續行",
      "09:24 大雪山登山口叉路口",
      "09:30 大雪山",
      "09:46 離開大雪山",
      "09:49 大雪山登山口叉路口",
      "09:56 續行",
      "10:15 匹匹達山",
      "11:27 三叉營地（淳膝蓋不舒服，開始慢慢走）",
      "11:42 大雪山之門",
      "11:48 續行",
      "13:43 28k",
      "14:30 26k",
      "04:44 中雪山登山口",
      "06:38 登頂中雪山",
      "06:55 續行",
      "08:11 回到中雪山登山口",
      "09:25 續行",
      "13:10 抵達11k營地",
      "05:50 出發",
      "06:40 9k高饒開始",
      "07:11 9k高饒結束",
      "09:00 結束遊戲",
    ],
  },
  {
    id: 3,
    coordinates: [24.30983013461455, 121.41643132659931],
    description: "從天黑到天黑",
    imageSrc: "/2022-09-central-sharp/title.jpg",
    duration: "60:00",
    distance: "38 km",
    ascent: "4272 m",
    descent: "4258 m",
    title: "【中央尖山】遙不可及的夢想",
    date: "Nov 08 2022",
    level: "Intermediate",
    rating: 3,
    participants: 4,
    banner: "/2022-09-central-sharp/title.jpg",
    excerpt: "早黑摸到晚黑 , 台灣的峽谷地形讓人崩潰",
    gpxFile: "central-sharp.gpx",
    gpxColor: "yellow",
    record: [
      "2:30 登山口",
      "3:13 七卡",
      "05:02 雪東",
      "05:55 三六九營地",
      "09:30 雪山主峰",
      "10:30 三六九營地",
      "11:37 雪山東峰",
      "13:05 登山口",
    ],
  },
];

export const artical_content: articalContentEvent[] = [
  {
    id: 1,
    content: [
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
          "一下都可以虐我1小時的柏廷這次有點走不動，可能是因為早上兩個饅頭有點太少了，養分不夠。",
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
          "吸了兩果膠的柏廷下山跑得飛快，幫我們免費上了一堂越野間歇課，沒想到下山比上山還喘。",
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
    ],
  },
  {
    id: 2,
    content: [
      {
        src: "/2025-07-snow-west-ridge/1.jpg",
        alt: "這是一張圖片",
        caption:
          "前情提要:兩天前才剛單攻完雪山，腿還再酸，但是天氣預測實在不錯，所以最終還是出現在這裡，我笑得很無奈，淳笑得很開心。",
        layout: "aspect",
        coordinates: [24.385500347524125, 121.29884183406831],
        location: "雪山登山口",
      },
      {
        src: "/2025-07-snow-west-ridge/1.jpg",
        alt: "這是一張圖片",
        caption: "來了",
        layout: "coming soon",
        coordinates: [24.38550034752412, 121.2988418340681],
        location: "雪山登山口",
      },
    ],
  },
  {
    id: 3,
    content: [],
  },
];
