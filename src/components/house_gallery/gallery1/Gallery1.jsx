import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const Gallery1 = () => {
  const images = [
    {
      original: "img/house1.jpg",
    },
    {
      original:
        "https://colleenmcnally.com/wp-content/uploads/2019/06/living-room-and-kitchen-design.jpg",
    },
    {
      original: "https://cdn.mos.cms.futurecdn.net/bjyfoV4SaxvetsJqN8KDRM.jpg",
    },
  ];
  return <ImageGallery items={images} />;
};

export default Gallery1;
