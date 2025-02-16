import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import "@fontsource/montserrat";

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
        // Scrollable Layout
        cards.map((card, index) => (
          <Box key={index} sx={{ flex: "0 0 auto", minWidth: "280px", marginRight: "15px" }}>
            <Link to={card.path} style={{ textDecoration: "none", width: "100%" }}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  padding: "20px",
                  backgroundColor: "white",
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "none",
                  "&:hover": { backgroundColor: "#F9F9F9" },
                }}
              >
                {card.icon}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography sx={{ fontFamily: "Montserrat", fontSize: "1rem" }}>
                    {card.title}
                  </Typography>
                  <Typography sx={{ fontFamily: "Montserrat", color: card.valueColor, fontSize: "1.4rem" }}>
                    {card.value}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Box>
        ))
      ) : (
        // Grid Layout (Non-Scrollable)
        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <Link to={card.path} style={{ textDecoration: "none", width: "100%" }}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    padding: "20px",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "none",
                    "&:hover": { backgroundColor: "#F9F9F9" },
                  }}
                >
                  {card.icon}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography sx={{ fontFamily: "Montserrat", fontSize: "1.2rem" }}>
                      {card.title}
                    </Typography>
                    <Typography sx={{ fontFamily: "Montserrat", color: card.valueColor, fontSize: "1.1rem" }}>
                      {card.value}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default CardComponent;
