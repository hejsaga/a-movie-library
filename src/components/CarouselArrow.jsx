import React from "react";
import { FcNext } from "react-icons/fc";
import styles from "./css/Carousel.module.css";

function CarouselArrow(props) {
  // Custom next-arrow for Carousel
  // Using built in logic from Slider for nextArrow
  const { nextArrow, onClick } = props;
  return (
    <div
      className={nextArrow}
      style={{
        position: "absolute",
        top: "170px",
        right: "70px",
        maxWidth: "32px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <FcNext className={styles.nextArrow} />
    </div>
  );
}

export default CarouselArrow;
