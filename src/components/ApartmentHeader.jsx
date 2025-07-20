import React from 'react';
import './ApartmentHeader.css';

export default function ApartmentHeader({flat}) {
  const {name} = flat.host;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="apartment_header">
      <div className="apartment_title">
        <h1 className="apartment_title_red">{flat.title}</h1>
        <h2 className="apartment_location_black">{flat.location}</h2>
        <div className="apartment_tags">
          {flat.tags.map((tag, index) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="apartment_owner">
        <div className="apartment_owner_details">
          <h3 className="apartment_owner_name">
            {firstName}
            <br />
            <span className="owner_lastname">{lastName}</span>
          </h3>
          <div className="apartment_owner_badge">
            <img src={flat.host.picture} alt = ""/>
          </div>
        </div>
        <div className="apartment_owner_stars">
           {[1, 2, 3, 4, 5].map((number) => (
           <span key = {number}className={flat.rating >=  number ? "on" : ""}>
            ★
            </span>
           ))}
        </div>
      </div>
    </div>
  );
}
