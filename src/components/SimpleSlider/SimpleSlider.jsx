import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import s from './SimpleSlider.module.scss';

import { imagesData } from '../../data/imagesData';

const SimpleSlider = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const showNextImage = () => {
    setImgIndex((index) => {
      if (index === imagesData.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImgIndex((index) => {
      if (index === 0) return imagesData.length - 1;
      return index - 1;
    });
  };

  return (
    <section className={s.sliderContainer}>
      <div className={s.imagesWrapper}>
        {imagesData?.map(({ id, image, alt }) => (
          <img
            className={s.imgSlider}
            key={id}
            src={image}
            alt={alt}
            style={{ translate: `${-100 * imgIndex}%` }}
          />
        ))}
      </div>
      {/* <img className={s.imgSlider} src={imagesData[imgIndex].image} alt="pic" /> */}
      <button
        className={s.sliderArrowBtn}
        style={{ left: 0 }}
        onClick={showPrevImage}
      >
        <ArrowBackIosNewIcon />
      </button>
      <button
        className={s.sliderArrowBtn}
        style={{ right: 0 }}
        onClick={showNextImage}
      >
        <ArrowForwardIosIcon />
      </button>
    </section>
  );
};

export default SimpleSlider;
