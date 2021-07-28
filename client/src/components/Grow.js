import React, { useState, useEffect } from 'react'
import axios from 'axios'

import GrowDefault from './growFiles/GrowDefault'
import Spring from './growFiles/Spring'
import Summer from './growFiles/Summer'
import Autumn from './growFiles/Autumn'
import Winter from './growFiles/Winter'

import CropsCard from './crops/CropsCard'


const Grow = () => {

  const [crops, setCrops] = useState(null)
  const [infoText, setInfoText] = useState(<GrowDefault />)

  const goToSpring = () => {
    setInfoText(<Spring />)
  }
  const goToSummer = () => {
    setInfoText(<Summer />)
  }
  const goToAutumn = () => {
    setInfoText(<Autumn />)
  }
  const goToWinter = () => {
    setInfoText(<Winter />)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/crops/')
        setCrops(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  if (!crops) return null
  console.log(crops)

  return (
    <>
      <div>
        <div className="grows-main-background grows-main-text grows-main-container">
          <h2 className="d-flex justify-content-center grows-title-text">Grow your own food for top level taste</h2>
          <div className="d-flex justify-content-around grows-secondary-container">
            <div onClick={goToSpring}>
              <h2 className="grows-subheader-text">Spring Tips</h2>
            </div>
            <div onClick={goToSummer}>
              <h2 className="grows-subheader-text">Summer Tips</h2>
            </div>
            <div onClick={goToAutumn}>
              <h2 className="grows-subheader-text">Autumn Tips</h2>
            </div>
            <div onClick={goToWinter}>
              <h2 className="grows-subheader-text">Winter Tips</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        {infoText}
      </div>
      <div>
        <section className="section">
          <div className="container tile">
            {crops ?
              <div className="d-flex flex-wrap justify-content-around">
                {crops.map(crop => (
                  <CropsCard key={crop.id} {...crop} />
                ))}
              </div>
              :
              <h2 className=""> {'...loading'}</h2>
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default Grow