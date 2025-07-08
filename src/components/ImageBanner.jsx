import React from 'react';
import backgroundImage from '../assets/Background.png';  // chemin relatif depuis components

function ImageBanner() {
  return (
    <div className="image-banner">
      <img src={backgroundImage} alt="background" />
    </div>
  );
}

export default ImageBanner;

