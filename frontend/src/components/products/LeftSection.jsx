import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
        <div className="row align-items-center">

            <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                <img
                    src={imageURL}
                    alt={productName}
                    className="img-fluid"
                    style={{ maxWidth: "90%" }}
                />
            </div>

            <div className="col-12 col-md-6 p-3 p-md-5">
                <h1 className="fs-3">{productName}</h1>
                <p className="text-muted">{productDesription}</p>

                <div className="d-flex flex-wrap gap-4 mt-3">
                    <a href={tryDemo} className="text-decoration-none">
                        Try Demo <i className="fa fa-long-arrow-right"></i>
                    </a>
                    <a href={learnMore} className="text-decoration-none">
                        Learn More <i className="fa fa-long-arrow-right"></i>
                    </a>
                </div>

                <div className="d-flex flex-wrap gap-3 mt-4">
                    <a href={googlePlay}>
                        <img
                            src="media/images/googlePlayBadge.svg"
                            alt="Google Play"
                            height="40"
                        />
                    </a>
                    <a href={appStore}>
                        <img
                            src="media/images/appstoreBadge.svg"
                            alt="App Store"
                            height="40"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LeftSection;