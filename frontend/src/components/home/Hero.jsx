import React from 'react';

function Home() {
    return ( 
        <>
            <div className="container p-3 p-md-5">
                <div className="row text-center">
                    <img 
                        src="media/images/homeHero.png" 
                        className="img-fluid mb-4 mb-md-5"
                        alt="Home Hero"
                    />
                    <h1 className="mt-3 mt-md-5"> Invest in everything </h1>

                    <p className="mb-4">
                        Online platform to invest in stocks, derivatives, mutual funds & more
                    </p>

                    <button
                        className="p-2 text-white w-100 w-md-auto"
                        style={{
                            maxWidth: "260px",
                            margin: "0 auto",
                            backgroundColor: "#387ed1",
                            fontSize: "1.4rem",
                            border: "none",
                            borderRadius: "3px",
                            fontWeight: "600"
                        }}
                    >
                        Sign up for free
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;