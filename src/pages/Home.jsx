import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY;
const CITIES = ["London", "New York", "Tokyo", "Sydney", "Paris"];

function Home() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const promises = CITIES.map((city) =>
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
          ).then((response) => response.json())
        );
        const results = await Promise.all(promises);
        setWeatherData(results);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch weather data");
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to Weather Explorer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {weatherData.map((cityData) => (
          <div
            key={cityData.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{cityData.name}</h2>
            <p className="text-3xl font-bold mb-2">
              {Math.round(cityData.main.temp)}°C
            </p>
            <p className="capitalize">{cityData.weather[0].description}</p>
            <p>Humidity: {cityData.main.humidity}%</p>
            <p>Wind: {cityData.wind.speed} m/s</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
