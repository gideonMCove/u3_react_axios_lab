import axios from "axios"
import { useState, useEffect } from "react"
import { BASE_URL } from '../globals'

const PlanetList = () => {
   



    const [Planets, setPlanets] = useState([])

    useEffect(()=>{
        const getPlanets = async () => {
            const response = await axios.get(`${BASE_URL}planets`)
            setPlanets(response.data.results)
        }
        getPlanets()
    },[])
    console.log('planets', Planets)

    if(!Planets){
        return <h1>The Supernovas... <br />that create...  <br />planets...<br />have yet...<br />TO EXPLODE</h1>
    }



    return (
        <div className="PlanetsList">
            <h1>Planet List</h1>
            {
                Planets.map((planet)=> (
                    <div key ={planet.name} className ="planetcard">
                        <h3>{planet.name}</h3>
                        </div>
                ))
            }
        </div>
    )
} 
export default PlanetList