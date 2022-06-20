import * as React from "react"
import "./Instructions.css"

export function Instructions(props) {
  return (
    <aside className="instructions">
      <p className="start">{props.instructions.start}</p>
      <p className = "onlyCategory">{props.instructions.onlyCategory}</p>
      <p className = "onlyRestaurant">{props.instructions.onlyRestaurant}</p>
      <p className = "noSelectedItem">{props.instructions.noSelectedItem}</p>
      <p className = "allSelected">{props.instructions.allSelected}</p>
    </aside>
  )
}
export default Instructions
