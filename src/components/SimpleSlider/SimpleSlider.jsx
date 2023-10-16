import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import s from './SimpleSlider.module.scss';
// Icons for Dots style
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

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
    <section className={s.sliderContainer} aria-label="Image Slider">
      {/* Images */}
      <div className={s.imagesWrapper}>
        {imagesData?.map(({ id, image, alt }, index) => (
          <img
            className={s.imgSlider}
            key={id}
            src={image}
            alt={alt}
            aria-hidden={imgIndex !== index}
            style={{ translate: `${-100 * imgIndex}%` }}
          />
        ))}
      </div>

      {/* Navigations Arrows */}
      <button
        className={s.navigateArrowBtn}
        style={{ left: 0 }}
        onClick={showPrevImage}
        aria-label="View Previous Image"
      >
        <ArrowBackIosNewIcon aria-hidden />
      </button>
      <button
        className={s.navigateArrowBtn}
        style={{ right: 0 }}
        onClick={showNextImage}
        aria-label="View Next Image"
      >
        <ArrowForwardIosIcon aria-hidden />
      </button>

      {/* Navigation Dots */}
      <div className={s.navigateDotsWrapper}>
        {imagesData?.map((_, index) => (
          <button
            className={s.navigateDot}
            key={index}
            onClick={() => setImgIndex(index)}
            aria-label={`View Previous Image ${index + 1}`}
          >
            {/* Dots style*/}
            {index === imgIndex ? (
              <RadioButtonCheckedIcon />
            ) : (
              <RadioButtonUncheckedIcon />
            )}

            {/* Lines style */}
            {/* {index === imgIndex ? (
              <div className={s.dotChecked} aria-hidden></div>
            ) : (
              <div className={s.dotUnchecked} aria-hidden></div>
            )} */}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SimpleSlider;
