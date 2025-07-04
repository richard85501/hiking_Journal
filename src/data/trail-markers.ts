interface Trail {
  coordinates: [number, number];
  title: string;
  description: string;
  imageSrc: string;
  rating: number;
  ratingCount: number;
  duration: string;
  distance: string;
  ascent: string;
  descent: string;
  gpxFile: string;
  gpxColor: string;
}
const trails: Trail[] = [
  {
    coordinates: [24.383401, 121.231754],
    title: "【雪主東單攻】大地試睡員的偽會師之旅",
    description: "一路睡上去的單攻zzz",
    imageSrc: "/2025-07-snow-day-hike/title.jpg",
    rating: 4.8,
    ratingCount: 4,
    duration: "11:00",
    distance: "22 km",
    ascent: "1800 m",
    descent: "1800 m",
    gpxFile: "snow-day-hike.gpx",
    gpxColor: "green",
  },
  {
    title: "雪山西稜",
    description: "被箭竹林刷到哭出來",
    coordinates: [24.330751, 121.121182],
    imageSrc: "/2025-07-snow-west-ridge/title.jpg",
    rating: 4.8,
    ratingCount: 4,
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
