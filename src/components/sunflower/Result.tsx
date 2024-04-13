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
import sunflowerStore from "../../stores/sunflowerStore.js";
import { lightTheme } from "../../themes/theme";

export default observer(function Result() {
  const result = sunflowerStore.getCalculation();
  const rowColor = lightTheme.palette.secondary.light;
  return (
    <>
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
                    Поле №{`${result.step1.field}`} Гибрид:
                    {`${result.step1.hybrid}`}
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
                <TableCell component="th" scope="row">
                  Содержание фосфора в почве
                </TableCell>
                <TableCell align="center">{`${result.step2.phosphorusSupply} мг/кг`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Доза удобрений (фосфора) в действующем веществе
                </TableCell>
                <TableCell align="center">{`${result.step2.complexFertilizers} кг/га`}</TableCell>
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
                  Запас продуктивной влаги в слое 0-100см
                </TableCell>
                <TableCell align="center">{`${result.step2.moistureSpring} мм`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Аммиачная селитра при/перед посевом
                </TableCell>
                <TableCell align="center">{`${result.step2.ammoniumNitrate} кг`}</TableCell>
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
                  <Typography>{`${result.step3.totalresult} ц/га *`}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        sx={{
          borderRadius: "4px",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          backgroundColor: rowColor,
        }}
        className="mt-6"
      >
        <Typography
          variant="subtitle2"
          sx={{
            textAlign: { xs: "center", sm: "left" },
            my: { xs: 1, sm: 0 },
            p: 1,
          }}
        >
          * Урожайность подсолнечника напрямую зависит от выбранного гибрида и
          может колебаться в диапазоне от 20% до 30%.
        </Typography>
      </Box>
    </>
  );
});
