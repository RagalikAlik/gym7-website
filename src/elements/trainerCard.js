import React from 'react';
import '../style/App.css'

export const TrainerCard = ({ name, photo, description }) => {
  return (
    <div className="trainer-card">
      <img src={photo} alt={name} className="trainer-photo" />
      <h2 className="trainer-name">{name}</h2>
      <p className="trainer-description">{description}</p>
    </div>
  );
};

export default TrainerCard;