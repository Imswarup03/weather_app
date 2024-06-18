import React from 'react'

import {useWeather} from '../context/Weather'

const Input = () => {
    const weather = useWeather()

    console.log('weather', weather)
  return (
    <input className='input-field'
    type="text" 
    placeholder='Enter your city'
    value = {weather.searchCity}
    onChange={(e) =>{weather.setSearchCity(e.target.value)}} 
    required />
  )
}



export default Input