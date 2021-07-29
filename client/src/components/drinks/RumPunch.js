import React, { useState } from 'react'

import rumPunch from '../../assets/drinks/rum-punch.jpeg'


import Ingredients2 from './RumPunch/Ingredients2'
import VirginIngredients2 from './RumPunch/VirginIngredients2.js'
import Ingredients3 from './RumPunch/Ingredients3'
import VirginIngredients3 from './RumPunch/VirginIngredients3'
import Ingredients4 from './RumPunch/Ingredients4'
import VirginIngredients4 from './RumPunch/VirginIngredients4'
import Ingredients5 from './RumPunch/Ingredients5'
import VirginIngredients5 from './RumPunch/VirginIngredients5'
import Ingredients6 from './RumPunch/Ingredients6'
import VirginIngredients6 from './RumPunch/VirginIngredients6'

import Brief from './RumPunch/Brief'
import Directions from './RumPunch/Directions'
import DirectionsVirgin from './RumPunch/DirectionsVirgin'


const RumPunch = () => {

  const [serves, setServes] = useState(4)
  const [virginToggle, setVirginToggle] = useState(false)
  const [ingredients, setIngredients] = useState(<Ingredients4 />)
  const [directions, setDirections] = useState(<Directions />)

  const toggleVirgin = () => {
    virginToggle ? setVirginToggle(false) : setVirginToggle(true)
    virginToggle ? setDirections(<Directions />) : setDirections(<DirectionsVirgin />)
    if (virginToggle && serves === 2) setIngredients(<Ingredients2 />)
    if (!virginToggle && serves === 2) setIngredients(<VirginIngredients2 />)
    if (virginToggle && serves === 3) setIngredients(<Ingredients3 />)
    if (!virginToggle && serves === 3) setIngredients(<VirginIngredients3 />)
    if (virginToggle && serves === 4) setIngredients(<Ingredients4 />)
    if (!virginToggle && serves === 4) setIngredients(<VirginIngredients4 />)
    if (virginToggle && serves === 5) setIngredients(<Ingredients5 />)
    if (!virginToggle && serves === 5) setIngredients(<VirginIngredients5 />)
    if (virginToggle && serves === 6) setIngredients(<Ingredients6 />)
    if (!virginToggle && serves === 6) setIngredients(<VirginIngredients6 />)
  }

  const serveMore = () => {
    if (serves <= 5) setServes(serves + 1)
    if (serves === 2 && !virginToggle) setIngredients(<Ingredients3 />)
    if (serves === 2 && virginToggle) setIngredients(<VirginIngredients3 />)
    if (serves === 3 && !virginToggle) setIngredients(<Ingredients4 />)
    if (serves === 3 && virginToggle) setIngredients(<VirginIngredients4 />)
    if (serves === 4 && !virginToggle) setIngredients(<Ingredients5 />)
    if (serves === 4 && virginToggle) setIngredients(<VirginIngredients5 />)
    if (serves === 5 && !virginToggle) setIngredients(<Ingredients6 />)
    if (serves === 5 && virginToggle) setIngredients(<VirginIngredients6 />)

  }


  const serveLess = () => {
    if (serves >= 3) setServes(serves - 1)
    if (serves === 6 && !virginToggle) setIngredients(<Ingredients5 />)
    if (serves === 6 && virginToggle) setIngredients(<VirginIngredients5 />)
    if (serves === 5 && !virginToggle) setIngredients(<Ingredients4 />)
    if (serves === 5 && virginToggle) setIngredients(<VirginIngredients4 />)
    if (serves === 4 && !virginToggle) setIngredients(<Ingredients3 />)
    if (serves === 4 && virginToggle) setIngredients(<VirginIngredients3 />)
    if (serves === 3 && !virginToggle) setIngredients(<Ingredients2 />)
    if (serves === 3 && virginToggle) setIngredients(<VirginIngredients2 />)

  }

  console.log(virginToggle)

  return (
    <div className="container meals-container">
      <div className="row main">
        <div className="col-4">
          <div>
            <div className="d-flex align-items-center">
              <h3 className="meals-serve"> Serves: {serves}</h3>
              <div className="d-flex flex-column meals-plus-minus">
                <span onClick={serveMore}>  &#43; </span>
                <span onClick={serveLess}> &#8722; </span>
              </div>
              <div>
                <h3 onClick={toggleVirgin} className={virginToggle ? 'meals-ital-true' : 'meals-ital-false'}>Ital</h3>
              </div>
            </div>
          </div>
          {ingredients}
          <div>
            <img src={rumPunch} className="meals-image" />
          </div>
        </div>
        <div className="col-8">
          <div><Brief /></div>
          <div>{directions}</div>
        </div>
      </div>
    </div>
  )
}

export default RumPunch