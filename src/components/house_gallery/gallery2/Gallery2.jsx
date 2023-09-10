import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const Gallery2 = () => {
  const images = [
    {
      original: "img/house2.jpg",
    },
    {
      original:
        "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-a642abc/www.decorilla.com/online-decorating/wp-content/uploads/2022/03/Minimalist-modern-home-interior-design-with-a-patio.jpeg",
    },
    {
      original:
        "https://media.architecturaldigest.com/photos/62c473338466d4e5d523ad65/16:9/w_2560%2Cc_limit/GettyImages-522917622.jpg",
    },
  ];
  return <ImageGallery items={images} />;
};

export default Gallery2;
