// src/App.js
import React, { useState } from 'react';
import Leaderboard from './Leaderboard';
import AddScorePopup from './AddScorePopup';
import Footer from './AutoScrollingFooter';
import { IoFlagSharp } from "react-icons/io5";
import './App.css';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>K1-Speed<IoFlagSharp /></h1>
      </header>
      <Leaderboard />
      <button onClick={togglePopup}>Add Score</button>
      {showPopup && <AddScorePopup closePopup={togglePopup} />}
      <Footer />
    </div>
  );
};

export default App;
