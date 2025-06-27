import React from 'react';
import './Banner.css';
import bannerImage from '../../assets/MaskGroup.png';

export default function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className="banner__img" />
      <h2 className="banner__text">Chez vous, partout et ailleurs</h2>
    </div>
  );
}
