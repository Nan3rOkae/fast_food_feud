import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, clicked =()=> {}}) {
 
  return (
    // if is active is true, use first string, else use chip
    <button className={isActive? "chip active": "chip"} onClick ={clicked}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
