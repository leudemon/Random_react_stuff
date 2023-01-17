import React from "react";
import Sidebar from "./Sidebar";
import SidePanel from "./SidePanel";


const Main = () => {
    return (
        <>

            <div className="container">
                <div className="side-bar1"><Sidebar /></div>

                <div className="main-body">
                    <div>
                        <div className="zoom">
                            <div className="body-header"><h1>Paul RUVUGABIGUI</h1></div>
                            <div className="body-items">
                                <div>
                                    Botanist
                                </div>

                            </div>
                            <div className="hidden-logo">
                                <img alt='hidden logo' src={require('../assets/protest.png')} />
                            </div>

                        </div>
                        <div>
                            content
                        </div>

                    </div>



                </div>
                <div className="side-bar2"><SidePanel /></div>

            </div>
        </>
        
    );
}

export default Main;