import {StartContainer, StartImage} from "./styled";
import {Grid, Typography} from "@mui/material";
// @ts-ignore
import Startimage from "../../assets/image/StartImg.png"
import {ContainedButton} from "../../buttons/styled";

export default function StartPage() {
    return (
        <StartContainer>
            <Grid>
                <Typography variant="h2" mb={5}>
                    Learn<br/>new concepts<br/>for each question
                </Typography>
                <Typography sx={{borderLeft: "solid", paddingLeft: "10px", mb: "50px"}}>
                    We help you prepare for exams and quizes
                </Typography>
                <Grid container>
                    <ContainedButton variant="contained">Start solving</ContainedButton>
                    <Typography sx={{color: "rgba(252, 200, 34, 1)", alignSelf: "center", fontSize: "22px"}}>know more</Typography>
                </Grid>
            </Grid>
            <StartImage src={Startimage}/>
        </StartContainer>
    )
}