import { FaHourglassHalf } from "react-icons/fa";

export default function ComingSoonBlock() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <FaHourglassHalf className="w-12 h-12 text-gray-500 mb-4" />
      <p className="text-2xl md:text-3xl font-semibold text-gray-700">
        未完待續...
      </p>
    </div>
  );
}
