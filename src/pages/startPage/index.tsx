import { StartContainer, StartImage } from "./styled";
import { ButtonBase, Grid, Typography } from "@mui/material";
import Startimage from "../../assets/images/StartImg.png";
import { ContainedButton } from "../../components/buttons/styled";
import Header from "../../components/header";

export default function StartPage() {
  return (
    <>
      <Header />
      <StartContainer>
        <Grid>
          <Typography variant="h2" mb={5}>
            Learn
            <br />
            new concepts
            <br />
            for each question
          </Typography>
          <Typography sx={{ borderLeft: "solid", paddingLeft: "10px", mb: "50px" }}>
            We help you prepare for exams and quizes
          </Typography>
          <Grid container>
            <ContainedButton variant="contained">Start solving</ContainedButton>
            <ButtonBase>
              <Typography sx={{ color: "rgba(252, 200, 34, 1)", alignSelf: "center", fontSize: "22px" }}>
                know more
              </Typography>
            </ButtonBase>
          </Grid>
        </Grid>
        <StartImage src={Startimage} />
      </StartContainer>
    </>
  );
}
