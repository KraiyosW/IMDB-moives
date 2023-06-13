import React from "react"; 
import { Link } from "react-router-dom";
const HomePage = () =>{

    return(
        <div className="App">
            <nav className="navigation-bar">
                <img className="logo-image" src="/movies.png"/>
                <div className="manu">
                    <button className="button-movies">MOVIES</button>
                    <button className="button-tv">TV SHOWS</button>
                </div>

            </nav>
        </div>

    );
}

export default HomePage