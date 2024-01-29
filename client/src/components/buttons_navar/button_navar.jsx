import { Button } from "@mui/material";
import './ButtonNavar.css';
import React from "react";

function ButtonNavar(props) {
   
  return (
    <Button 
      className={`ButtonNavar ${props.activeSection === props.href.substring(1) ? 'active' : ''}`}
      key={props.text}
      onClick={
        props.onClick
      }
      sx={{ my: 2, display: "block", fontSize: "2vh", textTransform: "none" }}
      
    >
      {props.text}
    </Button>
  );
}

export {ButtonNavar};