import React, { useState, useEffect } from 'react';

function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
		console.log('Enter useEffect function');
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Очистка таймера при размонтировании компонента
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h1>Текущее время:</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default Timer;