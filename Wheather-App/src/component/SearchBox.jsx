import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"

export function SearchBox({ updateInfo }) {
    const [city, setCity] = useState([]);

    const ApiUrl = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "c8e6c18f5cc36f5bafbd642a4123728b";

    const getWheatherInfo = async () => {
        const res = await fetch(`${ApiUrl}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await res.json();
        console.log(jsonResponse);

        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            weather: jsonResponse.weather[0].description,
        };

        console.log(result);
        return result;
    }


    function CityName(evt) {
        setCity(evt.target.value);
    };

    async function onSubmit(evt) {
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWheatherInfo();
        updateInfo(newInfo);
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={onSubmit}>
                <TextField id="city" color='success' sx={{
                    input: { color: 'white' },
                    label: { color: 'white' },
                    '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                    '& .MuiInput-underline:after': { borderBottomColor: 'white' },
                }} label="City Name" variant="standard" required value={city} onChange={CityName} />
                <Button variant="contained" type='submit' endIcon={<SendIcon />} >
                    Search
                </Button>
            </form>
        </div>
    );
}