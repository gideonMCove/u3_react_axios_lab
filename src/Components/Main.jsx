import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import FilmList from './FilmList'
import PlanetList from './PlanetList'
import CharacterList from './CharacterList'
import StarshipDetails from './StarshipDetails'
import FilmDetails from './FilmDetails'
import CharacterDetails from './CharacterDetails'
import PlanetDetails from './PlanetDetails'

const Main = (props) => {
    console.log("mainStarships",{props})
    return (
        <div className ="Main-Container">
            
            <Routes>
                <Route path ="/" element = {<Home />} />
                <Route path ="/StarshipList" element = {<StarshipList starships = {props.starships}/>}/>
                <Route path ="/Films" element = {<FilmList />} />
                <Route path ="/Planets" element = {<PlanetList />} />
                <Route path ='/CharacterList' element = {<CharacterList />} />
                <Route path ="/StarshipList/:id" element={ <StarshipDetails starships = {props.starships} />}/>
                <Route path ="/Films/:id" element ={<FilmDetails />}/>
                <Route path ="/CharacterList/:id" element = {<CharacterDetails />}/>
                <Route path ="/Planets/:id" element = {<PlanetDetails />}/>
            </Routes>
      </div>
      
    )
   }
   
  export default Main