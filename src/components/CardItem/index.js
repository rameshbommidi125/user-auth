import React from 'react';
import './index.css';

const CardItem = (props) => {
  const { eachObject } = props;
  const { title, description, imgUrl, className } = eachObject;
  
  return (
    <li className={`Cards ${className}`}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className="paragraph">{description}</p>
      </div>
      <img className="image" src={imgUrl} alt={title} />
    </li>
  );
};

export default CardItem;
