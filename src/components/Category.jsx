import React, { useEffect, useState } from "react";
import { useUrlSearchParams } from "use-url-search-params";
import { getMoviesInGenre } from "../services/API";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import PaginationButtons from "./partials/PaginationButtons";
import Spinner from "./partials/Spinner";
import Movies from "./partials/Movies";
import styles from "./css/Categories.module.css";

function Category() {
  const history = useHistory();
  const { id, name } = useParams();
  // Creating an object that contains information that are sent to API request for pagination purposes
  const [searchParams, setSearchParams] = useUrlSearchParams(
    { id: id, page: 1 },
    { page: Number }
  );
  const [page, setPage] = useState(searchParams.page);

  const { data, error, isError, isLoading, isFetching } = useQuery(
    ["genreId", searchParams],
    () => {
      return getMoviesInGenre(searchParams);
    }
  );

  // When page number is updated, update object and data request
  useEffect(() => {
    setSearchParams({ ...searchParams, page });
  }, [page]);

  return (
    <div className="wrapper">
      {name && (
        <h1 className={styles.headline} /* className="listHeadline" */>
          Movies in {name}
        </h1>
      )}
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occured: {error.message}</p>}

      {isFetching ? (
        <Spinner />
      ) : (
        <>
          {data && (
            <div className="categories">
              {/* <button onClick={() => history.goBack}>Go back</button> */}

              <Movies movies={data} isFetching={isFetching} />
              <PaginationButtons
                totalPages={data.total_pages}
                page={searchParams.page}
                setPage={setPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Category;
