import React from "react";
import EventsCard from "./EventsCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function PastEventsGrid({ data }) {
    const currentDate = new Date();

    const pastEvents = data.filter(event => new Date(event.startDate) < currentDate);
  
  return (
    <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Grid container spacing={2} sx={{ mb: "3rem", display: 'flex' }} maxWidth="lg">
        <Grid container spacing={5}>
          {pastEvents.map((item) => (
            <Grid item lg={4} md={6} xs={12} key={item.id}>
              <EventsCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default PastEventsGrid;