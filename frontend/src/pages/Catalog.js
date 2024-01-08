import { EventCard } from "./Components/EventCard";
import Divider, { Typography } from "@mui/material";
import { Box, Stack } from "@mui/material";
import event1 from "../Assets/event1.jpg";
import event2 from "../Assets/event2.jpg";
import event3 from "../Assets/event3.jpg";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const Catalog = () => {
  const [events, setEvents] = useState([]);
  const [promoters, setPromoters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiURL = "http://127.0.0.1:8080/api/events/get_all";
        const response = await axios.get(apiURL);
        setEvents(response.data); // Assuming events are in response.data
        console.log(response.data);
        
      } catch (error) {
        console.error("Error fetching data: ", error);
      }

     

    };

    fetchData();
  }, []);

  return (
    <>
      <Box
        style={{
          margin: "5rem",
          border: "groove 1px gray",
          borderRadius: "10px",
          height: "72vh",
          padding: "1rem",
          textAlign: "left",
        }}
      >
        <Typography variant="h5">Our Events</Typography>
        <hr />
        <Stack
          direction={"row"}
          spacing={6}
          justifyContent={"space-around"}
          style={{ overflowY: "scroll", margin: "3rem" }}
        >
          {events?.map((event,promoter) => (
            <EventCard
              emailOrganizzatore={event?.promoterEmail}
              luogo={event?.eventRegion}
              categoria={event?.eventCategory}
              nome={event?.eventName}
              organizzatore={event?.promoterNameSurname}
              startDate={event?.eventStartDate}
              endDate={event?.eventEndDate}
              prezzo={event?.eventPrice}
              descrizione={event?.eventDescription}
              img={event?.img}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};
