import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../css/Carousel.module.css";

function ReactCarousel({ movies }) {
  const imgPrefix = "https://image.tmdb.org/t/p/w300";

  var settings = {
    dots: true,
    autoplay: false,

    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1448,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          arrows: false,
          draggable: true,
        },
      },
    ],
  };

  return (
    <>
      {movies && (
        <Slider {...settings}>
          {movies.map((movie, i) => {
            return (
              <div key={i} className={styles.carouselContainer}>
                <img src={imgPrefix + movie.poster_path} alt="No image"></img>
              </div>
            );
          })}
        </Slider>
      )}
    </>
  );
}

export default ReactCarousel;
