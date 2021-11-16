import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Table,
} from "semantic-ui-react";
import {
  getSelectedMovieorProducts,
  removeSelectedMovieorShow,
  selectedmovieorShow,
} from "../features/movieSlice";

function MovieDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const selected = useSelector(getSelectedMovieorProducts);

  console.log("selected", selected);
  useEffect(() => {
    dispatch(selectedmovieorShow(id));
    return () => {
      dispatch(removeSelectedMovieorShow());
    };
  }, [dispatch, id]);

  const {
    Title,
    Plot,
    Actors,
    Awards,
    Country,
    Type,
    Writer,
    Director,
    Year,
    imdbRating,
    imdbVotes,
  } = selected;
  return (
    <Container>
      {Object.keys(selected).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Grid columns={2} style={{ margin: "50px 0" }}>
          <Grid.Row>
            <Grid.Column>
              <img
                src={selected.Poster}
                alt={Title}
                style={{ margin: "50px 0" }}
              />
            </Grid.Column>
            <Grid.Column>
              <Divider horizontal>
                <Header as="h4">
                  <Icon name="film" />
                  Description
                </Header>
              </Divider>

              <Table definition>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell width={2}>Name</Table.Cell>
                    <Table.Cell>{Title}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Type</Table.Cell>
                    <Table.Cell>{Type}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Plot</Table.Cell>
                    <Table.Cell>{Plot}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Actors</Table.Cell>
                    <Table.Cell>{Actors}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Director</Table.Cell>
                    <Table.Cell>{Director}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Writer</Table.Cell>
                    <Table.Cell>{Writer}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Country</Table.Cell>
                    <Table.Cell>{Country}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Awards</Table.Cell>
                    <Table.Cell>{Awards}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>IMDB Ratings</Table.Cell>
                    <Table.Cell>{imdbRating}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>IMDB Votes</Table.Cell>
                    <Table.Cell>{imdbVotes}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Year Released</Table.Cell>
                    <Table.Cell>{Year}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
    </Container>
  );
}

export default MovieDetails;
