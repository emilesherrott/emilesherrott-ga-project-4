import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const Register = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    passwordConfirmation: '',
  })
  const [errors, setErrors] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    const newErrors = { ...errors, [event.target.name]: '' }
    setFormData(newFormData)
    setErrors(newErrors)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('/api/register', formData)
      history.push('/login')
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputUsername1">Username</label>
        <input
          type="username"
          name="username"
          className="form-control"
          id="exampleInputUsername1"
          aria-describedby="usernameHelp"
          placeholder="Enter username"
          onChange={handleChange}
          value={formData.username} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={handleChange}
          value={formData.email} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password Confirmation</label>
        <input
          type="password"
          name="passwordConfirmation"
          className="form-control"
          id="exampleInputPasswordConfirmation1"
          placeholder="Password Confirmation"
          onChange={handleChange}
          value={formData.passwordConfirmation} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Register