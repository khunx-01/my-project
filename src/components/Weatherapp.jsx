import React, { useEffect, useState } from 'react';

const WeatherApp = () => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const currentdate = new Date();
    const currentmonth = months[currentdate.getMonth()];
    const currentyear = currentdate.getFullYear();

    const datestructure = `${currentdate} ${currentmonth} ${currentyear}`;

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const apikey = "06ea77acf9bd7502d595d8f1af05834a";
    
    const getWeather = () => {
        if (city){

            const keyurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

            
            
            fetch(keyurl)
            .then(response => response.json())
            .then((result) => {
                if(result.cod === 200){
                    setWeather(result);
                } else {
                    console.log('city not found');
                    
                }
                
                
            })
            
            .catch(error => console.error('Error fetching weather data:', error));
        };
    }

    useEffect(() => {
       
        if (city) {
            getWeather();
        }
    }, [city]);

    return (
        <div className='mx-auto my-20 text-center'>
            <h3 className='text-3xl my-3'>WeatherApp</h3>
            <input
                type="text"
                placeholder="Enter city name"
                onChange={(e) => setCity(e.target.value)}
                className='border px-2 py-1'
            />
            <button
                className='bg-blue-500 rounded px-2 py-1 mt-4'
                onClick={getWeather}
            >
                Search
            </button>
            <p>{datestructure}</p>
            <div className='bg'>
                {weather && (
                    <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className='text-2x1 font-bold mb-4'>{weather.name}</h2>
                    <p className="text-lg mb-4">{weather.weather[0].description}</p>
                    <p className="text-lg mb-4">Temperature: {weather.main.temp} C</p>
                    <p className="text-lg mb-4">Humidity: {weather.main.humidity}%</p>
                        
                        
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherApp;
