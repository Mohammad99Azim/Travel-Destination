import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import { Routes, Route } from "react-router-dom";




function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/city/:id' element={<TourDetails/>} />
        </Routes>

        </>
    );
}

export default App;