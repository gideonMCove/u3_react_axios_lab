import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const CharacterDetails = (props) => {
    
    const [character, setCharacter] = useState("")

    let { id } = useParams()
    
    useEffect(() => {
      const getCharacters = async () => {
        const response = await axios.get(`${BASE_URL}people`)
        setCharacter(response.data.results[id])
        // let selectedCharacter = film.find((film)=> film.id === parseInt(id))
        // setFilm(selectedFilm)
      }
      getCharacters()
    },[])

    return character ? (
        <div className="detail">
            <h3>{character.name}</h3>
            <h4>born: {character.birth_year}</h4>
            <h4>gender: {character.gender}</h4>
            
            


        </div>
    ) : null;


}

export default CharacterDetails