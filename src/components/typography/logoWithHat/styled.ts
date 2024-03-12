import { styled } from "@mui/material";

export const StyledHatImage = styled("img")(() => ({
  position: "absolute",
  top: "0",
  left: "0",
  transform: "rotate(-25deg)",
}));

StyledHatImage.defaultProps = {
  width: "16",
  height: "16",
};
