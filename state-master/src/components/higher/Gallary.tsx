import { Heart, Palette } from "lucide-react";
interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  name: string;
}

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Mountain Lake",
    photographer: "John Doe",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Forest Path",
    photographer: "Jane Smith",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "City Lights",
    photographer: "Mike Johnson",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Desert Sunset",
    photographer: "Sarah Wilson",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Ocean Waves",
    photographer: "David Brown",
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Autumn Colors",
    photographer: "Emma Davis",
  },
];

const themes: Record<string, Theme> = {
  default: {
    primary: "bg-violet-500",
    secondary: "bg-violet-100",
    accent: "bg-violet-600",
    name: "Violet",
  },
  ocean: {
    primary: "bg-blue-500",
    secondary: "bg-blue-100",
    accent: "bg-blue-600",
    name: "Ocean",
  },
  forest: {
    primary: "bg-emerald-500",
    secondary: "bg-emerald-100",
    accent: "bg-emerald-600",
    name: "Forest",
  },
  sunset: {
    primary: "bg-orange-500",
    secondary: "bg-orange-100",
    accent: "bg-orange-600",
    name: "Sunset",
  },
};
const availableThemes = themes;
export default function Gallery() {
  const favorites: unknown[] = [];
  const currentTheme = themes.default;
  const showThemes = false;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1
            className={`text-3xl font-bold ${currentTheme.primary.replace(
              "bg-",
              "text-"
            )}`}
          >
            Beautiful Gallery
          </h1>

          <div className="relative">
            <button
              className={`${currentTheme.primary} text-white p-2 rounded-full hover:${currentTheme.accent} transition-colors`}
            >
              <Palette className="w-6 h-6" />
            </button>

            {showThemes && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-10">
                {Object.entries(availableThemes).map(([key, theme]) => (
                  <button
                    key={key}
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      currentTheme.name === theme.name
                        ? theme.primary + " text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {theme.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={image.url}
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <button
                  className={`absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-whitetransition-colors`}
                >
                  <Heart className={`w-5 h-5 fill-current `} />
                </button>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-500">by {image.photographer}</p>
              </div>
            </div>
          ))}
        </div>

        {favorites.length > 0 && (
          <div className="mt-12">
            <h2
              className={`text-2xl font-bold mb-6 ${currentTheme.primary.replace(
                "bg-",
                "text-"
              )}`}
            >
              Favorites ({favorites.length})
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {images
                .filter((image) => favorites.includes(image.id))
                .map((image) => (
                  <div
                    key={image.id}
                    className="relative aspect-square rounded-lg overflow-hidden"
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <button
                      className={`absolute top-2 right-2 p-1.5 rounded-full ${currentTheme.primary} text-white`}
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
