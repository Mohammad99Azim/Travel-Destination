import { Link } from 'react-router-dom';
import './Footer.css'

function Footer(prop) {
    return (
        <>    
        <footer >
            <div className="footerLinks">
                <Link to="#">FaceBook</Link>
                <Link to="#">YouTube</Link>
                <Link to="#">LinkedIn</Link>
                <Link to="#">Instagram</Link>
                <Link to="#">Github</Link>
            </div>
            <div className="copyRight">
            &copy;	Copyright 2010 - 2022 Mohammad-Azim
            </div>
        </footer>
    </>
    );
}

export default Footer;