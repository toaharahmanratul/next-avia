// components/Carousel.js
import React, { useState, useEffect } from "react";
import styles from "./styles/corousel.module.css";

const images = [
  "/images/corousel_0.jpg",
  "/images/corousel_1.jpg",
  "/images/corousel_2.jpg",
  "/images/corousel_3.jpg",
  "/images/corousel_4.jpg",
  "/images/corousel_5.jpg",
  "/images/corousel_6.jpg",
  "/images/corousel_7.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    // Automatically change slide every 3 seconds
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className={styles.carouselContainer}>
      <button
        className={`${styles.navButton} ${styles.prev}`}
        onClick={handlePrev}
      >
        Prev
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.carouselImage}
      />
      <button
        className={`${styles.navButton} ${styles.next}`}
        onClick={handleNext}
      >
        Next
      </button>
      <div className={styles.dotIndicator}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex && styles.active
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
