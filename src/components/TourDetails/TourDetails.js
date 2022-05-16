// import { Text } from "react-native";

import { useState } from 'react';
import Footer from '../footer/Footer'
import Navbar from '../Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp , faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'
import './TourDetails.css'


import { useParams } from "react-router-dom";

const data = require('../../data/db.json');

export default function TourDetails() {

    const [isShown, showMore] = useState(false);

    function showMoreText(){
       showMore(!isShown);
    }

    let { id} = useParams();
    let result = data.filter(data => data.id === id)
    return(
    
        <>
            <Navbar/>
                            {/* <Tour name = {result[0].name}  image = {result[0].image} info = {result[0].info}/> */}
            <h1>{result[0].name}</h1>
                <div className='cityCard'>
                    <img src= {result[0].image} alt={result[0].name}></img>
                    <div className='infoText'>

                    {isShown ? <p>{result[0].info}</p> : <p>{result[0].info.substring(0,250)}...</p> }
                    {/* <Text numberOfLines= {isShown ? 0 : 3 } ellipsizeMode="middle" ><p>{result[0].info}</p></Text> */}
                       
                    <button onClick={showMoreText}>
                         {isShown ? <span>see less <FontAwesomeIcon icon={faAngleDoubleUp} /></span> : <span>see more <FontAwesomeIcon icon={faAngleDoubleDown} /></span> }
                    </button>
                    </div>
                </div>
                
            
            <Footer/>
        </>
    );
}