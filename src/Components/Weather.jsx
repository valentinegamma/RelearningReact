import React from 'react'

function Weather({temprature}) {
  
  return(
    temprature <= 15 ? "It's cold outside"
    :temprature >15 && temprature <25? "It's nice outside"
    :"it's hot outside" 
  )  
}

export default Weather
