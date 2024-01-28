import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.tsx'
import WheatCalculatorOld from './pages/WheatCalculatorOld.tsx'
import WheatCalculator from './pages/WheatCalculator.tsx'
import Copyright from './components/Copyright.tsx'
import NavBar from './components/NavBar.tsx'
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
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home />}></Route>
            <Route path='/wheatcalculatorv1' element={<WheatCalculatorOld />}></Route>
            <Route path='/wheatcalculatorv2' element={<WheatCalculator />}></Route>
          </Routes>
        </BrowserRouter>
        <Copyright sx={{ my: 4 }} />
      </Container>
    </ThemeProvider>
  )
}
