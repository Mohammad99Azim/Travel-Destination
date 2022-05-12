import './Tours.css'

function Tours(prop) {
    
    return (
        <>
            <div className="tour">
           <h2>
           {prop.name}
           </h2> 
           <img src={prop.image} alt="" />
            </div>
        </>
    );
    
}

export default Tours;