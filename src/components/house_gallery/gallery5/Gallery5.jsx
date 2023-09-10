import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const Gallery5 = () => {
  const images = [
    {
      original: "img/house5.jpg",
    },
    {
      original:
        "https://www.home-designing.com/wp-content/uploads/2019/04/living-room-pendant-light.jpg",
    },
    {
      original: "https://images.wsj.net/im-350810?width=1280&size=1",
    },
  ];
  return <ImageGallery items={images} />;
};

export default Gallery5;
