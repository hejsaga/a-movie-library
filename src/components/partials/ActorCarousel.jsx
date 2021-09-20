import React from "react";
import { useHistory } from "react-router-dom";
import CarouselArrow from "../CarouselArrow";
import Slider from "react-slick";
import styles from "../css/Carousel.module.css";

function ActorCarousel({ actors }) {
  const history = useHistory();
  const imgPrefix = "https://image.tmdb.org/t/p/w300";

  // Config and breakpoints for carousel
  var settings = {
    dots: true,
    autoplay: false,
    nextArrow: <CarouselArrow />,

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
      {/* {actors && (
        <Carousel
          swipeable={true}
          showDots={false}
          responsive={responsive}
          infinite={false}
          partialVisible={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
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
        </Carousel>
      )} */}
    </>
  );
}

export default ActorCarousel;
