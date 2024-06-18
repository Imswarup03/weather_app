import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

const WeatherContext = createContext(null)


export const useWeather = () =>{
    return useContext(WeatherContext)

}


const WeatherProvider= (props) => {
    const [data, setData]= useState(null)

    const [searchCity, setSearchCity] = useState(null)

    const fetchData= async() =>{
        const response = await getWeatherDataForCity(searchCity)
        setData(response)
        // setSearchCity(searchCity)
    }

    const fetchCurrentLocationData= async()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position);
            getWeatherDataForLocation(position.coords.latitude, position.coords.longitude).then((data)=> setData(data));
        })
        
    }
  return (
    <WeatherContext.Provider 
    value= {{ searchCity, data, setSearchCity, fetchData, setData, fetchCurrentLocationData}}>
    {props.children}
    </WeatherContext.Provider>
  )
}

export {WeatherProvider}