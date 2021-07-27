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

  if (!crop) return null
  return (
    <div className="row">
      <div className="col-8">
        <h1>{crop.title_english}</h1>
        <p>{crop.description}</p>
      </div>
      <div className="col-4">
        <img src={crop.image} className="cropsshow-image" />
      </div>
    </div>
  )
}

export default CropShow