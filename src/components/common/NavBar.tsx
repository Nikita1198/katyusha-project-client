import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const pages = [
  {
    title: "Новости",
    url: "https://fugustim.ru/page12469998.html",
    external: true,
  },
  { title: "Семена", url: "/", external: false },
  { title: "Удобрения", url: "https://fugustim.ru/", external: true },
  { title: "Главная", url: "/", external: false },
];
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

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <HideOnScroll {...props}>
      <AppBar component="nav" elevation={2}>
        <Container maxWidth="lg">
          <Toolbar
            variant="dense"
            disableGutters
            sx={{ justifyContent: "center", minHeight: 25, height: 66 }}
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
                overflow: "visible",
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
                {pages.map((page) =>
                  page.external ? (
                    <MenuItem
                      key={page.title}
                      onClick={handleCloseNavMenu}
                      sx={{ fontFamily: "Comfortaa" }}
                    >
                      <Typography
                        component="a"
                        href={page.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        textAlign="center"
                        sx={{ textDecoration: "none", color: "inherit" }}
                      >
                        {page.title}
                      </Typography>
                    </MenuItem>
                  ) : (
                    <MenuItem
                      key={page.title}
                      onClick={handleCloseNavMenu}
                      component={RouterLink}
                      to={page.url}
                      sx={{ fontFamily: "Comfortaa" }}
                    >
                      <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>
                  ),
                )}
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
                  overflow: "visible",
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
                height: "100%",
                flexDirection: "row-reverse",
                display: { xs: "none", md: "flex" },
                pr: 4,
              }}
            >
              {pages.map((page) =>
                page.external ? (
                  <Box
                    key={page.title}
                    sx={{
                      m: 0,
                      p: 0,
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        color: "#black",
                      },
                    }}
                  >
                    <a
                      href={page.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        sx={{
                          px: 2,
                          color: "white",
                          display: "block",
                          fontFamily: "Comfortaa",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <Typography textAlign="center">{page.title}</Typography>
                      </Button>
                    </a>
                  </Box>
                ) : (
                  <Box
                    key={page.title}
                    sx={{
                      m: 0,
                      p: 0,
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        color: "#black",
                      },
                    }}
                  >
                    <Button
                      key={page.title}
                      component={RouterLink}
                      to={page.url}
                      sx={{
                        px: 2,
                        borderRadius: 0,
                        width: "100%",
                        height: "100%",
                        color: "white",
                        fontFamily: "Comfortaa",
                      }}
                    >
                      <Typography textAlign="center" sx={{ width: "100%" }}>
                        {page.title}
                      </Typography>
                    </Button>
                  </Box>
                ),
              )}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Анализатор удобрений компании АМРИТЭКС">
                <IconButton sx={{ p: 0 }}>
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
