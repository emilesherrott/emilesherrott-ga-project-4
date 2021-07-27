import React from 'react'
import { Link } from 'react-router-dom'

const CropsCard = (crop) => {

  return (
    <div className="cropscard-tile">
      <Link to={`/grow/${crop.id}`}>
        <img src={crop.image} className="image" />
        <div className="cropscard-title-text">{crop.title_english}</div>
        <div>{crop.plant_size}</div>
      </Link>
    </div>
  )
}

export default CropsCard