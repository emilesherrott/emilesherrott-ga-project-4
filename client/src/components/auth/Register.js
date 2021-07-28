import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const Register = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    first_name: '',
    last_name: '',
    password: '',
    password_confirmation: '',
  })
  const [errors, setErrors] = useState({
    email: '',
    username: '',
    first_name: '',
    last_name: '',
    password: '',
    password_confirmation: '',
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
      await axios.post('/api/auth/register/', formData)
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
          type="text"
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
        <label htmlFor="exampleInputFirstName1">First name</label>
        <input
          type="text"
          name="first_name"
          className="form-control"
          id="exampleInputFirstName1"
          aria-describedby="first_nameHelp"
          placeholder="Enter First Name"
          onChange={handleChange}
          value={formData.first_name} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputLastName1">Last name</label>
        <input
          type="text"
          name="last_name"
          className="form-control"
          id="exampleInputLastName1"
          aria-describedby="last_nameHelp"
          placeholder="Enter First Name"
          onChange={handleChange}
          value={formData.last_name} />
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
        <label htmlFor="exampleInputPasswordConfirmation1">Password Confirmation</label>
        <input
          type="password"
          name="password_confirmation"
          className="form-control"
          id="exampleInputPasswordConfirmation1"
          placeholder="Password Confirmation"
          onChange={handleChange}
          value={formData.password_confirmation} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Register