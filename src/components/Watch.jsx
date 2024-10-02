import React, { useState, useEffect } from 'react';
import TimeDisplay from './TimeDisplay';
import LapList from './LapList';
import '../styles/stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0); // Время в миллисекундах
  const [isRunning, setIsRunning] = useState(false); // Запущен ли секундомер
  const [laps, setLaps] = useState([]); // Массив кругов

  useEffect(() => {
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => {
        setTime(prevTime => prevTime + 10); // Обновляем каждые 10 мс
      }, 10);
    }
    return () => clearInterval(timerId); // Очищаем таймер при остановке
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    if (isRunning) {
      setLaps([...laps, time]);
    }
  };

  return (
    <div className="stopwatch-container">
      <TimeDisplay time={time} />
      <div className="buttons">
        <button onClick={handleStartStop} className="button">
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={handleReset} className="button">Reset</button>
        <button onClick={handleLap} className="button" disabled={!isRunning}>
          Lap
        </button>
      </div>
      <LapList laps={laps} />
    </div>
  );
};

export default Stopwatch;
