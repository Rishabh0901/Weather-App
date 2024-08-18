import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState} from "react";

function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
            city: "Wonderland",
            feelslike: 24.84,
            temp: 25.05,
            tempMin: 25.05,
            tempMax: 25.05,
            humidity: 47,
            weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h4>Wether App</h4>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}

export default WeatherApp;