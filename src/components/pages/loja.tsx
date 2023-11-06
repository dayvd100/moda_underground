import React from "react";
import "../../styles/loja.css";
import image1 from "../../img/img1.jpg";

const Loja = () => {
  const imgList = [
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
  ];

  return (
    <div className="store-container">
      {imgList.map((img_clothes, index) => (
        <div className="description-clothes">
          <div className="img-clothe-container" key={index}>
            <img
              src={img_clothes}
              alt={`clothes ${index}`}
              className="img-clothe"
            />
            <hr className="line-clothe-description" />
            <p>CLOTHE'S NAME</p>
            <p>PRICE</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Loja;
