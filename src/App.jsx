import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const CulturesPage = React.lazy(() => import("./pages/CulturesPage.tsx"));
const Calculator = React.lazy(() =>
  import("./pages/calculator/Calculator.tsx"),
);
const Wheat = React.lazy(() => import("./pages/calculator/Wheat.tsx"));
const Sunflower = React.lazy(() => import("./pages/calculator/Sunflower.tsx"));
const Home = React.lazy(() => import("./pages/Home.tsx"));
import Loader from "./components/common/Loader.tsx";
import Copyright from "./components/common/Copyright.tsx";
import NavBar from "./components/common/NavBar.tsx";
import Container from "@mui/material/Container";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "./themes/theme.tsx";
import { YMInitializer } from "react-yandex-metrika";
import YOUR_COUNTER_ID from "../config.js";

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <YMInitializer
        accounts={[YOUR_COUNTER_ID]}
        options={{ webvisor: true }}
      />
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <NavBar />
        <Box sx={{ mt: 11 }}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route
                path="/home"
                element={
                  <>
                    <Home />
                    <Copyright sx={{ my: 3 }} />
                  </>
                }
              />
              <Route path="/cultures" element={<CulturesPage />} />
              <Route path="/calculator" element={<Calculator />}>
                <Route path="wheat" element={<Wheat />} />
                <Route path="sunflower" element={<Sunflower />} />
              </Route>
            </Routes>
          </Suspense>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}
