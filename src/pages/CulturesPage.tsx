import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Divider,
  Typography,
  CardActionArea,
  Grow,
} from "@mui/material";

const cards = [
  {
    id: 1,
    label: "Озимая пшеница",
    displayText: "",
    component: "/calculator/wheat",
    img: "./images/whreat.png",
  },
  {
    id: 2,
    label: "Подсолнечник",
    displayText: "",
    component: "/",
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
  return (
    <>
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
                    <CardMedia
                      sx={{ pt: { xs: "36.25%", md: "66.25%" } }}
                      image={item.img}
                      title={item.label}
                    />
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
    </>
  );
}
