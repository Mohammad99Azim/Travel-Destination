import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer'

const data = require('../../data/db.json')

function Home(prop) { 
    return (
        <>  
    <Header/>
    {

data.map(elemnt=>{
    return(
        <Tours name = {elemnt.name}  image = {elemnt.image}/>
    )
})
        
    }
    
    <Footer/>
        </>
    );
}

export default Home;