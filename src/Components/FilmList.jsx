import axios from "axios"
import { useState, useEffect } from "react"
import { BASE_URL } from '../globals'

const FilmList = () => {

    const [films, setFilms] = useState([])

    useEffect(()=>{
        const getFilms = async () => {
            const response = await axios.get(`${BASE_URL}films`)
            setFilms(response.data.results)
        }
        getFilms()
    },[])
    console.log('films', films)



    return (
        <div className="FilmList">
            <h1>Film List</h1>
            {
                films.map((film)=> (
                    <div key ={film.title} className ="filmcard">
                        <h3>{film.title}</h3>
                        </div>
                ))
            }
        </div>
    )
} 
export default FilmList