import { useState } from 'react'
import WeatherSearch  from "./WeatherSearch.jsx";
import Header from './Header.jsx'


function App() {


  return (
    <>
    <Header></Header>
    <h1>Weather App</h1>
    <WeatherSearch/>
    </>
  )
}

export default App