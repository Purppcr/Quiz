import { HeaderBar, HeaderList, HeaderListItem } from "./styled";
import { Grid, ListItemButton } from "@mui/material";
import { LineButton } from "../buttons/styled";
import LogoWithHat from "../typography/logoWithHat";
import { menu } from "./constants";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigation = useNavigate();

  return (
    <HeaderBar>
      <Grid container justifyContent="space-between">
        <LogoWithHat />
        <HeaderList>
          {menu.map((item) => (
            <HeaderListItem key={item.title}>
              <ListItemButton>{item.title}</ListItemButton>
            </HeaderListItem>
          ))}
        </HeaderList>
        <LineButton onClick={() => navigation("/sign-up")}>Login</LineButton>
      </Grid>
    </HeaderBar>
  );
}
