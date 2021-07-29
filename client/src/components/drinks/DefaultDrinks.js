import React from 'react'

import koffee from '../../assets/koffee.png'

const DefaultDrinks = () => {

  return (
    <div className="container">
      <div className="d-flex">
        <div>
          <img src={koffee} className="meal-default-image" />
        </div>
        <div className="d-flex flex-column justify-content-center meal-default-text">
          <p>JAMAICAN DRINK GIVE YU STYLE</p>
          <p>JAMAICAN DRINK GIVE YU STYLE</p>
          <p>JAMAICAN DRINK GIVE YU STYLE</p>
        </div>
      </div>
    </div>
  )
}

export default DefaultDrinks