import './Tour.css'
export default function Tour(prop) {
    
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
