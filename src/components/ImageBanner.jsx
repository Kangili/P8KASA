import React from 'react';
import backgroundImage from '../assets/Background.png';  // CHEMIN RELATIF
import "./ImageBanner.css"

function ImageBanner() {
  return (
    <div className="image-banner">
      <img src={backgroundImage} alt="background" />
    </div>
  );
}

export default ImageBanner;


