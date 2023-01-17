import React from "react";

const Cardme = () => {
    return(
        <>
            <div className="card-container">
                <header>
                    <div className="profile-picture"><img alt="profile" src={require("../assets/pp.jpg")} /></div>
                </header>
                <main>
                    <div className="info-container">
                        <div className='info'>
                            <h1>Avit Brian</h1>
                            <h2>Software Developer</h2>
                            <h3>Kigali, Rwanda</h3>
                        </div>
                        <div className='links'>
                            <button>Email</button>
                            <button>LinkedIn</button>
                        </div>
                        <article className='about'>
                            <h2>About</h2>
                            <p>Motivated to learn, grow and excel. I have over three years of
                                experience working with different programming languages.</p>
                        </article>
                        <article className='interests'>
                            <h2>Interests</h2>
                            <p>
                                I am very passionate about computers / technology with a mission to sustain and
                                improve Africa's information and technology infrastructure by
                                developing digital literacy and contributing to organisations with a
                                similar or related motive.
                            </p>
                        </article>
                    </div>
                </main>
                <footer>
                    <div>icon1</div>
                    <div>icon2</div>
                    <div>icon3</div>
                    <div>icon4</div>
                </footer>
                    

               
            </div>
        </>
    );
}

export default Cardme;