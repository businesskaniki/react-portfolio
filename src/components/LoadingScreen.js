import React from 'react';
import Loading from '../assets/load.svg';
import '../styles/loadingScreen.scss';

function LoadingScreen() {
  return (
    <div className="loader animate">
      <img src={Loading} alt="Loading Screen" className="icon" />
      <p>Made with 💗</p>
    </div>
  );
}

export default LoadingScreen;
