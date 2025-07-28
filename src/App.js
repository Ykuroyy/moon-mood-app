import React, { useState, useEffect } from 'react';
import './App.css';
import MoonDisplay from './components/MoonDisplay';
import Fortune from './components/Fortune';
import { getMoonPhase } from './utils/moonPhase';
import { fortunes } from './data/fortunes';

function App() {
  const [currentDate] = useState(new Date());
  const [moonPhase, setMoonPhase] = useState(null);
  const [fortune, setFortune] = useState(null);
  const [showFortune, setShowFortune] = useState(false);

  useEffect(() => {
    const phase = getMoonPhase(currentDate);
    setMoonPhase(phase);
    setFortune(fortunes[phase.phase]);
  }, [currentDate]);

  const formatDate = (date) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    };
    return date.toLocaleDateString('ja-JP', options);
  };

  const handleMoonClick = () => {
    setShowFortune(true);
  };

  if (!moonPhase || !fortune) {
    return <div className="loading">読み込み中...</div>;
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">
          <span className="title-moon">🌙</span>
          <span>Moon Mood</span>
          <span className="title-star">✨</span>
        </h1>
        <p className="app-subtitle">月の満ち欠けで占う、あなたの今日</p>
      </header>

      {!showFortune ? (
        <div className="start-screen">
          <div className="date-display">
            <p>{formatDate(currentDate)}</p>
          </div>
          <div className="moon-button" onClick={handleMoonClick}>
            <div className="moon-icon">{moonPhase.emoji}</div>
            <p className="tap-text">月をタップして占いを見る</p>
          </div>
        </div>
      ) : (
        <>
          <div className="date-display">
            <p>{formatDate(currentDate)}</p>
          </div>
          <MoonDisplay moonPhase={moonPhase} />
          <Fortune fortune={fortune} />
        </>
      )}

      <footer className="app-footer">
        <p>月のリズムに合わせて、素敵な一日を過ごしてね 💫</p>
      </footer>
    </div>
  );
}

export default App;