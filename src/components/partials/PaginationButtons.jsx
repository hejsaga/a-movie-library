import React from "react";
import styles from "../css/PaginationButtons.module.css";

function PaginationButtons({ totalPages, page, setPage }) {
  return (
    <div className="pagination">
      <div className={styles.paginationButtons}>
        <button
          onClick={() => setPage((current) => Math.max(current - 1, 1))}
          disabled={page === 1}
        >
          &#10094;
        </button>

        <p>Page: {page}</p>

        <button
          onClick={() => {
            if (page < totalPages) {
              setPage((page) => page + 1);
            }
          }}
          disabled={page >= totalPages}
        >
          &#10095;
        </button>
      </div>

      <span>{page >= totalPages ? <p>No more results</p> : ""}</span>
    </div>
  );
}

export default PaginationButtons;
