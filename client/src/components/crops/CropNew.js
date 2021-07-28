import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'
import CropForm from './CropForm'

const CropNew = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    title_english: '',
    title_patois: '',
    inside_plant: '',
    plant_size: '',
    average_yield: '',
    how_to_care: '',
    how_to_store: '',
    description: '',
    image: '',
    instructions: '',
    sow: '',
  })
  const [errors, setErrors] = useState({
    title_english: '',
    title_patois: '',
    inside_plant: '',
    plant_size: '',
    average_yield: '',
    how_to_care: '',
    how_to_store: '',
    description: '',
    image: '',
    instructions: '',
    sow: '',
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
      await axios.post('/api/crops/', formData,
        {
          headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
        }
      )
      history.push('/crops')
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }

  return (
    <div>
      <div className="container">
        <CropForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Mek A Crop"
        />
      </div>
    </div>
  )
}

export default CropNew