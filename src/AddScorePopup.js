// src/components/AddScorePopup.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../src/store/LeaderBoardSlice';

const AddScorePopup = ({ closePopup }) => {
  const [username, setUsername] = useState('');
  const [time, setTime] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addScore({ username, time }));
    closePopup();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Add Score</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="MM:SS:MSS"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          <button type="submit">Add</button>
          <button type="button" onClick={closePopup}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddScorePopup;
