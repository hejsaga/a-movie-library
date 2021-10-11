import React from "react";
import { useHistory } from "react-router-dom";
import CarouselArrow from "../CarouselArrow";
import Slider from "react-slick";
import styles from "../css/Carousel.module.css";

function ReactCarousel({ movies }) {
  const history = useHistory();
  const imgPrefix = "https://image.tmdb.org/t/p/w300";

  const goToMovie = (id) => {
    history.push(`/movies/${id}`);
  };

  // Config and breakpoints for carousel
  const settings = {
    autoplay: false,
    // If not specified, 'infinite' makes a duplicate of the slider below it, displaying 2 of the same. Bug in package.
    infinite: movies.length > 5,
    dots: false,
    nextArrow: <CarouselArrow />,

    responsive: [
      {
        breakpoint: 2100,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5,
          arrows: true,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 816,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          draggable: true,
        },
      },
    ],
  };

  return (
    <>
      {movies && settings && (
        <Slider {...settings}>
          {movies.map((movie, i) => {
            return (
              <div key={i} className={styles.carouselContainer}>
                <img
                  onClick={() => goToMovie(movie.id)}
                  src={imgPrefix + movie.poster_path}
                  alt="No image"
                ></img>
              </div>
            );
          })}
        </Slider>
      )}
    </>
  );
}

export default ReactCarousel;
