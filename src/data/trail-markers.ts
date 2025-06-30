interface Marker {
  lat: number;
  lng: number;
  coordinates: [number, number];
  title: string;
  description: string;
}

export interface Trail extends Marker {
  imageSrc: string;
  rating: number;
  ratingCount: number;
  duration: string;
  distance: string;
  ascent: string;
  descent: string;
}
const trails: Trail[] = [
  {
    lat: 24.383401,
    lng: 121.231754,
    title: "雪山主峰 - 單攻",
    description: "一路睡上去的單攻zzz",
    coordinates: [24.383401, 121.231754],
    imageSrc: "/2025-07-snow-day-hike/snow-title.jpg",
    rating: 4.8,
    ratingCount: 4,
    duration: "11:00",
    distance: "22 km",
    ascent: "1800 m",
    descent: "1800 m",
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
  },
];

export default trails;
