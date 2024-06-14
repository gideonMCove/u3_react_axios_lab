import { Link } from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'

const Nav = () => {
    return (
        <div className="Nav">
            
            <Link to="/"> Home </Link>
            <Link to="/StarshipList"> StarshipList </Link>

    </div>
    
    )
   }
   
  export default Nav