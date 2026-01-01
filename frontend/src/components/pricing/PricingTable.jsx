import React, { useState } from 'react';

function PricingTable() {

    const PRICING_DATA = {
        equity: {
            columns: ['', "Equity delivery", "Equity intraday", "F&O - Futures", "F&O - Options"],
            rows: [
                ["Brokerage", "Zero Brokerage", "0.03% or ₹20/order", "0.03% or ₹20/order", "Flat ₹20/order"],
                ["STT/CTT", "0.1% on buy & sell", "0.025% on sell side", "0.02% on sell side", "0.125% on intrinsic..."],
                ["Transaction charges",	"NSE: 0.00297% BSE: 0.00375%", "NSE: 0.00297% BSE: 0.00375%", "NSE: 0.00173% BSE: 0", "NSE: 0.03503% (on premium) BSE: 0.0325% (on premium)"],
                ["GST",	"18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"],
                ["SEBI charges", "₹10 / crore",	"₹10 / crore",	"₹10 / crore",	"₹10 / crore"],
                ["Stamp charges", "0.015% or ₹1500 / crore on buy side", "0.003% or ₹300 / crore on buy side", "0.002% or   ₹200 / crore on buy side", "0.003% or ₹300 / crore on buy side"]

            ]
        },
        currency: {
            columns: ['', "Currency futures", "Currency options"],
            rows: [
                ["Brokerage", "0.03% or ₹20/order", "₹20/order"],
                ["STT/CTT", "No STT", "No STT"],
                ["Transaction charges", "NSE: 0.00035%  BSE: 0.00045%", "NSE: 0.0311% BSE: 0.001%"],
                ["GST", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"],
                ["SEBI charges", "₹10 / crore", "₹10 / crore"],
                ["Stamp charges", "0.0001% or ₹10 / crore on buy side", "0.0001% or ₹10 / crore on buy side"]
            ]
        },
        commodity: {
            columns: ['', "Commodity futures", "Commodity options"],
            rows: [
                ["Brokerage", "0.03% or ₹20/order", "₹20/order"],
                ["STT/CTT", "0.01% on sell side", "0.05% on sell side"],
                ["Transaction charges", "MCX: 0.0021% NSE: 0.0001%", "MCX: 0.0418% NSE: 0.001%"],
                ["GST", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"],
                ["SEBI charges", "Agri: ₹1/crore Non-agri: ₹10/crore", "₹10/crore"],
                ["Stamp charges", "0.002% or ₹200 / crore on buy side", "0.003% or ₹300 / crore on buy side"]
            ]
        }
    };

    const [activeTab, setActiveTab] = useState('equity');
    const activeData = PRICING_DATA[activeTab];

    return (
        <div className="container mt-5">
            <nav className="tabs">
                <button className={`fs-4 ${activeTab === 'equity' ? 'active-tab' : ''}`} 
                    onClick={()=> setActiveTab('equity')}>
                    Equity
                </button>
                <button className={`fs-4 ${activeTab === 'currency' ? 'active-tab' : ''}`}
                    onClick={()=> setActiveTab('currency')}>
                    Currency
                </button>
                <button className={`fs-4 ${activeTab === 'commodity' ? 'active-tab' : ''}`}
                    onClick={()=> setActiveTab('commodity')}>
                    Commodity
                </button>
            </nav>

            <div className="row mt-5">
                <table cellPadding="10" className="col-10 ms-2" style={{border : '1px solid grey'}}>
                    <thead>
                        <tr style={{borderBottom : '1px solid grey'}}>
                            {activeData.columns.map((col, index) => (
                                <td key={index}>{col}</td>
                            ))}
                        </tr>
                    </thead>
                    <tbody >
                        {activeData.rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className={`${rowIndex % 2 == 0 ? '' : 'grey-back'}`}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="p-3">{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="col-2"></div>
            </div>
            <div className="row mt-4 text-center">
                <p className="brokerage-link fs-4"> <a href="#">Calculate your costs upfront</a> using our brokerage calculator</p>
                
            </div>
        </div>
    );
}

export default PricingTable;