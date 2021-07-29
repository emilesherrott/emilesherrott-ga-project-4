import React from 'react'
import { Link } from 'react-router-dom'

import simmerDown from '../../assets/simmer-down.png'
import rumUp from '../../assets/rum-up.png'
import mekItGrow from '../../assets/mek-it-grow.png'

import redStripe from '../../assets/logos/red-stripe.png'
import flag from '../../assets/logos/flag-map.png'
import wray from '../../assets/logos/wray-and-nephew.png'


const Home = () => {

  const styles = {
    mainImage: {
      height: '18vw',
    },
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm home-green-container home-green-text">
          <h2 className="home-green-title">Belly rumble</h2>
          <p className="home-text">Jamaican dishes are variations on cuisines brought to the island from all across the world, often leveled up with local produce and spices. The reach of the British colonialism, the history of African slavery, post-abolition immigration culminates in a diverse and broad cuisine.</p>
        </div>
        <div className="col-sm home-black-container home-black-text">
          <h2 className="home-black-title">Who am I?</h2>
          <p className="home-text">Half Jamaican, half Scottish - fully committed to learn how to code lovely websites.</p>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-evenly">
        <img src={redStripe} className="home-row-image" />
        <img src={flag} className="home-row-flag" />
        <img src={wray} className="home-row-wray" />
      </div>
      <div className="home-strip padding-home-main main-background">
        <div className="home-pair home-yellow-container">
          <Link to='/simmerdown'>
            <div>
              <h2 className="home-text home-link">SIMMER DOWN</h2>
              <h2 className="home-text home-link">SIMMER DOWN</h2>
              <h2 className="home-text home-link">SIMMER DOWN</h2>
            </div>
            <div>
              <img src={simmerDown} style={styles.mainImage} />
            </div>
          </Link>
        </div>
        <div className="home-pair home-yellow-container">
          <Link to='/rumup'>
            <div>
              <h2 className="home-text home-link">RUM UP</h2>
              <h2 className="home-text home-link">RUM UP</h2>
              <h2 className="home-text home-link">RUM UP</h2>
            </div>
            <div>
              <img src={rumUp} style={styles.mainImage} />
            </div>
          </Link>
        </div>
        <div>
        </div>
        <div className="home-pair home-yellow-container">
          <Link to='/grow'>
            <div>
              <h2 className="home-text home-link">GROW IT UP</h2>
              <h2 className="home-text home-link">GROW IT UP</h2>
              <h2 className="home-text home-link">GROW IT UP</h2>
            </div>
            <div>
              <img src={mekItGrow} style={styles.mainImage} />
            </div>
          </Link>
        </div>
      </div >
    </div >
  )

}

export default Home
