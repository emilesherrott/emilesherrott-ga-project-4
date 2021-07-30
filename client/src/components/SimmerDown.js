import React, { useState } from 'react'

import DefaultMeal from './meals/DefaultMeal'
import AckeeAndSaltfish from './meals/AckeeAndSaltfish'
import CurryGoat from './meals/CurryGoat'

const SimmerDown = () => {
  const [meal, setMeal] = useState(<DefaultMeal />)

  const goToAckee = () => {
    setMeal(<AckeeAndSaltfish />)
  }

  const goToCurryGoat = () => {
    setMeal(<CurryGoat />)
  }

  return (
    <>
      <div className="grows-main-background grows-main-text grows-main-container">
        <h2 className="d-flex justify-content-center grows-title-text">It taste so nice, mi ah cook it twice</h2>
        <div className="d-flex justify-content-around grows-secondary-container">
          <div onClick={goToAckee}>
            <h2 className="grows-subheader-text">Ackee & Saltfish</h2>
          </div>
          <div onClick={goToCurryGoat}>
            <h2 className="grows-subheader-text">Curry Goat</h2>
          </div>
          <div>
            <h2 className="grows-subheader-text">Red Pea Soup</h2>
          </div>
          <div>
            <h2 className="grows-subheader-text">Oxtail</h2>
          </div>
        </div>
      </div>
      <div>
        {meal}
      </div>
    </>

  )
}

export default SimmerDown