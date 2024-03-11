import {Grid, styled} from "@mui/material";

export const StartContainer = styled(Grid)(() => ({
    display: "grid",
    gridTemplateColumns: "50% auto",
    padding: "100px 150px"
}));

export const StartImage = styled("img")(() => ({
    padding: "100px 0"
}));