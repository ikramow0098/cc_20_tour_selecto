import { useState } from 'react';

export default function TourCard({ id, name, info, image, price, onRemove }) {
  const [readMore, setReadMore] = useState(false);

  // Manual images for known destinations
  const imageMap = {
    'new york city tour':
      'https://upload.wikimedia.org/wikipedia/commons/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg',
    'paris adventure':
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg',
    'tokyo discovery':
      'https://upload.wikimedia.org/wikipedia/commons/c/c5/Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg',
  };

  const fallbackImage =
    'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';

  const normalized = name.toLowerCase();
  const validImage = imageMap[normalized] || fallbackImage;

  return (
    <article className="tour-card">
      <img src={validImage} alt={name} className="tour-img" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p className="tour-description">
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button
            className="read-more"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
}
