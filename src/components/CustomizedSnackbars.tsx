import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function CustomizedSnackbars({ toggle }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };

  return (
    <div>
      <Snackbar open={toggle} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={() => handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Заполните все поля!
        </Alert>
      </Snackbar>
    </div>
  );
}
