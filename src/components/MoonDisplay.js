import React from 'react';
import './MoonDisplay.css';

const MoonDisplay = ({ moonPhase }) => {
  return (
    <div className="moon-display">
      <div className="moon-container">
        <div className="moon-emoji">{moonPhase.emoji}</div>
        <div className="stars">
          <span className="star star-1">✨</span>
          <span className="star star-2">⭐</span>
          <span className="star star-3">✨</span>
          <span className="star star-4">⭐</span>
        </div>
      </div>
      <h2 className="moon-name">{moonPhase.name}</h2>
      <div className="moon-phase-indicator">
        <div className="phase-bar">
          <div 
            className="phase-fill" 
            style={{ width: `${moonPhase.percentage}%` }}
          ></div>
        </div>
        <p className="phase-text">月の満ち欠け: {moonPhase.percentage}%</p>
      </div>
    </div>
  );
};

export default MoonDisplay;