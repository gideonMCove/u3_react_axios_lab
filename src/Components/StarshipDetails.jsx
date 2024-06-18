import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL} from '../globals'

const StarshipDetails = (props) => {
    const [starship, setStarship] = useState("")

    let { id } = useParams()

    useEffect(() => {
        const getStarships = async () => {
        const response = await axios.get(`${BASE_URL}starships`)
        setStarship(response.data.results[id])
        }
        getStarships()
    },[])

    return starship ? (
        <div className="detail">
            <h3>{starship.name}</h3>
            <h4>{starship.manufacturer}</h4>
            <h4>{starship.cost_in_credits}</h4>
            <h4>{starship.length}</h4>
            <h4>{starship.max_atmosphering_speed}</h4>
            <h4>{starship.crew}</h4>
            <h4>{starship.passengers}</h4>
            <h4>{starship.cargo_capacity}</h4>
            <script>{console.log(`gideon,${starship.name}`)}</script>


        </div>
    ) : null;


}

export default StarshipDetails