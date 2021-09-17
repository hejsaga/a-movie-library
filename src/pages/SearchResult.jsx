import React, { useEffect } from "react";
import { NumberParam, StringParam, useQueryParams } from "use-query-params";
import { getSearchResult } from "../services/API";
import { useQuery } from "react-query";
import PaginationButtons from "../components/partials/PaginationButtons";
import Movies from "../components/partials/Movies";
import styles from "../components/css/SearchBar.module.css";

function SearchResult() {
  const [query, setQuery] = useQueryParams({
    query: StringParam,
    page: NumberParam,
  });

  const { data, error, isError, isLoading, isFetching, refetch } = useQuery(
    ["search", query.query, query.page],
    () => {
      return getSearchResult(query.query, query.page);
    },
    {
      // Disable the query so it does not run on mount
      enabled: false,
    }
  );

  useEffect(() => {
    if (query.query && query.query.length > 1) {
      // Set the initial page number
      setQuery({ page: 1 });

      // Refetch sets the enabled useQuery to true, and runs the query
      refetch && refetch();
    }
  }, [query.query]);

  useEffect(() => {
    // We only want to refetch data if page number is changed in pagination, otherwise this will run the query with undefined values
    if (query.page > 1) {
      // Trigger a refetch when page changes, because useQuery is disabled at first
      setQuery({ ...query, page: query.page, query: query.query });

      // Refetch sets the enabled useQuery to true, and runs the query
      refetch && refetch();
    }
  }, [query.page]);

  return (
    <div className="wrapper">
      <h1>Search</h1>

      <div className={styles.searchContainer}>
        <input
          className={styles.searchField}
          placeholder={"Search for movies or actors"}
          type="text"
          onChange={(e) => {
            setQuery({ query: e.target.value });
          }}
        ></input>
      </div>

      {data && <p className={styles.queryResult}>Results for {query.query}</p>}

      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occured: {error.message}</p>}

      {data && data.results.length < 1 ? (
        <p>
          It appears as if what you're asking for hasn't been produced yet. Call
          a movie agency!
        </p>
      ) : (
        <Movies movies={data} isFetching={isFetching} />
      )}

      {data && data.results.length < 1 ? (
        ""
      ) : (
        <>
          {data && (
            <PaginationButtons
              totalPages={data.total_pages}
              page={query.page}
              setQuery={setQuery}
            />
          )}
        </>
      )}
    </div>
  );
}

export default SearchResult;
