import React from 'react';

function Hero() {
  return (
    <div className="container mt-5">
        <div className="row py-4 py-md-5 border-bottom text-center">
            <h1 className="fs-3 fs-md-2">Pricing</h1>
            <h3 className="text-muted mt-3 fs-6 fs-md-5">
                Free equity investments and flat ₹20 intraday and F&O trades
            </h3>
        </div>

        <div className="row py-4 py-md-5 text-center">
            <div className="col-12 col-md-4 p-3">
                <img
                    src="media/images/pricingEquity.svg"
                    alt="Free equity delivery"
                    className="img-fluid mb-3"
                    style={{ maxWidth: "180px" }}
                />
                <h1 className="fs-4">Free equity delivery</h1>
                <p className="text-muted">
                    All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
                </p>
            </div>
            <div className="col-12 col-md-4 p-3">
                <img
                    src="media/images/intradayTrades.svg"
                    alt="Intraday trades"
                    className="img-fluid mb-3"
                    style={{ maxWidth: "180px" }}
                />
                <h1 className="fs-4">Intraday and F&O trades</h1>
                <p className="text-muted">
                    Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday
                    trades across equity, currency, and commodity.
                </p>
            </div>
            <div className="col-12 col-md-4 p-3">
                <img
                    src="media/images/pricingEquity.svg"
                    alt="Free direct MF"
                    className="img-fluid mb-3"
                    style={{ maxWidth: "180px" }}
                />
                <h1 className="fs-4">Free direct MF</h1>
                <p className="text-muted">
                    All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
                </p>
            </div>
        </div>
        <hr />
    </div>
  );
}

export default Hero;