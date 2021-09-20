import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ReactCarousel({ movies }) {
  const imgPrefix = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    console.log("Movies in carousel", movies);
  }, [movies]);

  var settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,

    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
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
              <div key={i}>
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
