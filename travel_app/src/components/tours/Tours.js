function Tours(prop) {
    
    return (
        
            <div>
           <p>
           {prop.name}
           </p> 
           <img src={prop.image} alt="" />
            </div>
        
    );
    
}

export default Tours;