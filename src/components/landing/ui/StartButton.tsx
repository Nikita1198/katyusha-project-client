import { Button, styled } from "@mui/material";
import React from "react";

const MyButton = styled(Button)({
  background:
    " linear-gradient(to left top, #ffa726, #c59d07, #8f8f04, #5f7d13, #33691e);",
  border: 0,
  borderRadius: 3,
  height: 48,
  padding: "0 70px",
});

export default function StartButton({ ...props }) {
  return <MyButton {...props}>{props.children}</MyButton>;
}
