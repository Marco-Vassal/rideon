import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ onCountdownEnd, resetTimer }) => {
    const [timeInSeconds, setTimeInSeconds] = useState(8 * 60 * 60); // 8 heures en secondes

  useEffect(() => {
    const intervalId = setInterval(() => {
        setTimeInSeconds((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(intervalId);
            onCountdownEnd(); // Appeler onCountdownEnd seulement lorsque le temps atteint 0
            return 0;
          }
        });
      }, 1000);

    // Nettoyez l'intervalle lorsqu'un composant est démonté
    return () => clearInterval(intervalId);
  }, [timeInSeconds, onCountdownEnd]);

  // Réinitialiser le compte à rebours lorsque resetTimer est appelé
  useEffect(() => {
    if (resetTimer) {
      setTimeInSeconds(8 *60 *60);
    }
  }, [resetTimer]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}min ${String(seconds).padStart(2, '0')}s`;
  };

  return (
    <p>{timeInSeconds !== null && formatTime(timeInSeconds)}</p>
  );
};

export default CountdownTimer;
