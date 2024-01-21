import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import VerticalLinearStepper from "../components/VerticalLinearStepper";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="lg" sx={{ my: 2}}>
        <Box>
          <VerticalLinearStepper />
        </Box>
      </Container>
    </React.Fragment>
  );
}
