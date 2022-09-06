import React from "react"
import "./style_time.css"

export function Time() {

  let dateString = new Date().toLocaleDateString();
  let formattedString = dateString.replace(", ", " - ");  
  
  return (
    <span className="time">{formattedString}</span>
  )
}
