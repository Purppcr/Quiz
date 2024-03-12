import { Box, Grid, styled, TextField } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  background: `linear-gradient(to right, white, rgba(252, 200, 34, 0.7))`,
}));
export const SignupPageContainer = styled(Grid)(({ theme }) => ({
  textAlign: "center",
  display: "grid",
  gridTemplateColumns: "50% auto",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "auto",
    gridTemplateRows: "auto auto",
  },
}));
export const SignupContainer = styled("form")(() => ({
  padding: "100px 50px",
}));

export const SignTextfield = styled(TextField)(() => ({
  width: "100%",
  borderLeftColor: "yellow",

  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderLeftColor: "yellow",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    // backgroundColor: "red",
  },
}));

export const AcademyImage = styled("img")(() => ({
  padding: "100px 0",
  maxWidth: "500px",
}));

export const ImageContainer = styled(Grid)(() => ({}));
