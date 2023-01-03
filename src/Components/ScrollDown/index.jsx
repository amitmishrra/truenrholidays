import React, { useEffect } from 'react'
import "./style.css"
export default function ScrollDown() {
  return (
    <div onClick={()=>{window.scrollBy(0, 700);}} class="arrow"></div>
  )
}
