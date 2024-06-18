import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const FilmDetails = (props) => {
    
    const [film, setFilm] = useState("")

    let { id } = useParams()
    
    useEffect(() => {
      const getFilms = async () => {
        const response = await axios.get(`${BASE_URL}films`)
        setFilm(response.data.results[id])
        // let selectedFilm = film.find((film)=> film.id === parseInt(id))
        // setFilm(selectedFilm)
      }
      getFilms()
    },[])

    return film ? (
        <div className="detail">
            <h3>Title :{film.title}</h3>
            <h4>directed by:{film.director}</h4>
            <h4>produced by:{film.producer}</h4>
            <h4>released on:{film.release_date}</h4>
            


        </div>
    ) : null;


}

export default FilmDetails