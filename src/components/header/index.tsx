import {HeaderBar, HeaderList, HeaderListItem, Image} from "./styled";
import {Grid, ListItemButton, Typography} from "@mui/material";
import {LineButton} from "../../buttons/styled";
// @ts-ignore
import Hat from "../../assets/image/academyHat.png"

export default function Header() {
    return (
        <HeaderBar>
            <Grid container justifyContent="space-between">
                <Grid alignSelf="center">
                    <Image src={Hat}/>
                    <Typography variant="h4">
                        QuizGrad
                    </Typography>
                </Grid>
                <HeaderList>
                    <HeaderListItem>
                        <ListItemButton>How it Works?</ListItemButton>
                    </HeaderListItem>
                    <HeaderListItem>
                        <HeaderListItem>
                            <ListItemButton>Features</ListItemButton>
                        </HeaderListItem>
                    </HeaderListItem>
                    <HeaderListItem>
                        <ListItemButton>About us</ListItemButton>
                    </HeaderListItem>
                </HeaderList>
                <LineButton>Login</LineButton>
            </Grid>
        </HeaderBar>
    )
}