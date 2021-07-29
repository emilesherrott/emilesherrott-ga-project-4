import React, { useState } from 'react'

import DefaultDrinks from './drinks/DefaultDrinks'
import RumPunch from './drinks/RumPunch'

const RumUp = () => {
  const [drink, setDrink] = useState(<DefaultDrinks />)

  const goToRumPunch = () => {
    setDrink(<RumPunch />)
  }

  return (
    <>
      <div className="grows-main-background grows-main-text grows-main-container">
        <h2 className="d-flex justify-content-center grows-title-text">Why yuh stop pourin?</h2>
        <div className="d-flex justify-content-around grows-secondary-container">
          <div onClick={goToRumPunch}>
            <h2 className="grows-subheader-text">Rum Punch</h2>
          </div>
          <div>
            <h2 className="grows-subheader-text">Rum Cream</h2>
          </div>
          <div>
            <h2 className="grows-subheader-text">Pineapple Punch</h2>
          </div>
          <div>
            <h2 className="grows-subheader-text">Sorrel</h2>
          </div>
        </div>
      </div>
      <div>
        {drink}
      </div>
    </>

  )
}

export default RumUp