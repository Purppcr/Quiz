import {Box, Grid, styled, TextField} from "@mui/material";

export const Wrapper = styled(Box)(() => ({
    width: "100%",
    height: "100%",
    background: "linear-gradient(to right, white, rgba(252, 200, 34, 0.7))"
}));
export const SignupPageContainer = styled(Grid)(() => ({
    textAlign: "center",
    display: "grid",
    gridTemplateColumns: "50% auto",
}));
export const SignupContainer = styled(Grid)(() => ({
    padding: "100px 50px"
}));

export const SignTextfield = styled(TextField)(() => ({
    width: "100%",
    borderLeftColor: "yellow",
    "&:onclick": {
        borderLeft: "1rem solid",
    },
}));

export const AcademyImage = styled("img")(() => ({
    padding: "100px 0",
    maxWidth: "500px"
}));

export const ImageContainer = styled(Grid)(() => ({

}));
