import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import NavBar from './components/NavBar.tsx'
import Container from '@mui/material/Container';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { rawTheme } from "./themes/theme.tsx";

export default function App() {

  return (
    <ThemeProvider theme={rawTheme}>
      <CssBaseline enableColorScheme />
      <NavBar />
      <Container fixed >
        <BrowserRouter>
          <Routes>
            <Route path='/katyusha-project-client' element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}
