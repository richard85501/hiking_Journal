interface Marker {
  coordinates: [number, number];
  description: string;
}

interface Trail {
  coordinates: [number, number];
  lat: number;
  lng: number;
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
  markers: Marker[];
}
const trails: Trail[] = [
  {
    lat: 24.383401,
    lng: 121.231754,
    coordinates: [24.383401, 121.231754],
    title: "雪山主峰 - 單攻",
    description: "一路睡上去的單攻zzz",
    imageSrc: "/2025-07-snow-day-hike/title.jpg",
    rating: 4.8,
    ratingCount: 4,
    duration: "11:00",
    distance: "22 km",
    ascent: "1800 m",
    descent: "1800 m",
    gpxFile: "./na-huh.gpx",
    gpxColor: "green",
    markers: [
      {
        coordinates: [24.383401, 121.231754],
        description: "一路睡上去的單攻zzz",
      },
    ],
  },
  {
    lat: 24.330751,
    lng: 121.121182,
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
    gpxFile: "./snow-west-ridge.gpx",
    gpxColor: "red",
    markers: [
      {
        coordinates: [24.330751, 121.121182],
        description: "被箭竹林刷到哭出來",
      },
    ],
  },
];

export type { Trail };
export { trails };
