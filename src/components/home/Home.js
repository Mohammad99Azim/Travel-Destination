import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Home.css'


const data = require('../../data/db.json')

function Home(prop) { 
    return (
        <>
        
            <Navbar/>
            <div className="container">
        <Header/>
        {

    data.map(elemnt=>{
        return(
            <Tours name = {elemnt.name}  image = {elemnt.image}/>
        )
    })
            
        }

    </div>
    <Footer/>
        </>
    );
}

export default Home;