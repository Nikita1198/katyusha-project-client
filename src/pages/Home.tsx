import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Divider,
  Typography,
  makeStyles,
  CardActionArea,
} from "@mui/material";

const cards = [
  {
    id: 1,
    label: "Озимая пшеница",
    displayText: "",
    component: "/wheatcalculatorv2",
    img: "https://www.syngenta.ru/sites/g/files/kgtney371/files/styles/main_media_large/public/media/image/2022/10/21/Culture_whreat_large_01-min.png?itok=MbdpW7CG",
  },
  {
    id: 2,
    label: "Картофель",
    displayText: "",
    component: "/wheatcalculatorv1",
    img: "https://ethnomir.ru/upload/medialibrary/c0a/potato1.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="textPrimary"
          sx={{fontFamily: 'Merriweather'}}
          gutterBottom
        >
          Культура
        </Typography>
        <Typography 
          sx={{fontFamily: 'Merriweather'}} variant="h5" align="center" color="textSecondary" paragraph >
          Выберите культуру для расчета урожайности
        </Typography>
      </Container>
      <Divider />
      <Container sx={{ py: 2}} maxWidth="md">
        <Grid container spacing={4} justifyContent="center">
          {cards.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardActionArea component={RouterLink} to={item.component}>
                  <CardMedia
                    sx={{ pt: "66.25%" }}
                    image={item.img}
                    title="Image title"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.label}
                    </Typography>
                    <Typography>{item.displayText}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
function useStyles() {
  throw new Error("Function not implemented.");
}
