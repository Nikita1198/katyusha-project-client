import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grow from "@mui/material/Grow";

import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const cards = [
  {
    id: 1,
    label: "Озимая пшеница",
    displayText: "",
    component: "/calculator/wheat",
    img: "./images/whreat.webp",
  },
  {
    id: 2,
    label: "Подсолнечник",
    displayText: "",
    component: "/calculator/sunflower",
    img: "./images/sunflower.jpg",
  },
  {
    id: 3,
    label: "Картофель",
    displayText: "",
    component: "/",
    img: "./images/potato.jpg",
  },
  {
    id: 4,
    label: "Сахарная свекла",
    displayText: "",
    component: "/",
    img: "./images/sugarbeet.jpg",
  },
  {
    id: 5,
    label: "Кукуруза на зерно",
    displayText: "",
    component: "/",
    img: "./images/сorn.jpg",
  },
];

export default function CulturesPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container component="main" maxWidth="lg">
      <Grow in={true} timeout={500}>
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="textPrimary"
            sx={{ fontFamily: "Comfortaa" }}
            gutterBottom
          >
            Культура
          </Typography>
          <Typography
            sx={{ fontFamily: "Comfortaa" }}
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Выберите культуру для расчета урожайности
          </Typography>
        </Container>
      </Grow>
      <Divider />
      <Container sx={{ py: 3, mt: 0 }} maxWidth="md">
        <Grid container spacing={3} justifyContent="center">
          {cards.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Grow in={true} timeout={item.id * 500}>
                <Card
                  elevation={item.component == "/" ? 0 : 2}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 10,
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                  }}
                >
                  <CardActionArea
                    component={RouterLink}
                    to={item.component}
                    disabled={item.component == "/"}
                    sx={{ opacity: item.component == "/" ? 0.25 : 1 }}
                  >
                    <LazyLoadComponent>
                      <div
                        style={{
                          height: 0,
                          paddingTop: "66.25%",
                          backgroundImage: `url(${item.img})`,
                          backgroundSize: "cover",
                          borderRadius: "4px 4px 0 0",
                        }}
                      />
                    </LazyLoadComponent>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                        align="center"
                        sx={{ mb: 0 }}
                      >
                        {item.label}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}
