import { BrowserRouter, Route, Routes } from "react-router-dom"
import Movie from "../components/MovieList.jsx";
import TV from "../components/TVprogram.jsx";
import Person from "../components/Person.jsx";
import Header from "../components/Header.jsx";
import Home from "../components/Home.jsx";
const RootRoute = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movie' element={<Movie/>} />
                <Route path='/tv' element={<TV/>} />
                <Route path='/person' element={<Person/>} />
            </Routes>
        </BrowserRouter>
    )
}


export default RootRoute;