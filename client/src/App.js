import React, { useEffect } from 'react'
import axios from 'axios'

const App = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/crops')
      console.log(res)
    }
    getData()
  })

  return <h1>Hello World</h1>
}

export default App
