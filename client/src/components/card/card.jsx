import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgressWithLabel from "../progress_linear/progress_linear_component"
import { ActionButton } from "../action_button/action_button";
import "./card.css"
function MediaControlCard() {

  return (
    <Card className='cardBox' sx={{ display: 'flex', flexDirection: {xs: "column", md: "row"}, alignItems: "center"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: "60vh", maxWidth: "365px", alignItems: "center" }}>
      <CardContent>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis pellentesque, quisque rutrum iaculis vulputate sed ut porttitor praesent cum, conubia </p>  
      </CardContent>
      <Box>
        <ActionButton text="Download CV"/>
      </Box>  
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: "30px" }}>
        
        <LinearProgressWithLabel
          text={"Front-End Development"}
          number={85}
          barColor={"#FFD351"}
        />
        
        <LinearProgressWithLabel
          text={"Back-end Development"}
          number={90}
          barColor={"blue"}
        />
        
        <LinearProgressWithLabel
          text={"Mobile Development"}
          number={70}
          barColor={"blue"}
        />
      </Box>
    </Card>
  );
  
}

export {MediaControlCard};