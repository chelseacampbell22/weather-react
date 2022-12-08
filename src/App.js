import "./App.css";

export default function App() {
  let weatherData = {
    city: "Dallas",
    date: "Thursday 3:14PM",
    temperature: 72,
    description: "Overcast",
    imgUrl:
      "https://i2-prod.derbytelegraph.co.uk/incoming/article3542320.ece/ALTERNATES/s810/5_Cloudy-Overcast.jpg",
    precipitation: 20,
    humidity: 30,
    wind: 8,
  };

  return (
    <div className="Weather">
      <div className="container">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Last updated: {weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:{weatherData.precipitation}%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>{" "}
      <footer>
        <a
          href="https://github.com/chelseacampbell22/weather-react"
          target="_blank"
          rel="code"
        >
          Open-source code
        </a>{" "}
        by Chelsea Campbell
      </footer>
    </div>
  );
}
