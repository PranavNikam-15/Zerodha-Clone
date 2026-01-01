import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        <div className="col-12 col-md-6 p-3 p-md-5 order-2 order-md-1">
          <h1 className="fs-3">{productName}</h1>
          <p className="text-muted">{productDesription}</p>
          <a href={learnMore} className="text-decoration-none">
            Learn More <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>

        <div className="col-12 col-md-6 text-center order-1 order-md-2 mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
