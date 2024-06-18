import axios from "axios"
import { useState, useEffect } from "react"
import { BASE_URL } from '../globals'
import { useNavigate } from "react-router-dom"

const CharacterList = () => {

    let navigate = useNavigate()

    const showCharacter = (index) => {
        navigate(`${index}`)
    }

    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        const getCharacters = async () => {
            const response = await axios.get(`${BASE_URL}people`)
            setCharacters(response.data.results)
        }
        getCharacters()
    },[])
    console.log('characters', characters)



    return (
        <div className="CharacterList">
            <h1>Character List</h1>
            {
                characters.map((character, index)=> (
                    <div className="characterDiv" onClick={()=>showCharacter(index)} key={index}>
                        <h3>{character.name}</h3>
                        </div>
                ))
            }
        </div>
    )
} 
export default CharacterList


//"name": "Luke Skywalker",
// "height": "172",
// "mass": "77",
// "hair_color": "blond",
// "skin_color": "fair",
// "eye_color": "blue",
// "birth_year": "19BBY",
// "gender": "male",
// "homeworld": "https://swapi.dev/api/planets/1/",
// "films": [
//     "https://swapi.dev/api/films/1/",
//     "https://swapi.dev/api/films/2/",
//     "https://swapi.dev/api/films/3/",
//     "https://swapi.dev/api/films/6/"
// ],
// "species": [],
// "vehicles": [
//     "https://swapi.dev/api/vehicles/14/",
//     "https://swapi.dev/api/vehicles/30/"
// ],
// "starships": [
//     "https://swapi.dev/api/starships/12/",
//     "https://swapi.dev/api/starships/22/"
// ],
// "created": "2014-12-09T13:50:51.644000Z",
// "edited": "2014-12-20T21:17:56.891000Z",
// "url": "https://swapi.dev/api/people/1/"