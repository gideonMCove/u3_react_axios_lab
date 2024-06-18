import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const PlanetDetails = (props) => {
    
    const [planet, setPlanet] = useState("")

    let { id } = useParams()
    
    useEffect(() => {
      const getPlanets = async () => {
        const response = await axios.get(`${BASE_URL}planets`)
        setPlanet(response.data.results[id])
        // let selectedFilm = film.find((film)=> film.id === parseInt(id))
        // setFilm(selectedFilm)
      }
      getPlanets()
    },[])

    return planet ? (
        <div className="detail">
            <h3>{planet.title}</h3>
            <h4>diameter: {planet.diameter}</h4>
            <h4>climate: {planet.climate}</h4>
            <h4>population: {planet.population}</h4>
            


        </div>
    ) : null;


}

export default PlanetDetails