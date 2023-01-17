import React from "react";
import Searchbar from "./Searchbar";

const Navbar = ()=>{
    return ( 
        <nav>
            <div className="LOGO">
                <div id="logo" className="logo">
                    <img  src={require("../assets/protest.png")} alt="logo" />
                </div>
                <div id="logo" className="logo-name">
                    <h1 id="reactFacts" className="react-facts" >Tech</h1>
                </div>
            </div>
            <div className="SEARCH-CONTAINER">
                <Searchbar/>
            </div>
            <div className="NAVBAR-ITEMS">
                <ul>
                    <li>
                        <h2 id="reactCourses" className="react-courses">Portfolio <span>-</span></h2>
                    </li>
                    <li>
                        <select title="Select_project" id="selectNav" className="select-nav">
                            <option>Project 1</option>
                            <option>Project 2</option>
                            <option>Project 3</option>
                            <option>Project 4</option>
                            <option>Project 5</option>
                        </select>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;