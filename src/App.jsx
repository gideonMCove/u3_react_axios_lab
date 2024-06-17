import { useState, useEffect } from 'react'

import Header from './Components/Header'
import Main from './Components/Main'
import axios from 'axios'
import { BASE_URL } from './globals'
 



import './App.css'

function App() {

  const [starships, setStarships] = useState([])
  

  useEffect(()=>{
    const getShips = async () => {
      const response = await axios.get(`${BASE_URL}starships`)
      setStarships(response.data.results)

      
    }
    getShips()
  },[])
  console.log('starships', starships)
  

  return (
    <>
     <div className="App">
      <link href="https://fonts.cdnfonts.com/css/star-wars" rel="stylesheet"/>
                
      <Header />
      <Main starships = {starships} />

      </div>
      
    </>
  )
}

export default App
