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
  Zoom,
  Grow,
} from "@mui/material";

const cards = [
  {
    id: 1,
    label: "Озимая пшеница",
    displayText: "",
    component: "/calculator/wheat",
    img: "/images/whreat.png",
  },
  {
    id: 2,
    label: "Подсолнечник",
    displayText: "",
    component: "/",
    img: "https://kub-inform.ru/upload/iblock/2ff/sunflower_natural_background_sunflower_blooming_spring.jpg",
  },
  {
    id: 3,
    label: "Картофель",
    displayText: "",
    component: "/",
    img: "/images/potato.jpg",
  },
  {
    id: 4,
    label: "Сахарная свекла",
    displayText: "",
    component: "/",
    img: "data:image/jpeg;base64,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",
  },
  {
    id: 5,
    label: "Кукуруза на зерно",
    displayText: "",
    component: "/",
    img: "https://st29.stpulscen.ru/images/product/255/823/168_original.jpg",
  },
];

export default function CulturesPage() {
  return (
    <>
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
      <Divider />
      <Container sx={{ py: 2, mt: 0 }} maxWidth="md">
        <Grid container spacing={4} justifyContent="center">
          {cards.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Grow in={true} timeout={item.id !== 1 ? 2000 : 1000}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardActionArea
                    component={RouterLink}
                    to={item.component}
                    disabled={item.component == "/"}
                    sx={{opacity: item.component == "/" ? 0.5 : 1}}
                  >
                    <CardMedia
                      sx={{ pt: { xs: "36.25%", md: "66.25%" } }}
                      image={item.img}
                      title={item.label}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.label}
                      </Typography>
                      <Typography>{item.displayText}</Typography>
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
