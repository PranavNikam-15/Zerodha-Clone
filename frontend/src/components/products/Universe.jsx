import React from "react";

function Universe() {
    const partners = [
        {
            src: "media/images/zerodhaFundhouse.png",
            text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
            style: { width: "60%" },
        },
        {
            src: "media/images/sensibullLogo.svg",
            text: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
            style: { width: "65%" },
        },
        {
            src: "media/images/tijoriLogo.svg",
            text: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
            style: { width: "50%" },
        },
        {
            src: "media/images/streakLogo.png",
            text: "Systematic trading platform that allows you to create and backtest strategies without coding.",
            style: { width: "55%" },
        },
        {
            src: "media/images/smallcaseLogo.png",
            text: "Thematic investing platform that helps you invest in diversified baskets of stocks and ETFs.",
            style: { width: "60%" },
        },
        {
            src: "media/images/dittoLogo.png",
            text: "Personalized advice on life and health insurance. No spam and no mis-selling.",
            style: { width: "40%" },
        },
    ];

    return (
        <div className="container mt-5">
            <div className="row text-center">
                <div className="col-12">
                    <h1>The Zerodha Universe</h1>
                    <p className="mb-5 text-muted">
                        Extend your trading and investment experience even further with our
                        partner platforms
                    </p>
                </div>

                {partners.map((partner, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4 p-3 mt-4">
                        <img src={partner.src} alt="Partner Logo" className="img-fluid" style={partner.style} />
                        <p className="text-muted mt-3 px-2">
                            {partner.text}
                        </p>
                    </div>
                ))}

                <div className="col-12 mt-5">
                    <button className="btn btn-primary fs-5 mb-5 px-4 py-2" style={{ backgroundColor: "#387ed1" }} >
                        Signup Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Universe;