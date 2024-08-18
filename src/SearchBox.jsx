import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from "react";

function SearchBox({ updateInfo }) {
    
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "53a2989b3f6a9aa6db7fe243d3c20d13";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            let jsonResponse = await response.json();
            // console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_temp,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feelsLike,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(err) {
            throw err;
        }
    };


    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }catch (err) {
            setError(true);
        }

    };


    return (
        <div className="SearchBox ">
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required value={city}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">
                    SEARCH
                </Button>
                {error && <p style={{color:"red"}}>No such place Exists!</p>}
            </form>
        </div>
    )
}

export default SearchBox;