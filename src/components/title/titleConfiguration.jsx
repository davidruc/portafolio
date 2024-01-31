import { Box } from "@mui/material";
import "./titleConfiguration.css"
function TitleConfig(props){
    return (

        <Box className= "titleConfig" sx={{
            
            display: "flex",
            marginLeft: {xs: 0 , md: "40vh"},
            justifyContent: { xs: "center", md: "flex-start" },
        }}>
            <h2> {props.title} </h2>
        </Box>
    )
}

export {TitleConfig}