import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'
import CropForm from './CropForm'

const CropEdit = () => {
  const history = useHistory()
  const { id } = useParams()
  const [formData, setFormData] = useState(null)
  // title_english: '',
  // title_patois: '',
  // inside_plant: '',
  // plant_size: '',
  // average_yield: '',
  // how_to_care: '',
  // how_to_store: '',
  // description: '',
  // image: '',
  // instructions: '',
  // sow: '',

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

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/crops/${id}/`)
      setFormData(data)
    }
    getData()
  }, [id])

  const handleChange = (event) => {
    console.log(event)
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    const newErrors = { ...errors, [event.target.name]: '' }
    setFormData(newFormData)
    setErrors(newErrors)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('REACHED', formData)
    try {
      await axios.put('/api/crops/1/', formData,
        {
          headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
        }
      )
      history.push(`/grow/${id}/`)
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }

  console.log(setFormData)
  return (
    <div>
      <div className="container">
        <CropForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Edit Crop"
        />
      </div>
    </div>
  )
}

export default CropEdit