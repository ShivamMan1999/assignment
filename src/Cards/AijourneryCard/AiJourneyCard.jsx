import React from "react";
import "./AiJourcard.css"; // link to the CSS below
// import aiJourneyIcon from "./ai-journey-icon.png"; // Replace with actual path or use an <img src="..."/>

const AiJourneyCard = () => {
  return (
    <div className="card-container">
      <div className="feature-card">
        {/* <div className="card-icon" style="background-color: #F97316;">
          🧠
        </div> */}
        <h4 className="card-title">Brain Integration</h4>
        <p className="card-description">
          Explore real-time AI-driven decisions with precision.
        </p>
      </div>

      <div className="feature-card">
        {/* <div className="card-icon" style="background-color: #7C3AED;">
          🤖
        </div> */}
        <h4 className="card-title">AI Journey</h4>
        <p className="card-description">
          Boost your journey productivity with AI upgrade
        </p>
      </div>
    </div>
  );
};

export default AiJourneyCard;
