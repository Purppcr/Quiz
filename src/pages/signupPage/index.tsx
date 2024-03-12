import {
  AcademyImage,
  ImageContainer,
  SignTextfield,
  SignupContainer,
  SignupPageContainer,
  Wrapper,
} from "./styled";
import { Button, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import Hat from "../../assets/images/academyHat.png";
import { ContainedButton, LineButton, SimpleButton } from "../../components/buttons/styled";
import LogoWithHat from "../../components/typography/logoWithHat";

export default function SignupPage() {
  return (
    <Wrapper>
      <SignupPageContainer>
        <SignupContainer>
          <LogoWithHat />
          <Typography mt={5} mb={5}>
            Welcome back!
            <br />
            Please login/Signup to your account.
          </Typography>
          <Grid container flexDirection="column" gap={1}>
            <SignTextfield label="Email address" variant="outlined" />
            <SignTextfield label="Password" variant="outlined" />
          </Grid>
          <Grid container mb={5} justifyContent={"space-between"}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
            <Button sx={{ fontSize: "10px", color: "black" }}>Forgot Password?</Button>
          </Grid>
          <Grid container mb={5}>
            <ContainedButton sx={{ padding: "10px 20px" }}>Login</ContainedButton>
            <LineButton sx={{ padding: "20px 20px" }}>Signup</LineButton>
          </Grid>
          <Grid container sx={{ justifyContent: "space-between", width: "50%" }}>
            <Typography>Or login with</Typography>
            <SimpleButton>Facebook</SimpleButton>
            <SimpleButton>Google</SimpleButton>
          </Grid>
        </SignupContainer>
        <ImageContainer>
          <AcademyImage src={Hat} />
        </ImageContainer>
      </SignupPageContainer>
    </Wrapper>
  );
}
