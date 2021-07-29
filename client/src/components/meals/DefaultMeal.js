import React from 'react'

import tooFast from '../../assets/shelly-ann.png'

const DefaultMeal = () => {

  return (
    <div className="container">
      <div className="d-flex">
        <div>
          <img src={tooFast} className="meal-default-image" />
        </div>
        <div className="d-flex flex-column justify-content-center meal-default-text">
          <p>JAMAICAN SUPPA GIVE YU SPEED</p>
          <p>JAMAICAN SUPPA GIVE YU SPEED</p>
          <p>JAMAICAN SUPPA GIVE YU SPEED</p>
        </div>
      </div>
    </div>
  )
}

export default DefaultMeal