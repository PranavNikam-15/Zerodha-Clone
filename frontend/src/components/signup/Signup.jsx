import React from "react";
import "./signup.css";

function Signup() {
  return (
    <div className="container mt-5">
      <div className="row text-center p-5">
        <h2>Open a free demat and trading account online</h2>
        <p className="mt-3 fs-5 text-muted">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      <div className="row mt-5 mb-5">
        <div className="col-md-6 mb-4">
          <img
            src="media/images/signup.png"
            alt="Signup"
            className="img-fluid"
            style={{ maxWidth: "85%" }}
          />
        </div>

        <div className="col-md-6">
          <h3>Signup now</h3>
          <p className="text-muted">Or track your existing application</p>

          <form>
            <div className="mb-3 col-md-8">
              <div className="d-flex align-items-center phone-input">
                <img
                  src="media/images/india-flag.svg"
                  alt="India"
                  className="ms-2"
                  style={{ width: "24px" }}
                />
                <span className="mx-2">+91</span>

                <input
                  type="tel"
                  className="form-control shadow-none"
                  placeholder="Enter your mobile number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
              </div>
            </div>
            <button
              className="btn btn-primary fs-5 px-4 py-2 mt-3"
              style={{ backgroundColor: "#387ed1", border: "none" }}
            >
              Get OTP
            </button>
          </form>
          <p className="mt-4 text-muted ">By proceeding, you agree to the Zerodha terms & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;