import { observer } from "mobx-react-lite";
import React from "react";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import store from "../../stores/wheatStore";
import { lightTheme } from "../../themes/theme";

export default observer(function Result() {
  const result = store.getCalculationWheat();
  const rowColor = lightTheme.palette.secondary.light;
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Ваши показатели
      </Typography>
      <TableContainer
        sx={{ borderRadius: "4px", border: "1px solid rgba(0, 0, 0, 0.12)" }}
      >
        <Table sx={{ minWidth: 200 }} size="small">
          <TableHead>
            <TableRow sx={{ backgroundColor: rowColor }}>
              <TableCell colSpan={1}>
                <Typography sx={{ fontSize: 14 }}>
                  Поле №{`${result.step1.field}`}
                </Typography>
              </TableCell>
              <TableCell colSpan={1} sx={{ minWidth: 100 }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Площадь:
              </TableCell>
              <TableCell align="center">{`${result.step1.square} га`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Годовая влагообеспеченность предприятия:</TableCell>
              <TableCell align="center">{`${result.step1.moisture} мм`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Планируемая урожайность:</TableCell>
              <TableCell align="center">{`${result.step1.plannedYield} ц/га`}</TableCell>
            </TableRow>
          </TableBody>
          <TableHead>
            <TableRow>
              <TableCell colSpan={2} sx={{ backgroundColor: rowColor }}>
                <Typography sx={{ fontSize: 14 }}>Осень</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Норма сложных удобрений (Аммофос 12:52):</TableCell>
              <TableCell align="center">{`${result.step2.complexFertilizers} кг/га`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Норма аммиачной селитры:</TableCell>
              <TableCell align="center">{`${result.step2.ammoniumNitrate} кг/га`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Норма высева:
              </TableCell>
              <TableCell align="center">{`${result.step2.seedingRate} млн`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Запас фосфора в почве:
              </TableCell>
              <TableCell align="center">{`${result.step2.phosphorusSupply} мг/кг`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Развитие посевов с оcени:
              </TableCell>
              <TableCell align="center">{`${result.step2.comment}`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Прогнозируемая урожайность согласно влагообеспеченности
                хозяйства и уровня азотно фосфорного питания:
              </TableCell>
              <TableCell align="center">{`${result.step2.plannedFirstYield.value} ц/га`}</TableCell>
            </TableRow>
          </TableBody>
          <TableHead>
            <TableRow>
              <TableCell colSpan={2} sx={{ backgroundColor: rowColor }}>
                <Typography sx={{ fontSize: 14 }}>Весна</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Запас продуктивной влаги в метровом слое:
              </TableCell>
              <TableCell align="center">{`${result.step2.moistureSpring} мм`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Доза нитратного азота в почве (слой 0-40см):
              </TableCell>
              <TableCell align="center">{`${result.step2.nitrateNitrogen} кг`}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                Требуемое количество аммиачной селитры:
              </TableCell>
              <TableCell align="center">{`${result.step2.ammoniumNitrateRequired} кг`}</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow
              sx={{
                borderTop: 1,
                backgroundColor: rowColor,
                fontWeight: "bold",
              }}
            >
              <TableCell colSpan={1}>
                <Typography>Итоговая биологическая урожайность</Typography>
              </TableCell>
              <TableCell colSpan={1} align="center">
                <Typography>{`${result.step3.totalresult} ц/га`}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
});
