import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 text-center mt-4 mt-md-5 p-3">
          
          <h1 className="fw-semibold fs-2 fs-md-1">
            Technology
          </h1>

          <h3 className="text-muted mt-3 fs-6 fs-md-4">
            Sleek, modern and intuitive trading platforms
          </h3>

          <p className="mt-3 mb-4 mb-md-5 fs-6">
            Check out our{" "}
            <a href="#" className="text-decoration-none">
              investment offerings{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Hero;