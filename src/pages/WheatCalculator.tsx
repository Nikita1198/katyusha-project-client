import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FieldParameters from "../components/FieldParameters";
import store from "../stores/calculationStore";
import CustomizedSnackbars from "../components/CustomizedSnackbars";
import SeasonsParametrs from "../components/SeasonsParametrs";
import { Breadcrumbs, Link } from "@mui/material";
import Result from "../components/Result";
import { useReactToPrint } from 'react-to-print';

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
  const [activeStep, setActiveStep] = React.useState(1);
  const [error, setError] = React.useState(false);
  const [reasult, setResult] = React.useState(0);

  // для печати компоненты
  const componentRef = React.useRef(null)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  
  const handleNext = () => {
    if(activeStep === steps.length - 1)
    {
      let calculation = store.calculateYield();
      setResult(calculation);
    }

    if (store.isStepComplete(activeStep)) {
      setError(false);
      setActiveStep(activeStep + 1);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }

    if(activeStep === 0)
    {
      store.updatePlannedFirstYield();
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 12, mb: 4 }} ref={componentRef}>
      <Breadcrumbs aria-label="breadcrumb" sx={{mb: 2}}>
        <Link underline="hover" color="inherit" href="/home">
          Культура
        </Link>
        <Typography color="text.primary">Озимая пшеница</Typography>
      </Breadcrumbs>
      <Paper
        variant="outlined"
        sx={{ p: { xs: 2, md: 3 } }}
      >
        <Stepper
          activeStep={activeStep}
          sx={{
            py: 2,
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Спасибо за расчет!
              </Typography>
              <Typography variant="subtitle1">
                Ваша урожайность: {reasult}
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box sx={{ m: 1, minHeight: "537px" }}>
                {getStepContent(activeStep)}
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Назад
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Рассчитать" : "Далее"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Paper>
      <CustomizedSnackbars toggle={error} />
    </Container>
  );
}
