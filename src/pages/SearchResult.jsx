import React, { useEffect, useState } from "react";
import PaginationButtons from "../components/partials/PaginationButtons";
import Movies from "../components/partials/Movies";
import useSearchParams from "../hooks/useSeachParams";
import { FaSearch } from "react-icons/fa";

function SearchResult() {
  const [searchQuery, setSearchQuery] = useState("");
  const [
    page,
    setPage,
    searchParams,
    setSearchParams,
    data,
    error,
    isError,
    isLoading,
    isFetching,
  ] = useSearchParams();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Reset page if new query
    setPage(1);
    setSearchParams({ ...searchParams, page, query: searchQuery });
  };

  useEffect(() => {
    // Trigger a refetch when page changes, because useQuery is disabled at first
    setSearchParams({ ...searchParams, page, query: searchQuery });
  }, [page]);

  return (
    <div className="wrapper">
      <h1>Search</h1>

      {data && <p className="queryResult">Results for {searchParams.query}</p>}

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
              page={searchParams.page}
              setPage={setPage}
            />
          )}
        </>
      )}
    </div>
  );
}

export default SearchResult;
