
import React from 'react';
import { useSelector } from 'react-redux';
import { FaUser, FaClock } from 'react-icons/fa';
import { GiDiamondTrophy } from "react-icons/gi";

const Leaderboard = () => {
  const scores = useSelector((state) => state.leaderboard.scores);

  return (
    <div className="leaderboard">
      <h2><GiDiamondTrophy />FASTEST OF TODAY<GiDiamondTrophy /></h2>
      <table>
        <thead>
          <tr>
            <th><FaUser /> NAME</th>
            <th><FaClock /> TIME</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>{score.username}</td>
              <td>{score.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;


