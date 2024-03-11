import {Button, styled} from "@mui/material";

export const LineButton = styled(Button)(() => ({
    color: "rgba(252, 200, 34, 1)",
    maxHeight: "40px",
    border: "2px solid ",
    borderRadius: "0",
    alignSelf: "center",
    padding: "3px 20px",
}));

export const ContainedButton = styled(Button)(() => ({
    borderRadius: "0",
    backgroundColor: "rgba(252, 200, 34, 1)",
    padding: "15px 20px",
    fontWeight: "bold",
    marginRight: "40px",
    color: "white"
}));

export const SimpleButton = styled(Button)(() => ({
    fontWeight: "bold",
    fontSize: "12px",
    color: "orange",
    padding: "0"
}));


