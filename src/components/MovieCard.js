import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
function MovieCard(props) {
  const { data } = props;
  console.log("yoyo", data);

  return (
    <>
      <Link to={`/movies/${data.imdbID}`}>
        <Card style={{ margin: "50px 0" }}>
          <img
            src={data.Poster}
            wrapped
            ui={false}
            alt="pic"
            style={{ height: "350px", width: "auto" }}
          />
          <Card.Content>
            <Card.Header>{data.Title}</Card.Header>
            <Card.Meta>
              <span className="date">{data.Type}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>Movie Released {data.Year}</Card.Content>
        </Card>
      </Link>
    </>
  );
}

export default MovieCard;
