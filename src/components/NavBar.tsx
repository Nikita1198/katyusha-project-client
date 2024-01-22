import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function NavBar() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Tooltip title="Анализатор удобрений компании АМРИТЭКС">
            <IconButton sx={{ p: 0 }}>
              <Link href="https://Fugustim.ru">
                <Avatar
                  alt="Анализатор удобрений"
                  src="https://static.tildacdn.com/tild3531-3966-4164-b866-343430646334/Armitex_2.png"
                  sx={{ width: 66, height: 66 }}
                />
              </Link>
            </IconButton>
          </Tooltip>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 2,
              display: { xs: "flex" },
              fontWeight: 400,
              fontFamily: "Marck Script",
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Катюша
          </Typography>
        </Toolbar>
      </AppBar>
      <Tabs
        sx={{ backgroundColor: "secondary.light" }}
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Озимая пшеница"/>
      </Tabs>
    </>
  );
}
