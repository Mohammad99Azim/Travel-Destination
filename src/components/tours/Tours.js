import Tour from './tour/Tour';
import { Link } from "react-router-dom";

const data = require('../../data/db.json');

function Tours(prop) {
    return (
        <>
            {/* <div className="tour">
           <h2>
           {prop.name}
           </h2> 
           <img src={prop.image} alt="" />
            </div> */}
    {
        data.map(elemnt=>{
            return(
                
                <Link  key = {elemnt.id} to={`/city/${elemnt.id}`}>
                <Tour name = {elemnt.name}  image = {elemnt.image}/>
                </Link>
                
                )
            })
    }
        </>
    );
    
}

export default Tours;