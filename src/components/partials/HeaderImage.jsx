import React from "react";
import styles from "../css/Header.module.css";

function HeaderImage({ image }) {
  const imgPrefix = "https://image.tmdb.org/t/p/w1280";
  return (
    <>
      <div className={styles.imageWrapper}>
        <div
          className={styles.backgroundImageContainer}
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
      </div>
    </>
  );
}

export default HeaderImage;
