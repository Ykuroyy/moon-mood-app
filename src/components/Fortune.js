import React from 'react';
import './Fortune.css';

const Fortune = ({ fortune }) => {
  return (
    <div className="fortune-container">
      <div className="fortune-mood">
        <h3>今日のムード</h3>
        <p className="mood-text">{fortune.mood}</p>
      </div>
      
      <div className="fortune-message">
        <p>{fortune.message}</p>
      </div>
      
      <div className="fortune-categories">
        <div className="category love">
          <h4>💕 恋愛運</h4>
          <p>{fortune.love}</p>
        </div>
        
        <div className="category study">
          <h4>📚 勉強運</h4>
          <p>{fortune.study}</p>
        </div>
      </div>
      
      <div className="lucky-items">
        <h4>✨ 今日のラッキーアイテム</h4>
        <div className="lucky-grid">
          <div className="lucky-item">
            <span className="lucky-label">カラー</span>
            <span className="lucky-value">{fortune.lucky.color}</span>
          </div>
          <div className="lucky-item">
            <span className="lucky-label">アイテム</span>
            <span className="lucky-value">{fortune.lucky.item}</span>
          </div>
          <div className="lucky-item">
            <span className="lucky-label">アクション</span>
            <span className="lucky-value">{fortune.lucky.action}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fortune;