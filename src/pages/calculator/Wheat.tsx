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
import store from "../../stores/wheatStore";
import CustomizedSnackbars from "../../components/common/CustomizedSnackbars";
import SeasonsParametrs from "../../components/wheat/SeasonsParametrs";
import { Breadcrumbs, Link } from "@mui/material";
import Result from "../../components/wheat/Result";
import { Link as RouterLink } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import PrintIcon from "@mui/icons-material/Print";
import ym from "react-yandex-metrika";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ButtonGroup from "@mui/material/ButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

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
    if (activeStep == steps.length - 1) {
      ym("reachGoal", "button-result");
    }

    if (store.getEmptyFields(activeStep).length == 0) {
      setActiveStep(activeStep + 1);
    } else {
      setError(true);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleRestart = () => {
    store.resetCalculationWheat();
    setActiveStep(0);
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
        {activeStep !== steps.length - 1 && (
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
        )}
        <Box>
          <Box sx={{ m: 1, minHeight: "64vh" }}>
            {getStepContent(activeStep)}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: activeStep == 0 ? "flex-end" : "space-between",
              m: 1,
              mt: 2,
            }}
          >
            {activeStep != 0 && (
              <Tooltip title="Начать расчет заново">
                <IconButton
                  aria-label="restart"
                  sx={{ p: 0 }}
                  onClick={handleRestart}
                >
                  <RestartAltIcon />
                </IconButton>
              </Tooltip>
            )}
            <ButtonGroup variant="contained" aria-label="Basic button group">
              {activeStep > 0 && (
                <Button onClick={handleBack} variant="outlined">
                  Назад
                </Button>
              )}
              {activeStep < steps.length - 1 && (
                <Button variant="contained" onClick={handleNext}>
                  {activeStep === steps.length - 2 ? "Рассчитать" : "Далее"}
                </Button>
              )}
              {activeStep === steps.length - 1 && (
                <Tooltip title="Печатать результат">
                  <Button onClick={handlePrint}>
                    <PrintIcon />
                  </Button>
                </Tooltip>
              )}
            </ButtonGroup>
          </Box>
        </Box>
      </Paper>
      <CustomizedSnackbars toggle={error} handleClose={() => setError(false)} />
    </Container>
  );
}
