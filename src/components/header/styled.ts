import {List, ListItem, styled} from "@mui/material";

export const HeaderBar = styled("header")(() => ({
    background: "white",
    padding: "15px 10px 15px 20px",
    borderBottom: "ridge"
    // position: "sticky",
}));

export const Image = styled("img")(() => ({
    position: "absolute",
    top: "15px",
    transform: "rotate(-25deg)",
    left: "15px",
    maxHeight: "16px"
}));

export const HeaderList = styled(List)(() => ({
    display: "flex",
    flexDirection: "row",
    color: "grey",
    padding: "0",

}));

export const HeaderListItem = styled(ListItem)(() => ({
    padding: "0",

    "& .MuiListItemButton-root": {
        minWidth: "max-content",

        "&:hover": {
            background: "white",
        },
    },
}));