import React, { useState } from 'react'

import curryGoat from '../../assets/meals/currygoat.jpeg'

import Ingredients2 from './curryGoat/Ingredients2'
import ItalIngredients2 from './curryGoat/ItalIngredients2'
import Ingredients3 from './curryGoat/Ingredients3'
import ItalIngredients3 from './curryGoat/ItalIngredients3'
import Ingredients4 from './curryGoat/Ingredients4'
import ItalIngredients4 from './curryGoat/ItalIngredients4'
import Ingredients5 from './curryGoat/Ingredients5'
import ItalIngredients5 from './curryGoat/ItalIngredients5'
import Ingredients6 from './curryGoat/Ingredients6'
import ItalIngredients6 from './curryGoat/ItalIngredients6'

import Brief from './curryGoat/Brief'
import Directions from './curryGoat/Directions'
import DirectionsItal from './curryGoat/DirectionsItal'


const CurryGoat = () => {

  const [serves, setServes] = useState(4)
  const [italToggle, setItalToggle] = useState(false)
  const [ingredients, setIngredients] = useState(<Ingredients4 />)
  const [directions, setDirections] = useState(<Directions />)

  const toggleItal = () => {
    italToggle ? setItalToggle(false) : setItalToggle(true)
    italToggle ? setDirections(<Directions />) : setDirections(<DirectionsItal />)
    if (italToggle && serves === 2) setIngredients(<Ingredients2 />)
    if (!italToggle && serves === 2) setIngredients(<ItalIngredients2 />)
    if (italToggle && serves === 3) setIngredients(<Ingredients3 />)
    if (!italToggle && serves === 3) setIngredients(<ItalIngredients3 />)
    if (italToggle && serves === 4) setIngredients(<Ingredients4 />)
    if (!italToggle && serves === 4) setIngredients(<ItalIngredients4 />)
    if (italToggle && serves === 5) setIngredients(<Ingredients5 />)
    if (!italToggle && serves === 5) setIngredients(<ItalIngredients5 />)
    if (italToggle && serves === 6) setIngredients(<Ingredients6 />)
    if (!italToggle && serves === 6) setIngredients(<ItalIngredients6 />)
  }

  const serveMore = () => {
    if (serves <= 5) setServes(serves + 1)
    if (serves === 2 && !italToggle) setIngredients(<Ingredients3 />)
    if (serves === 2 && italToggle) setIngredients(<ItalIngredients3 />)
    if (serves === 3 && !italToggle) setIngredients(<Ingredients4 />)
    if (serves === 3 && italToggle) setIngredients(<ItalIngredients4 />)
    if (serves === 4 && !italToggle) setIngredients(<Ingredients5 />)
    if (serves === 4 && italToggle) setIngredients(<ItalIngredients5 />)
    if (serves === 5 && !italToggle) setIngredients(<Ingredients6 />)
    if (serves === 5 && italToggle) setIngredients(<ItalIngredients6 />)

  }


  const serveLess = () => {
    if (serves >= 3) setServes(serves - 1)
    if (serves === 6 && !italToggle) setIngredients(<Ingredients5 />)
    if (serves === 6 && italToggle) setIngredients(<ItalIngredients5 />)
    if (serves === 5 && !italToggle) setIngredients(<Ingredients4 />)
    if (serves === 5 && italToggle) setIngredients(<ItalIngredients4 />)
    if (serves === 4 && !italToggle) setIngredients(<Ingredients3 />)
    if (serves === 4 && italToggle) setIngredients(<ItalIngredients3 />)
    if (serves === 3 && !italToggle) setIngredients(<Ingredients2 />)
    if (serves === 3 && italToggle) setIngredients(<ItalIngredients2 />)

  }


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
                <h3 onClick={toggleItal} className={italToggle ? 'meals-ital-true' : 'meals-ital-false'}>Ital</h3>
              </div>
            </div>
          </div>
          {ingredients}
          <div>
            <img src={curryGoat} className="meals-image goat-image" />
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

export default CurryGoat