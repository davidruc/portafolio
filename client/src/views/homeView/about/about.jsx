import { Box } from "@mui/material";
import {MediaControlCard} from "../../../components/card/card";
import me from "../../../assets/skyProvisional.jpeg";
import "./about.css";

export default function AboutMe() {
    return (
        <Box className="about" sx={{height: {xs: "80vh", sm: "50vh"}}}>
            <Box sx={{marginTop: {xs: 15, md: 10, lg: 5}, display: 'flex', marginLeft:{xs: 0, md: 10, lg: 30}, justifyContent: {xs: "center", md:"flex-start"} }}>
                <h2>About Me:</h2>
            </Box>
            <Box sx={{display: "flex", flexDirection:{xs: "column", md: "row"}, justifyContent: "center", gap: 4}}>
                
                <Box sx={{display: 'flex', justifyContent: {xs: "center", md:"flex-start"}}}>
                    <img src={me} alt="" className="imagenAbout" />
                </Box>
                <MediaControlCard/>
            </Box>
        
        </Box>
    )
}