import { Sun, Cloud, CloudRain, Wind } from "lucide-react";

export default function WeatherCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Weather Dashboard
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Current Weather
              </h2>
              <p className="text-sm text-gray-500">
                Last updated: 2 minutes ago
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-600">Auto-refresh</label>
              <input
                type="checkbox"
                checked
                readOnly
                className="form-checkbox h-4 w-4 text-blue-500"
              />
            </div>
          </div>

          {/* loading 상태 */}
          {/* <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div> */}

          {/* 실제 날씨 정보 */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* 날씨 아이콘 */}
                <Sun className="w-12 h-12 text-yellow-500" />
                <div>
                  <div className="text-4xl font-bold text-gray-800">28°C</div>
                  <div className="text-gray-500 capitalize">Sunny</div>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Refresh
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500">Humidity</div>
                <div className="text-xl font-semibold">60%</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500">Wind Speed</div>
                <div className="text-xl font-semibold">12 km/h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
