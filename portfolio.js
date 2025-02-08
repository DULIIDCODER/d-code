document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

document.addEventListener('DOMContentLoaded', function() {
    // select all timeline stages
    const stages = document.querySelectorAll('.timeline-stage');

    //function to animate timeline stages on scroll
    function animateTimeline() {
        stages.forEach(stage => {
            const stagePosition = stage.getBoundingClientRect().top;
            const windowHeight = window.getBoundingClientRect().top;
            if (stagePosition < windowHeight - 100) {
                stage.style.opacity = '1';
                stage.style.transform = 'translateY(0)';
            }
        })
    }
}) 

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'c'){
        const hiddenMessage = document.createElement('div');
        hiddenMessage.textContent = '🎉 Congratulations! You found a secret!';
        hiddenMessage.style.position = 'fixed';
        hiddenMessage.style.top = '50%';
        hiddenMessage.style.left = '50%';
        hiddenMessage.style.transform = 'translate(-50%, -50%)'; 
        hiddenMessage.style.padding = '20px'; 
        hiddenMessage.style.backgroundColor = 'black';
        hiddenMessage.style.color = 'white';
        hiddenMessage.style.borderRadius = '10px';
        hiddenMessage.style.fontSize = '1.5em';
        document.body.appendChild(hiddenMessage)
    }
   
});


import React, { useState, useEffect } from "react";

const SplashScreen = ({ duration = 3000, onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onFinish]);

  if (!isVisible) return null;

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1>Welcome to my Portfolio</h1>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default SplashScreen;

import React, { useState } from "react";
import SplashScreen from "./SplashScreen";
import "./SplashScreen.css";

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleSplashFinish = () => {
    setIsSplashVisible(false);
  };

  return (
    <div className="App">
      {isSplashVisible ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <div>
          <h1>Welcome to My Portfolio</h1>
          {/* Add the rest of your app here */}
        </div>
      )}
    </div>
  );
};

