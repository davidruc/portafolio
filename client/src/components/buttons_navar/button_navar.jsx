import { Button } from "@mui/material";

function ButtonNavar(props) {
  return (
    <Button
      key={props.text}
      onClick={props.onClick}
      sx={{ my: 2, color: "white", display: "block", fontSize: "2vh", textTransform: "none" }}

    >
      {props.text}
    </Button>
  );
}

export {ButtonNavar};