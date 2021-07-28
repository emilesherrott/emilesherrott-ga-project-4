import React from 'react'

import ackee from '../../assets/meals/ackee.jpg'

const AckeeAndSaltfish = () => {

  return (
    <div className="container">
      <div className="row main">
        <div className="col-4">
          <div>
            <img src={ackee} className="meals-image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AckeeAndSaltfish