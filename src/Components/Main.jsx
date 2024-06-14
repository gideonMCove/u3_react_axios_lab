import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import FilmList from './FilmList'
import PlanetList from './PlanetList'

const Main = (props) => {
    console.log("mainStarships",{props})
    return (
        <div className ="Main-Container">
            
            <Routes>
                <Route path ="/" element = {<Home />} />
                <Route path ="/StarshipList" element = {<StarshipList starships = {props.starships}/>}/>
                <Route path ="/Films" element = {<FilmList />} />
                <Route path ="/Planets" element = {<PlanetList />} />
            </Routes>
      </div>
      
    )
   }
   
  export default Main