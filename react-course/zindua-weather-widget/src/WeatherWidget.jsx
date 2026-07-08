import { useState, useEffect } from 'react';

function WeatherWidget() {

  const [city, setCity] = useState('Nairobi'); 
  const [weather, setWeather] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(''); 

  const API_KEY = 'b97da8a7861f475c296fb8091136bcef';


  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError('');
      setWeather(null);

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error('City not found');
        }

        const data = await response.json();


        const { main, weather: weatherArr, name } = data;
        const { temp, humidity } = main;
        const { description } = weatherArr[0];

        setWeather({ temp, humidity, description, name });
      } catch (err) {

        setError('City not found');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]); 

  const handleSearch = (e) => {
    e.preventDefault();
    const input = e.target.elements.cityInput.value.trim();
    if (input) setCity(input);
  };

  return (
    <div className="max-w-sm mx-auto p-4 border border-gray-200 rounded-lg">
      <h2 className="text-lg font-medium mb-3">Zindua weather widget</h2>

      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          name="cityInput"
          type="text"
          placeholder="Enter city name"
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        <button
          type="submit"
          className="bg-blue-500 text-white text-sm px-3 py-2 rounded-lg hover:bg-blue-600">
          Search
        </button>
      </form>

      {loading && <p className="text-sm text-gray-500">Loading...</p>}

      {error && !loading && <p className="text-sm text-red-500">{error}</p>}

      {weather && !loading && !error && (
        <div>
          <p className="font-medium">{weather.name}</p>
          <p className="text-3xl font-semibold">{Math.round(weather.temp)}°C</p>
          <p className="text-sm text-gray-600 capitalize">{weather.description}</p>
          <p className="text-sm text-gray-500">Humidity: {weather.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default WeatherWidget;