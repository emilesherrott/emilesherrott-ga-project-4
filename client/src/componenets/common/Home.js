import React from 'react'
import { Link } from 'react-router-dom'

import Marquee from '../Marquee'

import simmerDown from '../../assets/simmer-down.png'
import rumUp from '../../assets/rum-up.png'
import mekItGrow from '../../assets/mek-it-grow.png'

const Home = () => {

  const styles = {
    mainImage: {
      width: '25vw',
    },
  }
  return (
    <div>
      <div className="row">
        <div className="col-sm home-green-container home-green-text">
          <h2 className="home-green-title">Belly rumble</h2>
          <p>Jamaican dishes are variations on cuisines brought to the island from all across the world, often leveled up with local produce and spices. The reach of the British colonialism, the history of African slavery, post-abolition immigration culminates in a diverse and broad cuisine.</p>
        </div>
        <div className="col-sm home-black-container home-black-text">
          <h2 className="home-black-title">Who am I?</h2>
          <p>Half Jamaican, half Scottish - fully committed to learn how to code lovely websites.</p>
          <Marquee />
        </div>
      </div>
      <div className="home-strip padding-home-main main-background">
        <div className="home-pair home-yellow-container">
          <div>
            <h2>SIMMER DOWN</h2>
            <h2>SIMMER DOWN</h2>
            <h2>SIMMER DOWN</h2>
          </div>
          <div>
            <img src={simmerDown} style={styles.mainImage} />
          </div>
        </div>
        <div className="home-pair home-yellow-container">
          <div>
            <h2>RUM UP</h2>
            <h2>RUM UP</h2>
            <h2>RUM UP</h2>
          </div>
          <div>
            <img src={rumUp} style={styles.mainImage} />
          </div>
        </div>
        <div>
        </div>
        <div className="home-pair home-yellow-container">
          <Link to='/grow'>
            <div>
              <h2>GROW IT UP</h2>
              <h2>GROW IT UP</h2>
              <h2>GROW IT UP</h2>
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
