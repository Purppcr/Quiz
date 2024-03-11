import {HeaderBar, HeaderList, HeaderListItem} from "./styled";
import {Grid, ListItemButton} from "@mui/material";
import {LineButton} from "../../buttons/styled";
// @ts-ignore
import Logo from "../Logo";

export default function Header() {
    return (
        <HeaderBar>
            <Grid container justifyContent="space-between">
                <Logo/>
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