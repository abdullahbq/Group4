import React from "react"
import Data from "./Data"

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <div className="d-flex justify-content-center mb-4">
      {menuItems.map((Val, id) => {
        return (
          <button
            className="btn-dark text-white btn-lg m-2"
            onClick={() => filterItem(Val)}
            key={id}
          >
            {Val}
          </button>
        )
      })}
      <button
        className="btn-dark text-white btn-lg m-2"
        onClick={() => setItem(Data)}
      >
        All
      </button>
    </div>
  )
}

export default Buttons
