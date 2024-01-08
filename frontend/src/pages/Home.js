import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import img1 from "../Assets/ArtGalleryimg1.jpg";

import img2 from "../Assets/ArtGalleryimg2.jpg";
import img3 from "../Assets/ArtGalleryimg3.jpg";
import img4 from "../Assets/ArtGalleryimg4.jpg";
import img5 from "../Assets/ArtGalleryimg5.jpg";
import img6 from "../Assets/ArtGalleryimg6.jpg";
import img7 from "../Assets/ArtGalleryimg7.jpg";
import imgclient from "../Assets/imgClient.jpg";
import imgpromoter from "../Assets/ImgPromoter.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    title:
      " “Art has no era. It is the emotion that sleeps on pillows of eternity.” ",
    url: img1,
  },
  {
    title: " “Art is made to disturb, science to reassure.” ",
   url: img2 
  },
  { title: " “At the opera you know the master.” ", url: img3,},

  {
    title: " “Art is contemplation.”  ",
    url: img4,
  },
  {
    title: " “Carving emptiness to give shape to thoughts”  ",
    url: img5,
  },
  {
    title: " “A sensory journey through notes that sculpt the imagination.”",
    url: img6,
  },
  {
    title: " “Cities transformed into open-air canvases.” ",
    url: img7,
  },
];

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const Home = () => {
  const stringDevs = [
    "Dawid Adrian Danila | 0124002590",
    "Carmela Pia Fiore | 0124002523",
    "Maria Grazia Di Giorgio | 0124002701",
    "Paolo Coletta | 0124002554",
  ];

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    afterChange: (current) => setCurrentIndex(current),
  };

  const [userType, setUserType] = useState("none");
  return (
    <Stack spacing={3} style={{ height: "80vh" }}>
      <Slide
        autoplay={true}
        onChange={function noRefCheck() {}}
        onStartChange={function noRefCheck() {}}
      >
        {images.map((img) => (
          <div key={img.title} className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${img.url})`,
                backgroundSize: "cover",
              }}
            >
              <span>{img.title}</span>
            </div>
          </div>
        ))}
      </Slide>
      {/* web */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Grid container spacing={2} direction={"row"} className="row-img">
          <Grid item lg={4}>
            <img src={imgclient} alt="img" />
          </Grid>
          <Grid item container direction={"column"} lg={3}>
            <Grid item md={4}>
              <span>
                <Typography
                  component={"i"}
                  variant="h3"
                  style={{ display: "block" }}
                >
                  For Customers{" "}
                </Typography>
                <Typography component={"i"} variant="body1">
                  If you're looking to turn your day into a cultural adventure,
                  you're in the right place! Explore our world of extraordinary
                  exhibitions and snag yourself a ticket to fun. Get ready to
                  dive into a journey of art, emotions, and discoveries. Don't
                  miss the chance to purchase your ticket for an experience that
                  will bring a smile to your face. Click now and start the
                  countdown to cultural delight!"
                </Typography>
              </span>
            </Grid>

            <Grid item container direction={"row"}>
              <Grid item md={6}>
                <Link
                  key={"login"}
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/loginclients`}
                >
                  <KeyboardDoubleArrowLeftIcon />{" "}
                  <Typography textAlign="center"> {"Login"}</Typography>
                </Link>
              </Grid>
              <Grid item md={6}>
                <Link
                  key={"SignUp"}
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/signUpclients`}
                >
                  <KeyboardDoubleArrowRightIcon />{" "}
                  <Typography textAlign="center"> {"Sign Up"}</Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} direction={"row"} className="row-img">
          <Grid item container direction={"column"} lg={3}>
            <Grid item md={4}>
              <span>
                <Typography
                  component={"i"}
                  variant="h3"
                  style={{ display: "block" }}
                >
                  For Promoters{" "}
                </Typography>
                <Typography component={"i"} variant="body1">
                  Welcome to the place where your event takes center stage! If
                  you have a special occasion to share with the world, you're in
                  the right spot. Enter the details of your event and let the
                  magic of advertising bring it into the spotlight. The stage is
                  yours, and we're here to make you shine. Don't wait, click
                  now, and give your event the attention it deserves. Make every
                  moment unforgettable!
                </Typography>
              </span>
            </Grid>

            <Grid item container direction={"row"}>
              <Grid item md={6}>
                <Link
                  key={"loginprom"}
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/loginpromoters`}
                >
                  <KeyboardDoubleArrowLeftIcon />{" "}
                  <Typography textAlign="center"> {"Login"}</Typography>
                </Link>{" "}
              </Grid>
              <Grid item md={6}>
                <Link
                  key={"signUpprom"}
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/signUppromoters`}
                >
                  <KeyboardDoubleArrowRightIcon />{" "}
                  <Typography textAlign="center"> {"Sign Up"}</Typography>
                </Link>{" "}
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <img src={imgpromoter} alt="img" />
          </Grid>
        </Grid>
        <Grid container spacing={1} direction={"row"} className="row-img">
          <Grid item lg={4}>
            <img src={img3} alt="img" />
          </Grid>
          <Grid item lg={7}>
            <span> For Artists... Other features are coming soon.</span>
          </Grid>{" "}
        </Grid>
      </Box>

      {/* mobile */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Grid
          container
          spacing={2}
          direction={"row"}
          className="row-img-mobile"
        >
          <Grid
            item
            xs={7}
            style={{
              background: `url(${img1})`,
              height: "10rem",
              backgroundSize: "cover",
            }}
          ></Grid>
          <Grid item xs={4}>
            <span>
              <Typography component={"i"} variant={"h6"}>
                For Clients
              </Typography>
            </span>
          </Grid>{" "}
        </Grid>
        <Grid
          container
          spacing={2}
          direction={"row"}
          className="row-img-mobile"
        >
          <Grid item xs={4}>
            {" "}
            <span>
              <Typography component={"i"} variant={"h6"}>
                For Promoters
              </Typography>
            </span>
          </Grid>
          <Grid
            item
            xs={7}
            style={{
              background: `url(${img2})`,
              height: "10rem",
              backgroundSize: "cover",
            }}
          ></Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction={"row"}
          className="row-img-mobile"
        >
          <Grid
            item
            xs={7}
            style={{
              background: `url(${img3})`,
              height: "10rem",
              backgroundSize: "cover",
            }}
          ></Grid>
          <Grid item xs={4}>
            {" "}
            <span>
              <Typography component={"i"} variant={"h6"}>
                For Artists... Other features are coming soon.
              </Typography>
            </span>
          </Grid>{" "}
        </Grid>
      </Box>
      <footer style={{ backgroundColor: "black", color: "white" }}>
        <Stack
          //contiene tutto
          direction={"row"}
          style={{ textAlign: "center" }}
          marginTop={0.5}
        >
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton
            color="inherit"
            href="https://github.com/paolinucs/eventProject"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <Typography variant="h5" component={"b"}>
              About Us
            </Typography>
            <Slider {...sliderSettings}>
              {stringDevs.map((user, index) => (
                <div key={index}>
                  <p>{user}</p>
                </div>
              ))}
            </Slider>
          </div>
          <ul
            style={{
              listStyleType: "none",
              textAlign: "center",
              marginTop: 0,
              marginRight: 15,
              color: "gray",
            }}
          >
            <h3 style={{ margin: "0px 0px 10px 0px" }}>Product</h3>
            <li>React</li>
            <li>Material UI</li>
            <li>SpringBoot</li>
          </ul>
        </Stack>
      </footer>
    </Stack>
  );
};
export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
