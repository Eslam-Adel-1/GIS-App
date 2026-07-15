import { Link } from "react-router";
import Map from "../features/maps/components/Map";

export const HomePage = () => {
  return (
    <div className="p-8 text-center h-full w-full">
      <h1 className="text-4xl font-bold mb-4">Welcome to the GIS App</h1>
      <p className="text-lg text-gray-600 mb-6">
        A powerful mapping application built with React.
      </p>

      <div className="w-full h-[600px] my-4 mx-auto border">
        <Map />
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Link
          to="/dashboard"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
        >
          Go to Dashboard
        </Link>
        <Link
          to="/non-existent-page"
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
        >
          Test 404 Page
        </Link>
      </div>
    </div>
  );
};
