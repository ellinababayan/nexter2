import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const Gallery4 = () => {
  const images = [
    {
      original: "img/house4.jpg",
    },
    {
      original:
        "https://assets.vogue.com/photos/64f24a70d83651cb8b97a7a0/4:3/w_1600%2Cc_limit/6-230630McKINLEY_CAPTBALFOUR_(glenallsop)015.JPG",
    },
    {
      original:
        "https://traditionoutdoorliving.com/wp-content/uploads/2019/12/Patio_Cover_Katy_TB.jpg",
    },
  ];
  return <ImageGallery items={images} />;
};

export default Gallery4;
