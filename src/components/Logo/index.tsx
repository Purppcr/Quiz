import {Image} from "../header/styled";
// @ts-ignore
import Hat from "../../assets/image/academyHat.png";
import {Grid, Typography} from "@mui/material";

export default function Logo() {
    return (
        <Grid alignSelf="center">
            <Image src={Hat}/>
            <Typography variant="h4">
                QuizGrad
            </Typography>
        </Grid>
    )
}