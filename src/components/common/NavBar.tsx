import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import { styled } from '@mui/system';
import {
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import PropTypes from "prop-types";

const pages = [{ title: "Калькулятор урожайности", component: "/cultures" }];
const settings = ["Результаты"];

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const CustomLogo = styled('img')({
  width: 100,
  height: 65,
  '@media (max-width:900px)': {
    width: 64,
    height: 48,
  },
});

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function NavBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <HideOnScroll {...props}>
      <AppBar component="nav">
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'center' }}>
            <Typography
              variant="h3"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 400,
                fontFamily: "Marck Script",
                letterSpacing: ".1rem",
                textDecoration: "none",
                alignItems: "center"
              }}
            >
              <Box component="span" sx={{ display: 'inline-flex', height: '1em', alignItems: 'flex-end' }}>
                <img
                  alt="К"
                  src="/images/k.png"
                  style={{ height: '100%', width: 'auto' }}
                  loading="lazy"
                />
              </Box>
              <Box component="span" sx={{ lineHeight: 'normal', alignSelf: 'flex-end' }}>атюша</Box>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    component={RouterLink}
                    sx={{ fontFamily: "Comfortaa" }}
                    to={{
                      pathname: page.component,
                    }}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Typography
              variant="h4"
              noWrap
              component="a"
              sx={{
                display: { xs: "flex", md: "none" },
                fontWeight: 400,
                fontFamily: "Marck Script",
                letterSpacing: ".1rem",
                textDecoration: "none",
                alignItems: "center"
              }}
            >
              <Box component="span" sx={{ display: 'inline-flex', height: '1em', alignItems: 'flex-end' }}>
                <img
                  alt="К"
                  src="/images/k.png"
                  style={{ height: '100%', width: 'auto' }}
                  loading="lazy"
                />
              </Box>
              <Box component="span" sx={{ lineHeight: 'normal', alignSelf: 'flex-end' }}>атюша</Box>
            </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.title}
                  component={RouterLink}
                  to={{
                    pathname: page.component,
                  }}
                  sx={{ my: 2, color: "white", display: "block", fontFamily: "Comfortaa" }}
                >
                  <Typography textAlign="center" sx={{ pt: '3px' }}>{page.title}</Typography>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Анализатор удобрений компании АМРИТЭКС">
                <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
                  <CustomLogo
                    alt="Анализатор удобрений"
                    src="/images/logo.png"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
