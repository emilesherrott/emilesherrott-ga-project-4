import React, { useState, useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage, getPayload } from '../helpers/auth'

const CropShow = () => {
  const [crop, setCrop] = useState(null)
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()
  const history = useHistory()






  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/crops/${id}`)
        setCrop(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [id])

  const userIsOwner = (userId) => {
    const payload = getPayload()
    if (!payload) return false
    return userId === payload.sub
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/grow/${id}`,
        {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`,
          },
        })
      history.push('/crops')
    } catch (err) {
      console.log(err)
    }
  }

  if (!crop) return null
  return (
    <div className="container">
      {crop ?
        <div className="row">
          <div className="col-8">
            <h1>{crop.title_english}</h1>
            <p>{crop.description}</p>
          </div>
          <div className="col-4">
            <img src={crop.image} className="cropsshow-image" />
          </div>
          {userIsOwner(crop.owner.id) &&
            <div>
              <div>
                <button onClick={handleDelete}>Delete Crop</button>
              </div>
              <div>
                <Link to={`/grow/${id}/edit`}>Edit Crop</Link>
              </div>
            </div>
          }
        </div>
        :
        <h2>{hasError ? 'Something went wrong' : '...loading'}</h2>
      }
    </div>
  )
}

export default CropShow