import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../store/urls";

const CaruselComponent = () => {
  const { banner } = useSelector((state) => state);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const arr = [];
    banner?.map((ban) => {
      arr.push({ original: `${BASE_URL}${ban.image}` });
    });
    setImages(arr);
  }, [banner]);

  return (
    <ImageGallery
      showFullscreenButton={false}
      showPlayButton={false}
      autoPlay
      items={images}
    />
  );
};

export default CaruselComponent;
