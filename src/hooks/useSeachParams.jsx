import React, { useState, useEffect } from "react";
import { useUrlSearchParams } from "use-url-search-params";
import { useQuery } from "react-query";
import { getSearchResult } from "../services/API";

function useSeachParams() {
  const [searchParams, setSearchParams] = useUrlSearchParams(
    { page: 1, query: "" },
    { page: Number }
  );
  const [page, setPage] = useState(searchParams.page);

  const { data, error, isError, isLoading, isFetching, refetch } = useQuery(
    ["search", searchParams],
    () => {
      return getSearchResult(searchParams);
    },
    {
      // Disable the query so it does not run on mount
      enabled: false,
    }
  );

  useEffect(() => {
    if (searchParams.query.length > 1) {
      // Refetch sets the enabled useQuery to true, and runs the query
      refetch && refetch();
    }
  }, [searchParams]);

  return [
    page,
    setPage,
    searchParams,
    setSearchParams,
    data,
    error,
    isError,
    isLoading,
    isFetching,
  ];
}

export default useSeachParams;
