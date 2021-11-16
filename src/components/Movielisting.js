import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { Card, Grid, Label, Message, Segment } from "semantic-ui-react";
import { getAllMovies, getAllSeries } from "../features/movieSlice";
import MovieCard from "./MovieCard";

function Movielisting() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllSeries);
  let renderMovies,
    renderShows = "";

  //   <Grid doubling columns={5}>
  //   {movies.Search.map((item, k) => {
  //     return (
  //       <Grid.Column style={{ margin: "50px 0" }}>
  //         <MovieCard data={item} key={k} />
  //       </Grid.Column>
  //     );
  //   })}
  // </Grid>
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((item, k) => {
        return <MovieCard data={item} key={k} />;
      })
    ) : (
      <Message warning>
        <Message.Header>{movies.Error}</Message.Header>
      </Message>
    );

  renderShows =
    shows.Response === "True" ? (
      <Grid doubling columns={6}>
        {shows.Search.map((item, k) => {
          return (
            <Grid.Column style={{ margin: "50px 0" }}>
              <MovieCard data={item} key={k} />
            </Grid.Column>
          );
        })}
      </Grid>
    ) : (
      <Message warning>
        <Message.Header></Message.Header>
      </Message>
    );

  return (
    <>
      <div>
        <Slider {...settings}>{renderMovies}</Slider>
        <div>{renderShows}</div>
      </div>
    </>
  );
}

export default Movielisting;
