import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { Grid, TextField, Stack } from "@mui/material";
import { EventCard } from "./Components/EventCard";
import event1 from "../Assets/event1.jpg";
import event2 from "../Assets/event2.jpg";
import event3 from "../Assets/event3.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import eventImage from "../Assets/event3.jpg";
import { Request } from "./Modules/Forms/Request";
import { useTheme } from "@mui/material/styles";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import axios from "axios";

const drawerWidth = 240;

export function Account() {
  const [currentSection, setCurrentSection] = useState("Profile");
  const theme = useTheme();

  const [email, getEmail] = useState("");
  const [role, getRole] = useState("");
  const [name, getName] = useState("");
  const [surname, getSurname] = useState("");
  const [birthday, getBirthday] = useState("");
  const [city, getCity] = useState("");
  const [address, getAddress] = useState("");
  const [nation, getNation] = useState("");
  const [fiscalCode, getFiscalCode] = useState("");

  const callApi = async () => {
    const fiscalCode = JSON.parse(localStorage.getItem("fiscalCode"));
    console.log(fiscalCode);
    const apiURL =
      "http://127.0.0.1:8080/auth/retrieve_info/" + "CLTPLA02E07F839W";
    const customHeaderString = "AG65KD5QKF9992K";

    const requestData = {
      name: name,
      surname: surname,
      birthDate: birthday,
      email: email,
      city: city,
      address: address,
      fiscalCode: fiscalCode,
      role: role,
    };
    const config = {
      headers: {
        authKey: customHeaderString,
      },
    };

    const response = await axios.get(apiURL, config);
    console.log(response.data);
  };

  const renderSection = () => {
    switch (currentSection) {
      case "Profile":
        return renderProfileSection();
      // Aggiungi altri casi per le sezioni aggiuntive
      case "Tickets":
        return renderTicketSection();
      case "Event":
        return renderEventSection();
      case "Favorites":
        return renderFavoritesSection();
      case "Request":
        return <Request></Request>;
      default:
        return null;
    }
  };
  const events = [
    {
      nome: "Comicon",
      organizzatore: "Marck jset",
      data: "Sat, 03 May 22",
      prezzo: " 12$",
      descrizione: "lorem impsWEEEjdhuceh",
      img: event1,
    },
    {
      nome: "Romix",
      organizzatore: "Marck jset",
      data: "Sat, 03 May 22",
      prezzo: " 17$",
      descrizione: "loDXSCErem impsjdhuceh",
      img: event2,
    },
    {
      nome: "Lucca",
      organizzatore: "Marck jset",
      data: "Sat, 03 May 22",
      prezzo: " 10$",
      descrizione: "lorem impsjdWFEEWEFhuceh",
      img: event3,
    },
    {
      nome: "comicon",
      organizzatore: "Marck jset",
      data: "Sat, 03 May 22",
      prezzo: " 12$",
      descrizione: "lorem impsWEEEjdhuceh",
      img: event1,
    },
    {
      nome: "Romix",
      organizzatore: "Marck jset",
      data: "Sat, 03 May 22",
      prezzo: " 17$",
      descrizione: "loDXSCErem impsjdhuceh",
      img: event2,
    },
    {
      nome: "Lucca",
      organizzatore: "Marck jset",
      data: "Sat, 03 May 22",
      prezzo: " 10$",
      descrizione: "lorem impsjdWFEEWEFhuceh",
      img: event3,
    },
    {
      nome: "Comicon",
      organizzatore: "Marck jset",
      data: "Sat, 03 May 22",
      prezzo: " 12$",
      descrizione: "lorem impsWEEEjdhuceh",
      img: event1,
    },
    {
      nome: "Romix",
      organizzatore: "Marck jset",
      data: "Sat, 03 May 22",
      prezzo: " 17$",
      descrizione: "loDXSCErem impsjdhuceh",
      img: event2,
    },
    {
      nome: "Lucca",
      organizzatore: "Marck jset",
      data: "Sat, 03 May 22",
      prezzo: " 10$",
      descrizione: "lorem impsjdWFEEWEFhuceh",
      img: event3,
    },
    {
      nome: "Comicon",
      organizzatore: "Marck jset",
      data: "Sat, 03 May 22",
      prezzo: " 12$",
      descrizione: "lorem impsWEEEjdhuceh",
      img: event1,
    },
    {
      nome: "Romix",
      organizzatore: "Marck jset",
      data: "Sat, 03 May 22",
      prezzo: " 17$",
      descrizione: "loDXSCErem impsjdhuceh",
      img: event2,
    },
  ];

  const renderTicketSection = () => {

    callApi();

    return (
      <div style={{ height: "auto", overflowY: "auto" }}>
        <Box
          style={{
            margin: "5rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "70vh",
            padding: "1rem",
            textAlign: "left",
          }}
        >
          <Typography variant="h5">Your Tickets</Typography>
          <hr />
          <Stack
            direction={"row"}
            spacing={6}
            justifyContent={"space-between"}
            style={{ overflowY: "scroll", margin: "auto" }}
          >
            {events.map((event) => (
              <EventCard
                nome={event.nome}
                organizzatore={event.organizzatore}
                data={event.data}
                prezzo={event.prezzo}
                descrizione={event.descrizione}
                img={event.img}
              />
            ))}
          </Stack>
        </Box>
      </div>
    );
  };

  const renderEventSection = () => {
    return (
      <div style={{ height: "auto", overflowY: "auto" }}>
        <Box
          style={{
            margin: "5rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "70vh",
            padding: "1rem",
            textAlign: "left",
          }}
        >
          <Typography variant="h5">Your Events</Typography>
          <hr />
          <Stack
            direction={"row"}
            spacing={6}
            justifyContent={"space-between"}
            style={{ overflowY: "scroll", margin: "auto" }}
          >
            {events.map((event) => (
              <EventCard
                nome={event.nome}
                organizzatore={event.organizzatore}
                data={event.data}
                img={event.img}
              />
            ))}
          </Stack>
        </Box>
      </div>
    );
  };

  const renderFavoritesSection = () => {
    return (
      <Card style={{ marginTop: "30px", marginLeft: "30px" }}>
        <CardMedia
          component="img"
          height="200"
          image={eventImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sarà davvero una torta?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Se sei un appassionato di dolci e ami le sorprese, facciamo al caso
            tuo!
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const renderProfileSection = () => {
    return (
      <Box
        style={{
          height: "30rem",
          width: "40rem",
          padding: "2rem",
          backgroundColor: "#a0c4ff",
        }}
        className="center"
      >
        <div
          style={{
            backgroundColor: "#eaf4f4",
            height: "30rem",
            width: "40rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
          }}
        >
          <Typography variant="h4" style={{ marginBottom: "1em" }}>
            Profile
          </Typography>
          <Grid
            container
            direction={"row"}
            spacing={3}
            style={{ justifyContent: "center" }}
          >
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Name"
                onChange={(e) => getName(e.target.value)}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Surname"
                onChange={(e) => getSurname(e.target.value)}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Date of Birth"
                onChange={(e) => getBirthday(e.target.value)}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Email"
                onChange={(e) => getEmail(e.target.value)}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="City"
                onChange={(e) => getCity(e.target.value)}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Nation"
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Fiscal Code"
                onChange={(e) => getFiscalCode(e.target.value)}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Role"
                onChange={(e) => getRole(e.target.v)}
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    );
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "black",
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <Typography variant="h4" margin={2}>
          My Account
        </Typography>
        <Divider />
        <List>
          {[
            {
              text: "Profile",
              icon: <AccountBoxIcon style={{ color: "white" }} />,
            },
            {
              text: "Tickets",
              icon: <ConfirmationNumberIcon style={{ color: "white" }} />,
            },
            {
              text: "Event",
              icon: <CalendarViewDayIcon style={{ color: "white" }} />,
            },
            {
              text: "Favorites",
              icon: <FavoriteIcon style={{ color: "white" }} />,
            },
            {
              text: "Request",
              icon: <InsertDriveFileIcon style={{ color: "white" }} />,
            },
          ].map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              onClick={() => setCurrentSection(item.text)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Toolbar />
      {renderSection()}
    </Box>
  );
}
