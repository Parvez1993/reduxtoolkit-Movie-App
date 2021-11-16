import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "semantic-ui-react";
import { fetchAsyncMovies, fetchAsyncShows } from "../features/movieSlice";
import Movielisting from "./Movielisting";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Movielisting />
      </Container>
    </>
  );
}

export default Home;
