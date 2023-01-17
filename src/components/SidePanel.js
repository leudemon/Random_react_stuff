import React from "react";


const SidePanel = () => {
    return (

        <div className="side-body">
            <div className="zoom">
                <div className="body-header"><h1>Software developer</h1></div>
                <div className="body-items">
                    <ul>
                        <li></li>
                    </ul>
                    <div className="profile-container">
                        <div className="profile"><img src={require("../assets/aluLogo.png")} alt="profile" /></div>                        
                        <div className="username">
                            <h1 >Avit Brian</h1>
                        </div>
                    </div>
  
                
                </div>

            </div>

        </div>
    );
}

export default SidePanel;