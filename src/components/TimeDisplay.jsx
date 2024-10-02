import React from 'react';
import '../styles/stopwatch.css';  // Импортируем стили

const TimeDisplay = ({ time }) => {
  const formatTime = (time) => {
    const milliseconds = `00${time % 1000}`.slice(-3);
    const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
    const minutes = `0${Math.floor(time / 60000)}`.slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="time-display">
      {formatTime(time)}
    </div>
  );
};

export default TimeDisplay;
