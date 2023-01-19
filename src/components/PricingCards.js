import "./PricingCardsStyles.css";
import React from 'react'
import {Link} from "react-router-dom";

const PricingCards = () => {
  return (
    <div className="pricing">
    <div className="card-container">
        <div className="card">
        <h3>- Basic -</h3>
        <span className="bar"></span>
        <p>- 3 Days -</p>
        <p>- 3 Pages -</p>
        <p> - Featured -</p>
        <p>- Responsive Design -</p>
        <Link to ="/contact" className="btn">PURCHASE NOW</Link>
     </div>

     <div className="card">
        <h3>- Premium -</h3>
        <span className="bar"></span>
        <p>- 6 Days -</p>
        <p>- 6 Pages -</p>
        <p> - Featured -</p>
        <p>- Responsive Design -</p>
        <Link to ="/contact" className="btn">PURCHASE NOW</Link>
     </div>

     <div className="card">
        <h3>- Business -</h3>
        <span className="bar"></span>
        <p>- 4 Days -</p>
        <p>- 7 Pages -</p>
        <p> - Featured -</p>
        <p>- Responsive Design -</p>
        <Link to ="/contact" className="btn">PURCHASE NOW</Link>
     </div>

    </div>

    </div>
  )
}

export default PricingCards