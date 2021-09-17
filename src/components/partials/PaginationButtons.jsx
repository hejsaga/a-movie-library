import React from "react";
import styles from "../css/PaginationButtons.module.css";

function PaginationButtons({ totalPages, page, setQuery }) {
  const getPrevPage = () => {
    setQuery({ page: page - 1 });
  };

  const getNextPage = () => {
    if (page < totalPages) {
      setQuery({ page: page + 1 });
    }
  };

  return (
    <div className="pagination">
      <div className={styles.paginationButtons}>
        <button onClick={() => getPrevPage()} disabled={page === 1}>
          &#10094;
        </button>

        <p>Page: {page}</p>

        <button onClick={() => getNextPage()} disabled={page >= totalPages}>
          &#10095;
        </button>
      </div>

      <span>{page >= totalPages ? <p>No more results</p> : ""}</span>
    </div>
  );
}

export default PaginationButtons;
