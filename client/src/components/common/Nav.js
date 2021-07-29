import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import { getPayload } from '../helpers/auth'

const Nav = () => {
  const history = useHistory()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light home-text">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Back to Yard</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/simmerdown">|| Simmer Down</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rumup">|| Rum Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/grow">|| Grow It Up</Link>
            </li>
            {userIsAuthenticated() && <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/grow/new">|| Add A Crop</Link>
            </li>}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                || A Likkle More
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/ital">Who Am I?</Link></li>
                <li><hr className="dropdown-divider" /></li>
                {!userIsAuthenticated() ?
                  <>
                    <li><Link className="dropdown-item" to="/register">Register</Link></li>
                    <li><Link className="dropdown-item" to="/login">Login</Link></li>
                  </>
                  :
                  <li onClick={handleLogout}><Link className="dropdown-item" to="#">Logout</Link></li>
                }
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav