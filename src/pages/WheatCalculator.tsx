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
import Autumn from "../components/Autumn";
import Spring from "../components/Spring";
import store from "../stores/calculationStore";
import CustomizedSnackbars from "../components/CustomizedSnackbars";

const steps = ["Параметры поля", "Осень", "Весна"];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <FieldParameters />;
    case 1:
      return <Autumn />;
    case 2:
      return <Spring />;
    default:
      throw new Error("Unknown step");
  }
}

export default function WheatCalculator() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [error, setError] = React.useState(false);
  const [reasult, setResult] = React.useState(0);

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
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container maxWidth="md" sx={{ my: 12 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography
          sx={{ typography: { sm: "h4", xs: "h5" } }}
          component="h1"
          variant="h4"
          align="center"
        >
          Озимая пшеница
        </Typography>
        <Stepper
          activeStep={activeStep}
          sx={{
            pt: 3,
            pb: 5,
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
              <Box sx={{ m: 1, minHeight: "360px" }}>
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
