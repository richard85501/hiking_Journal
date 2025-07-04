interface Trail {
  id: number;
  coordinates: [number, number];
  title: string;
  description: string;
  imageSrc: string;
  participants: number;
  duration: string;
  distance: string;
  ascent: string;
  descent: string;
  gpxFile: string;
  gpxColor: string;
}
const trails: Trail[] = [
  {
    id: 1,
    coordinates: [24.383401, 121.231754],
    title: "【雪主東單攻】大地試睡員的偽會師之旅",
    description: "一路睡上去的單攻zzz",
    imageSrc: "/2025-07-snow-day-hike/title.jpg",
    participants: 4,
    duration: "11:00",
    distance: "22 km",
    ascent: "1800 m",
    descent: "1800 m",
    gpxFile: "snow-day-hike.gpx",
    gpxColor: "green",
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
    gpxFile: "snow-west-ridge.gpx",
    gpxColor: "red",
  },
];

export type { Trail };
export { trails };
