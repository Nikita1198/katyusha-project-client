import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CulturesPage from './pages/CulturesPage.tsx'
import Calculator from './pages/calculator/Calculator.tsx'
import Wheat from './pages/calculator/Wheat.tsx'
import Copyright from './components/common/Copyright.tsx'
import NavBar from './components/common/NavBar.tsx'
import Container from '@mui/material/Container';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { rawTheme } from "./themes/theme.tsx";

export default function App() {

  return (
    <ThemeProvider theme={rawTheme}>
      <CssBaseline enableColorScheme />
      <Container component="main" maxWidth="lg" sx={{ mt: 11 }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/cultures" />} />
            <Route path="/cultures" element={<CulturesPage />} />
            <Route path='/calculator' element={<Calculator />}>
              <Route path='wheat' element={<Wheat />} />
            </Route>
          </Routes>
          <Copyright sx={{ my: 3 }} />
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}
