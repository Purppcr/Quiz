import { Box, Typography } from "@mui/material";
import HatImage from "../../../assets/images/academyHat.png";
import { StyledHatImage } from "./styled";

function LogoWithHat() {
  return (
    <Box position="relative" maxWidth="max-content">
      <StyledHatImage src={HatImage} alt="QuizGrad hat image" />
      <Typography variant="h4">
        <Box component="span">Quiz</Box>
        <Box component="span" color="yellow">
          Grad
        </Box>
      </Typography>
    </Box>
  );
}

export default LogoWithHat;
