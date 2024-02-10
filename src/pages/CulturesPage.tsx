import * as React from "react";
import { Link as RouterLink  } from "react-router-dom";
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
    label: "Картофель",
    displayText: "",
    component: "/",
    img: "/images/potato.jpg",
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
          sx={{ fontFamily: 'Comfortaa' }}
          gutterBottom
        >
          Культура
        </Typography>
        <Typography
          sx={{ fontFamily: 'Comfortaa' }} variant="h5" align="center" color="textSecondary" paragraph >
          Выберите культуру для расчета урожайности
        </Typography>
      </Container>
      <Divider />
      <Container sx={{ py: 2, mt: 0 }} maxWidth="md">
        <Grid container spacing={4} justifyContent="center">
          {cards.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Grow in={true} timeout={item.id !== 1 ? 2000 : 1000 }>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardActionArea component={RouterLink} to={item.component}>
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
              </Grow >
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
