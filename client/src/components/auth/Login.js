import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState(false)

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('api/auth/login/', formData)
      setTokenToLocalStorage(data.token)
      history.push('/')
    } catch (err) {
      setError(true)
    }
  }

  const handleFocus = () => {
    setError(false)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            type="email"
            name="email"
            className={`form-control ${error ? 'is-danger' : ''}`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            value={formData.email} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            type="password"
            name="password"
            className={`form-control ${error ? 'is-danger' : ''}`}
            id="exampleInputPassword1"
            aria-describedby="PasswordHelp"
            placeholder="Enter Password"
            value={formData.password} />
        </div>
        <div className="">
          <button type="submit" className="button">Log In</button>
        </div>
      </form>
    </div>
  )
}

export default Login