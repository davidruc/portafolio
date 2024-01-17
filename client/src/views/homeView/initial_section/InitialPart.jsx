import { Box } from "@mui/material";
import logo from "../../../assets/logo.png";
import {ListOfIcons} from "../../../components/list_of_icons/icons";
import {ActionButton} from "../../../components/action_button/action_button";

export default function InitialPart() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <img src={logo} alt="" className="imagenCentral" />
      
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column"}}
      >
        <h1 className="name">David Rueda</h1>
        <p className="presentation">I'm a fullStack Developer</p>
        <ListOfIcons />
      </Box>

      <ActionButton text="Hire me" />
    </Box>
  );
}
