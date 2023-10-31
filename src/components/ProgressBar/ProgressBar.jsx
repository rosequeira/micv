import React, { useState, useEffect } from 'react';
import { Events } from 'react-scroll';
import './ProgressBar.scss';

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const distanceScrolled = scrollTop + windowHeight;
    const totalScrollableDistance = documentHeight - windowHeight;
    const percentage = (distanceScrolled / totalScrollableDistance) * 100;

    setScrollPercentage(percentage);
  };

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    window.addEventListener('scroll', handleScroll);

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="progress-bar"
      style={{
        background: `linear-gradient(to right, #591180 ${scrollPercentage - 10}%, #0b5371 ${scrollPercentage}%)`,
      }}
    ></div>
  );
};

export default ProgressBar;
