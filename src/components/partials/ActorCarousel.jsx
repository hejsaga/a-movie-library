import React from "react";
import { useHistory } from "react-router-dom";
import CarouselArrow from "../CarouselArrow";
import Slider from "react-slick";
import styles from "../css/Carousel.module.css";

function ActorCarousel({ actors }) {
  const history = useHistory();
  const imgPrefix = "https://image.tmdb.org/t/p/w300";

  // Config and breakpoints for carousel
  const settings = {
    dots: true,
    autoplay: false,
    infinite: true,
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
          arrows: false,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
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

  const goToActor = (id) => {
    history.push(`/person/${id}`);
  };

  return (
    <>
      {actors && (
        <Slider {...settings}>
          {actors.cast.map((actor, i) => {
            return (
              <div
                key={i}
                onClick={() => goToActor(actor.id)}
                className={styles.actorCarouselContainer}
              >
                <img src={imgPrefix + actor.profile_path} alt="No image"></img>
                <p className={styles.actorName}>{actor.name}</p>
              </div>
            );
          })}
        </Slider>
      )}
    </>
  );
}

export default ActorCarousel;
