import { observer } from "mobx-react-lite";
import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import store from "../stores/calculationStore";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default observer(function Result() {
  const result = store.getCalculation();

  return (
    <Box>
      <List sx={{ justifyContent: "space-between" }}>
        <ListItem>
          <Typography variant="h6">Ваши показатели</Typography>
        </ListItem>
        <Divider><Typography variant="body2">Поле</Typography></Divider>
        <ListItem>
          <ListItemText primary={`Площадь:`} />
          <Typography variant="body1">{`${result.step1.square} га`}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={`Влагообеспеченность предприятия:`} />
          <Typography variant="body1">{`${result.step1.moisture} мм`}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={`Планируемая урожайность:`} />
          <Typography variant="body1">{`${result.step1.plannedYield} ц/га`}</Typography>
        </ListItem>
        <Divider><Typography variant="body2">Осень</Typography></Divider>
        <ListItem>
          <ListItemText primary={`Норма высева:`} />
          <Typography variant="body1">{`${result.step2.seedingRate} млн`}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={`Норма сложных удобрений:`} />
          <Typography variant="body1">{`${result.step2.complexFertilizers} кг/га`}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={`Норма аммиачной селитры:`} />
          <Typography variant="body1">{`${result.step2.ammoniumNitrate} кг/га`}</Typography>
        </ListItem>
        <Divider><Typography variant="body2">Весна</Typography></Divider>
        <ListItem>
          <ListItemText
            primary={`Доза нитратного азота в почве (слой 0-40см):`}
          />
          <Typography variant="body1">{`${result.step2.nitrateNitrogen} кг`}</Typography>
        </ListItem>
        <Divider component="li" sx={{mt: 1}}/>
        <ListItem >
          <ListItemText
            primary={
              <Typography variant="h6">Ваша урожайность:</Typography>
            }
          />
          <Typography variant="h6">{`${result.step3.totalresult} ц/га`}</Typography>
        </ListItem>
      </List>
    </Box>
  );
});
