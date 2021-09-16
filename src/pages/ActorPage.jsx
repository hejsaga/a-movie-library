import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { getActorById } from "../services/API";
import { BiArrowBack } from "react-icons/bi";
import ActorMovies from "../components/ActorMovies";
import Spinner from "../components/partials/Spinner";
import styles from "../components/css/DetailPages.module.css";

function ActorPage() {
  const imgPrefix = "https://image.tmdb.org/t/p/w200";
  const history = useHistory();
  const { id } = useParams();

  const { data, error, isError, isLoading, isFetching } = useQuery(
    ["actor", id],
    () => {
      return getActorById(id);
    }
  );

  return (
    <div /* className="wrapper" */>
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occured: {error.message}</p>}

      {isFetching ? (
        <Spinner />
      ) : (
        <>
          {/* <button className="goBackButton" onClick={() => history.goBack()}>
            <BiArrowBack />
          </button> */}

          {data && (
            <div className={styles.container}>
              <h1>{data.name}</h1>
              <h2>{data.place_of_birth}</h2>
              <img src={imgPrefix + data.profile_path}></img>
              <p>{data.biography}</p>
            </div>
          )}
          <ActorMovies />
        </>
      )}
    </div>
  );
}

export default ActorPage;
