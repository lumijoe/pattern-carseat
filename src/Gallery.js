import React from 'react';
import './Gallery.css';

function Gallery() {
  // 画像のURLを配列で定義
  const imageUrls = [
    '/gallery/img_car01.jpg',
    '/gallery/img_car02.jpg',
    '/gallery/img_car03.jpg',
    '/gallery/img_car04.jpg',
    '/gallery/img_car05.jpg',
  ];

  return (
    <div className="gallery">
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className="gallery-item">
          <img src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
