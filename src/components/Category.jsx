import React, { useEffect } from "react";
import { useUrlSearchParams } from "use-url-search-params";
import { NumberParam, useQueryParams } from "use-query-params";
import { getMoviesInGenre } from "../services/API";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import PaginationButtons from "./partials/PaginationButtons";
import Spinner from "./partials/Spinner";
import Movies from "./partials/Movies";
import styles from "./css/Categories.module.css";

function Category() {
  const { id, name } = useParams();
  const [query, setQuery] = useQueryParams({
    page: NumberParam,
  });

  useEffect(() => {
    // Sets the initial page number
    setQuery({ page: 1 });
  }, [query]);

  const { data, error, isError, isLoading, isFetching, refetch } = useQuery(
    ["genre", id, query.page],
    () => {
      return getMoviesInGenre(id, query.page);
    },
    {
      enabled: false,
    }
  );

  useEffect(() => {
    // When query page is set to 1 or other change in page is detected, fetch data
    if (query.page) {
      setQuery({ ...query, page: query.page });
      refetch && refetch();
    }
  }, [query.page]);

  return (
    <div className="wrapper">
      {name && <h1 className={styles.headline}>Movies in {name}</h1>}
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occured: {error.message}</p>}

      {isFetching ? (
        <Spinner />
      ) : (
        <>
          {data && (
            <div className="categories">
              <Movies movies={data} isFetching={isFetching} />
              <PaginationButtons
                totalPages={data.total_pages}
                page={query.page}
                setQuery={setQuery}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Category;
