import React from 'react';
import "./loja.css"
import image1 from '../../img/img1.jpg';

function Loja() {
  const imgList = [image1, image1, image1, image1, image1, image1, image1, image1, image1, image1, image1, image1, image1, image1, image1, image1];

  return (
    <div className="store-container">
      {imgList.map((img_clothes, index) => (
        <div className='description-clothes'>
        <div className='img-clothe-container' key={index}>
          <img src={img_clothes} alt={`clothes ${index}`} className='img-clothe' />
          <p>$99.99</p>
          <p>CLOTHE'S NAME</p>
          <hr className='line-clothe-description'/>
        </div>
        </div>
      ))}
    </div>
  );
}

export default Loja;


