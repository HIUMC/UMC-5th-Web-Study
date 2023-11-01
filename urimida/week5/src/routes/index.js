import { BrowserRouter, Route, Routes } from "react-router-dom"
import Movie from "../components/MovieList.jsx";
import Header from "../components/Header.jsx";
import Home from "../components/Home.jsx";
import TVprogram from "../components/TVprogram.jsx";
import Person from "../components/Person.jsx";

const RootRoute = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movie' element={<Movie/>} />
                <Route path='/tv' element={<TVprogram/>} />
                <Route path='/person' element={<Person/>} />

            </Routes>
        </BrowserRouter>
    )
}

export default RootRoute;