import React from 'react';
import { useEffect } from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Cardme from './components/Cardme';
import './style.css'


//ccf967e2
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=ccf967e2"


const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json()
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies("Spiderman")
    }, []);
    return (
        <>
            <Navbar />
            <Main />
            <Sidebar />
            <Cardme />
        </>
       
    );
}

export default App;