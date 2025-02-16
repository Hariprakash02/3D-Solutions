import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import "@fontsource/montserrat";

// Utility function to lighten a hex color
const lightenColor = (hex, percent) => {
  let num = parseInt(hex.replace("#", ""), 16);
  let r = (num >> 16) + Math.round((255 - (num >> 16)) * percent);
  let g = ((num >> 8) & 0x00ff) + Math.round((255 - ((num >> 8) & 0x00ff)) * percent);
  let b = (num & 0x0000ff) + Math.round((255 - (num & 0x0000ff)) * percent);
  return `rgb(${r}, ${g}, ${b})`;
};

const CardComponent = ({ cards, isScrollable }) => {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: 1,
        display: isScrollable ? "flex" : "block",
        overflowX: isScrollable ? "auto" : "unset",
        whiteSpace: isScrollable ? "nowrap" : "normal",
        scrollbarWidth: isScrollable ? "none" : "auto",
        "&::-webkit-scrollbar": isScrollable ? { display: "none" } : {},
      }}
    >
      {isScrollable ? (
        cards.map((card, index) => {
          const hoverColor = lightenColor(card.backgroundColor, 0.5); // 50% lighter color

          return (
            <Box key={index} sx={{ flex: "0 0 auto", minWidth: "280px", marginRight: "15px" }}>
              <Link to={card.path} style={{ textDecoration: "none", width: "100%" }}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    padding: "20px",
                    backgroundColor: card.backgroundColor || "white", // Use card-specific color
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "none",
                    transition: "background-color 0.3s ease",
                    "&:hover": { backgroundColor: hoverColor }, // Lightest color on hover
                  }}
                >
                  {card.icon}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography sx={{ fontFamily: "Montserrat", fontSize: "1rem", color: "#FFFFFF" }}>
                      {card.title}
                    </Typography>
                    <Typography sx={{ fontFamily: "Montserrat", color: "#FFFFFF", fontSize: "1.4rem" }}>
                      {card.value}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          );
        })
      ) : (
        <Grid container spacing={2}>
          {cards.map((card, index) => {
            const hoverColor = lightenColor(card.backgroundColor, 0.5); // 50% lighter color

            return (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <Link to={card.path} style={{ textDecoration: "none", width: "100%" }}>
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      padding: "20px",
                      backgroundColor: card.backgroundColor || "white", // Use card-specific color
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "none",
                      transition: "background-color 0.3s ease",
                      "&:hover": { backgroundColor: hoverColor }, // Lightest color on hover
                    }}
                  >
                    {card.icon}
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography sx={{ fontFamily: "Montserrat", fontSize: "1.2rem", color: "#FFFFFF" }}>
                        {card.title}
                      </Typography>
                      <Typography sx={{ fontFamily: "Montserrat", color: "#FFFFFF", fontSize: "1.1rem" }}>
                        {card.value}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default CardComponent;
