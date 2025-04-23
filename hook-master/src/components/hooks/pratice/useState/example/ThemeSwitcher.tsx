import { useState } from "react";

const themes = [
  { name: "Light", bg: "bg-gray-100", text: "text-gray-800" },
  { name: "Dark", bg: "bg-gray-800", text: "text-white" },
  { name: "Blue", bg: "bg-blue-500", text: "text-white" },
  { name: "Green", bg: "bg-green-500", text: "text-white" },
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [message, setMessage] = useState("Hello, World!");
  //const [theme, setTheme] = useState(themes[currentTheme]);
  const nextTheme = () => {
    setCurrentTheme((currentTheme) => (currentTheme + 1) % themes.length);
  };

  const theme = themes[currentTheme];
  // 불필요하게 훅을 사용하는 경우
  // useEffect(() => {
  //   setTheme(themes[currentTheme]);
  // }, [currentTheme]);

  return (
    <div
      className={`${theme.bg} ${theme.text} p-4 rounded-lg transition-colors duration-200`}
    >
      <div className="space-y-4">
        <input
          type="text"
          className="w-full px-3 py-2 rounded border text-gray-800 bg-white"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="text-center text-xl font-semibold">{message}</div>

        <button
          onClick={nextTheme}
          className="w-full px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-100 transition-colors"
        >
          Switch Theme
        </button>
      </div>
    </div>
  );
}
