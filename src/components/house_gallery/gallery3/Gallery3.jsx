import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const Gallery3 = () => {
  const images = [
    {
      original: "img/house3.jpg",
    },
    {
      original:
        "https://www.home-designing.com/wp-content/uploads/2019/02/courtyard-design-2.jpg",
    },
    {
      original:
        "https://i.pinimg.com/originals/db/dc/6d/dbdc6d18a8883e415597e2cbb277b492.jpg",
    },
  ];
  return <ImageGallery items={images} />;
};

export default Gallery3;
