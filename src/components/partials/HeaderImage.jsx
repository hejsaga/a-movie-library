import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../css/Header.module.css";

function HeaderImage({ image, movieId }) {
  const imgPrefix = "https://image.tmdb.org/t/p/w1280";
  const history = useHistory();

  const goToMovie = () => {
    history.push(`/movies/${movieId}`);
  };

  return (
    <div
      onClick={() => goToMovie()}
      className={styles.backgroundImageContainer}
      // Using inline styles to access image fetched from api tp use as background.
      // For future reference: Put gradient first so it's at the top of div-stack.
      style={{
        background: `linear-gradient(to top, #181818, rgba(255, 0, 0, 0)), url(${
          imgPrefix + image
        }) no-repeat`,
        width: "100%",
        height: "60vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
}

export default HeaderImage;
