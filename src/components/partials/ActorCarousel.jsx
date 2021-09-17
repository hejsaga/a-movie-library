import React from "react";
import { useHistory } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../css/Carousel.module.css";

function ActorCarousel({ actors }) {
  const history = useHistory();
  const imgPrefix = "https://image.tmdb.org/t/p/w300";

  // Config for breakpoints in carousel
  const responsive = {
    bigScreen: {
      breakpoint: { max: 3000, min: 2200 },
      items: 7,
      slidesToSlide: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1800 },
      items: 6,
      slidesToSlide: 6,
    },
    laptop: {
      breakpoint: { max: 1800, min: 1350 },
      items: 5,
      slidesToSlide: 5,
    },
    middleBreak: {
      breakpoint: { max: 1350, min: 900 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 900, min: 599 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      // Shows part of next slide, value is px
      partialVisibilityGutter: 30,
    },
  };

  const goToActor = (id) => {
    history.push(`/person/${id}`);
  };

  return (
    <>
      {actors && (
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
      )}
    </>
  );
}

export default ActorCarousel;
