import React from 'react'

import jamflag from '../assets/jamflag.png'
import emile from '../assets/emile.png'
import linkedin from '../assets/logos/linkedIn.png'
import github from '../assets/logos/github.png'
import insta from '../assets/logos/instagram.png'


const Ital = () => {

  return (
    <div className="container">

      <div className="row row-1">
        <div className="col d-flex flex-column align-items-center">
          <h2 className=" top-text">Out of many one people</h2>
          <img src={jamflag} className="jam-flag" />
        </div>
      </div>

      <div className="row row-2">
        <div className="col">
          <a href="https://www.linkedin.com/in/emilesherrott/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} className="logo-image" /> <h3 className="logo-text">LinkedIn</h3>
          </a>
        </div>
        <div className="col">
          <img src={emile} className="emile-image" />
        </div>
        <div className="col">
        </div>
      </div>

      <div className="row row-3">
        <div className="col">
          <a href="https://github.com/emilesherrott" target="_blank" rel="noopener noreferrer">
            <img src={github} className="logo-image" /> <h3 className="logo-text">GitHub</h3>
          </a>
        </div>
      </div>

      <div className="row row-4">
        <div className="col">
          <a href="https://www.instagram.com/simmerdownrumup/?hl=en-gb" target="_blank" rel="noopener noreferrer">
            <img src={insta} className="logo-image" /> <h3 className="logo-text">Instagram</h3>
          </a>
        </div>
        <div className="col">
        </div>
        <div className="col">
        </div>
      </div>

      <div className="row row-5">
        <div className="col">
        </div>
        <div className="col">
        </div>
        <div className="col">
        </div>
      </div>

    </div>
  )
}

export default Ital