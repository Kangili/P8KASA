import React from 'react';
import defaultBanner from '../assets/about-banner.png'; // image locale dans src/assets
import "./ImageBanner.css";

function ImageBanner(props) {
  // Si props.imageUrl est fourni, on l'utilise. Sinon, on utilise l'image locale.
  const imageUrl = props.imageUrl || defaultBanner;

  return (
    <div className="image-banner">
      <img src={imageUrl} alt="background" />
    </div>
  );
}

export default ImageBanner;



