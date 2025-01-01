import React from 'react'

function WeatherSearch() {
  return (
    <div className='WeatherSearch'>
      <input type="text" name="searchBox" id="searchBox" className="searchBox" />
      <button className="searchButton">Search</button>
    </div>
  )
}

export default WeatherSearch