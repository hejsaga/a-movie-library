import React from "react";
import { useQuery } from "react-query";
import { getNowPlaying } from "../../services/API";
import HeaderImage from "./HeaderImage";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../css/Header.module.css";
import Slider from "react-slick";

function Header() {
  const { data, error, isError, isLoading } = useQuery(["now-playing"], () => {
    return getNowPlaying();
  });

  // Config for breakpoints in carousel
  const settings = {
    dots: false,
    autoplay: true,
    speed: 300,
    arrows: false,

    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occured: {error.message}</p>}

      {data && (
        <Slider {...settings}>
          {data.results.map((movie, i) => {
            return (
              <div key={i}>
                <div className={styles.headerMovieTitle}>
                  <h1>{movie.title}</h1>
                </div>

                <HeaderImage image={movie.backdrop_path} movieId={movie.id} />
              </div>
            );
          })}
        </Slider>
      )}

      {/* {data && (
        <Carousel
          swipeable={true}
          showDots={false}
          responsive={responsive}
          infinite={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["desktop", "mobile"]}
          autoPlay={true}
          autoPlaySpeed={5000}
        >
          {data.results.map((movie, i) => {
            return (
              <div key={i}>
                <div className={styles.headerMovieTitle}>
                  <h1>{movie.title}</h1>
                </div>

                <HeaderImage image={movie.backdrop_path} movieId={movie.id} />
              </div>
            );
          })}
        </Carousel>
      )} */}
    </>
  );
}

export default Header;
