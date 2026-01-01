import React from "react";

const ticketTopics = [
    {
        title: "Account Opening",
        icon: "fa-plus-circle",
        links: [
            "Online Account Opening",
            "Offline Account Opening",
            "Company, Partnership and HUF Account Opening",
            "NRI Account Opening",
            "Charges at Zerodha",
            "Zerodha IDFC FIRST Bank 3-in-1 Account",
            "Getting Started",
        ],
    },
    {
        title: "Your Zerodha Account",
        icon: "fa-user-o",
        links: [
            "Login Credentials",
            "Account Modification and Segment Addition",
            "DP ID and bank details",
            "Your Profile",
            "Transfer and conversion of shares",
        ],
    },
    {
        title: "Trading and Platforms", 
        icon: "fa-bar-chart",
        links: [
            "Margin/leverage, Product and Order types",
            "Kite Web and Mobile",
            "Trading FAQs",
            "Corporate Actions",
            "Sentinel",
            "Kite API",
            "Pi and other platforms",
            "Stockreports+",
            "GTT",
        ],
    },
    {
        title: "Funds",
        icon: "fa-credit-card",
        links: [
            "Adding Funds",
            "Fund Withdrawal",
            "eMandates",
            "Adding Bank Accounts",
        ],
    },
    {
        title: "Console",
        icon: "fa-circle-o-notch",
        links: [
            "Reports",
            "Ledger",
            "Portfolio",
            "60 Day Challenge",
            "IPO",
            "Referral Program",
        ],
    },
    {
        title: "Coin",
        icon: "fa-circle-o",
        links: [
            "Understanding Mutual Funds",
            "About Coin",
            "Buying and Selling through Coin",
            "Starting an SIP",
            "Managing your Portfolio",
            "Coin App",
            "Moving to Coin",
            "Government Securities",
        ],
    },
];

function CreateTicket() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <h1 className="fs-2 mb-4">To create a ticket, select a relevant topic</h1>

                {ticketTopics.map((topic, index) => (
                <div key={index} className="col-lg-4 col-md-6 p-5 mt-2 mb-2">
                    <h4 className="fs-5">
                        <i className={`fa ${topic.icon}`} aria-hidden="true"></i> {topic.title}
                    </h4>
                    
                    <div className="d-flex flex-column mt-3">
                        {topic.links.map((link, linkIndex) => (
                            <a key={linkIndex} href="" style={{ 
                                    textDecoration: "none", 
                                    lineHeight: "2.5",
                                    fontSize: "0.95rem"
                                }}
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default CreateTicket;