import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/system";
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

const pages = [{ title: "Главная", component: "/" }];
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

const CustomLogo = styled("img")({
  width: 85,
  height: 55,
  "@media (max-width:900px)": {
    width: 64,
    height: 48,
  },
});

const styles = {
  customizeToolbar: {
    minHeight: 36,
  },
};

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
      <AppBar component="nav" elevation={1}>
        <Container maxWidth="xl">
          <Toolbar
            variant="dense"
            disableGutters
            sx={{ justifyContent: "center", minHeight: 20, height: 56 }}
          >
            <Typography
              variant="h3"
              noWrap
              component={RouterLink}
              to={{
                pathname: "/",
              }}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 400,
                fontFamily: "Marck Script",
                letterSpacing: ".05rem",
                textDecoration: "none",
                fontSize: 40,
                alignItems: "center",
              }}
            >
              <Box
                component="span"
                sx={{ lineHeight: "normal", alignSelf: "flex-end" }}
              >
                Катюша
              </Box>
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
                component={RouterLink}
                to={{
                  pathname: "/",
                }}
                sx={{
                  display: { xs: "flex", md: "none" },
                  fontWeight: 400,
                  fontFamily: "Marck Script",
                  letterSpacing: ".05rem",
                  textDecoration: "none",
                  alignItems: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{ lineHeight: "normal", alignSelf: "flex-end" }}
                >
                  Катюша
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                flexDirection: "row-reverse",
                display: { xs: "none", md: "flex" },
                pr: 4,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.title}
                  component={RouterLink}
                  to={{
                    pathname: page.component,
                  }}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Comfortaa",
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      pt: "3px",
                    }}
                  >
                    {page.title}
                  </Typography>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Анализатор удобрений компании АМРИТЭКС">
                <IconButton
                  sx={{ p: 0 }}
                  // onClick={handleOpenUserMenu}
                >
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
