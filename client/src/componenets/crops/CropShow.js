import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CropShow = () => {

  const { id } = useParams()

  const [crop, setCrop] = useState(null)





  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/crops/${id}`)
        setCrop(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  console.log(crop)
  return (
    <h1>Show</h1>
  )
}

export default CropShow