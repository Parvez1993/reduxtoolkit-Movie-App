import React from "react";
import { Container, Grid, Segment } from "semantic-ui-react";
function Footer() {
  return (
    <Container>
      <Segment inverted>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <h3>Movie Redux</h3>
          </Grid.Column>
          <Grid.Column>
            <h3>Thanks to OMDB API DATABASE</h3>
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
}

export default Footer;
