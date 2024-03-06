import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CulturesPage from "./pages/CulturesPage.tsx";
import Calculator from "./pages/calculator/Calculator.tsx";
import Wheat from "./pages/calculator/Wheat.tsx";
import Copyright from "./components/common/Copyright.tsx";
import NavBar from "./components/common/NavBar.tsx";
import Container from "@mui/material/Container";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./themes/theme.tsx";
import Home from "./pages/Home.tsx";
import YOUR_COUNTER_ID from "./config";
import YM from "react-yandex-metrika";

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline enableColorScheme />
      <YM
        accounts={[YOUR_COUNTER_ID]}
        options={{
          webvisor: true,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
        }}
        version="2"
      />
      <Container component="main" maxWidth="lg" sx={{ mt: 9 }}>
        <BrowserRouter>
          <NavBar />
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
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}
