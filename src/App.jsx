import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'
import {useWeather} from './context/Weather';
import { useEffect } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  const weather = useWeather()

  useEffect(()=>
    {
      // get user data
      weather.fetchCurrentLocationData()
    },[])
  return (
    <>
      <div className='App'>
        <h1>Weather Forecast</h1>
        <Input></Input>
        <Button onClick = {weather.fetchData} value= 'search'></Button>
        <Card/>
        <Button onClick = {weather.fetchCurrentLocationData} value= 'refresh'></Button>
      </div>
    </>
  )
}

export default App
