import { useState } from "react";
import { InfoBox } from "./InfoBox";
import { SearchBox } from "./SearchBox";

export function WheatherApp() {
    const [WeatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        humidity: 19,
        temp: 36.73,
        tempMax: 37.05,
        tempMin: 36.73,
        weather: "haze",
    });

    
    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App By Vansh Kalra - </h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={WeatherInfo} />
        </div>
    );
}