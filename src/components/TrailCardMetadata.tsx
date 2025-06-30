import { FiClock, FiMap, FiArrowUp, FiArrowDown } from "react-icons/fi";

export default function TrailCardMetadata({
  duration,
  distance,
  ascent,
  descent,
}: {
  duration: string;
  distance: string;
  ascent: string;
  descent: string;
}) {
  return (
    <div className="border-y border-dashed border-gray-300 py-4 flex flex-wrap gap-4">
      <div className="flex items-center gap-2">
        <FiClock className="text-gray-500" />
        <span className="font-bold">{duration}</span>
      </div>
      <div className="flex items-center gap-2">
        <FiMap className="text-gray-500" />
        <span className="font-bold">{distance}</span>
      </div>
      <div className="flex items-center gap-2">
        <FiArrowUp className="text-gray-500" />
        <span className="font-bold">{ascent}</span>
      </div>
      <div className="flex items-center gap-2">
        <FiArrowDown className="text-gray-500" />
        <span className="font-bold">{descent}</span>
      </div>
    </div>
  );
}
