import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'

const Main = (props) => {
    console.log("mainStarships",{props})
    return (
        <div className ="Main-Container">
            
            <Routes>
                <Route path ="/" element = {<Home />} />
                <Route path ="/StarshipList" element = {<StarshipList starships = {props.starships}/>}/>
            </Routes>
      </div>
      
    )
   }
   
  export default Main