import { Link } from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'

const Nav = () => {
    return (
        <div className="Nav">
            
            <Link to="/"> Home </Link>
            <Link to="/StarshipList"> Starship List </Link>
            <Link to='/Films'> Films </Link>
            <Link to='/Planets'> Planets </Link>
            <Link to='/CharacterList'>Characters</Link>
            

    </div>
    
    )
   }
   
  export default Nav