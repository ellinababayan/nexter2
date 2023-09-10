import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const Gallery6 = () => {
  const images = [
    {
      original: "img/house6.jpg",
    },
    {
      original:
        "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZXJuJTIwaG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    {
      original:
        "https://www.thespruce.com/thmb/KzEiE0INB79xrEyHCw-xiX3R1b4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Untitled-6ec2638ee6214eb2b4c114270d285aad.png",
    },
  ];
  return <ImageGallery items={images} />;
};

export default Gallery6;
