import React, { useState } from 'react';
import defaultBanner from '../assets/about-banner.png'; // image locale dans src/assets
import "./ImageBanner.css";

function ImageBanner(props) {
  const pictures = props.pictures || [defaultBanner];

  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i) => {
    if (i === currentPicture) {
      return "show";
    }
    return "";
  };

  const mooveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  }

 const mooveToPrevious = () => {
  const newCurrentPicture = currentPicture - 1;
  if (newCurrentPicture < 0) {
    setCurrentPicture(pictures.length - 1);
    return; // On sort ici si on a remis à la fin
  }
  setCurrentPicture(newCurrentPicture); // Sinon on met à jour normalement
}

  const arePicturesAvailable = () => {
  return pictures && pictures.length > 0;
};

  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvailable()){
      return <img src="https://" className="show" alt =""/>;
    }
  return pictures.map((picture, i) => (
          <img key={i} src={picture} alt="" className={getClassName(i)} />
   ));
  };

return (
  <div className="image-banner">
    <div className="image-container">{getCarouselOrDefaultImage()}</div>
    {pictures.length > 1 && (
      <> 
        <button className="btn btn-previous" onClick={mooveToPrevious}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <span className="slide-counter">
          {currentPicture + 1} / {pictures.length}
        </span>
        <button className="btn btn-next" onClick={mooveToNext}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </>
    )}
  </div>
);
};

export default ImageBanner;




