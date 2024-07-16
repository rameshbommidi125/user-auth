import React from 'react';
import CardItem from '../CardItem';
import './index.css';  // Assuming you have styles for Card in Card.css

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description: 'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description: 'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description: 'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description: 'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
];

const Cards = () => (
  <div className="container">
    <div className="technologies-main-heading-container">
      <h1 className="main-heading">Learn 4.0 Technologies</h1>
      <p className="main-paragraph">
        Get trained by alumni of IIts and top companies like
        amazon, microsoft, Intel Nvidia, Qualcom, etc. Learn directly from
        professionals involved in product Development.
      </p>
    </div>
    <ul className="cards-container">
      {cardsList.map(eachObject => (
        <CardItem eachObject={eachObject} key={eachObject.id} />
      ))}
    </ul>
  </div>
);

export default Cards;
