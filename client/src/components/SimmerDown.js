import React, { useState } from 'react'

import AckeeAndSaltfish from './meals/AckeeAndSaltfish'

const SimmerDown = () => {
  const [meal, setMeal] = useState(null)

  const goToAckee = () => {
    setMeal(<AckeeAndSaltfish />)
  }

  return (
    <>
      <div className="grows-main-background grows-main-text grows-main-container">
        <h2 className="d-flex justify-content-center grows-title-text">It taste so nice, mi ah cook it twice</h2>
        <div className="d-flex justify-content-around grows-secondary-container">
          <div onClick={goToAckee}>
            <h2 className="grows-subheader-text">Ackee & Saltfish</h2>
          </div>
          <div>
            <h2 className="grows-subheader-text">Currey Goat</h2>
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