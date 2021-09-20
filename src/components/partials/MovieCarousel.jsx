import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../css/Carousel.module.css";

function ReactCarousel({ movies }) {
  const imgPrefix = "https://image.tmdb.org/t/p/w300";

  /* useEffect(() => {
    console.log("Movies in carousel", movies);
  }, [movies]); */

  var settings = {
    dots: true,
    autoplay: false,
    speed: 300,

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
    <div className="marginTop">
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
    </div>
  );
}

export default ReactCarousel;
