import React from 'react';
import '../styles/stopwatch.css';  // Импортируем стили

const LapList = ({ laps }) => {
  return (
    <div className="lap-list">
      {laps.map((lap, index) => (
        <div key={index} className="lap-item">
          Lap {index + 1}: {`00${Math.floor(lap / 60000)}`.slice(-2)}:
          {`0${Math.floor((lap / 1000) % 60)}`.slice(-2)}:
          {`00${lap % 1000}`.slice(-3)}
        </div>
      ))}
    </div>
  );
};

export default LapList;
