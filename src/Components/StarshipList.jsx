
const StarshipList = (props) => {
    // console.log('starshipslist', props)

    if(!props.starships){
        return <h1>The Starfleet <br />is still <br />approaching...<br />PLEASE...<br />WAIT</h1>
    }
    return (
    <div className ="StarshipList">
        <h1>StarshipList</h1>
        {
            props.starships.map((starship)=> (
                <div key ={starship.model} className ="card">
                    <h3>{starship.name}</h3>


                </div>
            ))
        }
    </div>
      
    )
   }
   
  export default StarshipList