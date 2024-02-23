import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FieldParameters from "../../components/wheat/FieldParameters";
import store from "../../stores/calculationStore";
import CustomizedSnackbars from "../../components/common/CustomizedSnackbars";
import SeasonsParametrs from "../../components/wheat/SeasonsParametrs";
import { Breadcrumbs, Link } from "@mui/material";
import Result from "../../components/wheat/Result";
import { Link as RouterLink } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import PrintIcon from "@mui/icons-material/Print";

const steps = ["Поле", "Осень/Весна", "Расчет"];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <FieldParameters />;
    case 1:
      return <SeasonsParametrs />;
    case 2:
      return <Result />;
    default:
      throw new Error("Что-то пошло не так! Попробуйте перезагрузить страницу");
  }
}

export default function WheatCalculator() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [error, setError] = React.useState(false);

  // для печати компоненты
  const componentRef = React.useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleNext = () => {
    if (store.getEmptyFields(activeStep).length == 0) {
      setActiveStep(activeStep + 1);
    } else {
      setError(true);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 4 }} ref={componentRef}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link
          underline="hover"
          color="inherit"
          component={RouterLink}
          to="/cultures"
        >
          Культура
        </Link>
        <Typography color="text.primary">Озимая пшеница</Typography>
      </Breadcrumbs>
      <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
        <Stepper
          activeStep={activeStep}
          sx={{
            pt: 1,
            pb: 1.5,
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box>
          <Box sx={{ m: 1, minHeight: "58.5vh" }}>
            {getStepContent(activeStep)}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {/* Кнопка "Назад" отображается всегда, кроме первого шага */}
            {activeStep > 0 && (
              <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                Назад
              </Button>
            )}
            {/* Кнопка "Далее" или "Рассчитать" отображается на всех шагах, кроме последнего */}
            {activeStep < steps.length - 1 && (
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                {activeStep === steps.length - 2 ? "Рассчитать" : "Далее"}
              </Button>
            )}
            {/* Кнопка "Печать" отображается только на последнем шаге */}
            {activeStep === steps.length - 1 && (
              <Button
                variant="contained"
                onClick={handlePrint}
                startIcon={<PrintIcon />}
                sx={{ mt: 3, ml: 1 }}
              >
                Печать
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
      <CustomizedSnackbars toggle={error} handleClose={() => setError(false)} />
    </Container>
  );
}