import { observer } from "mobx-react-lite";
import React from "react";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import store from "../../stores/calculationStore";
import { rawTheme } from "../../themes/theme.tsx";

export default observer(function Result() {
  const result = store.getCalculation();
  const rowColor = rawTheme.palette.secondary.light;

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
                <Typography variant="h6">Поле</Typography>
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
                <Typography variant="h6">Осень</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Норма высева:
              </TableCell>
              <TableCell align="center">{`${result.step2.seedingRate} млн`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Норма сложных удобрений (Аммофос 12:52):</TableCell>
              <TableCell align="center">{`${result.step2.complexFertilizers} кг/га`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Норма аммиачной селитры:</TableCell>
              <TableCell align="center">{`${result.step2.ammoniumNitrate} кг/га`}</TableCell>
            </TableRow>
          </TableBody>
          <TableHead>
            <TableRow>
              <TableCell colSpan={2} sx={{ backgroundColor: rowColor }}>
                <Typography variant="h6">Весна</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          <TableHead>
            <TableRow sx={{ borderTop: 1, backgroundColor: rowColor }}>
              <TableCell colSpan={1}>
                <Typography variant="h6">
                  Итоговая урожайность
                </Typography>
              </TableCell>
              <TableCell colSpan={1} align="center" >
                <Typography variant="h6">{`${result.step3.totalresult} ц/га`}</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Box>
  );
});
