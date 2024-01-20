import { Box } from "@mui/material"
import "./experience.css"

import { TitleConfig } from "../../../components/title/titleConfiguration";
import { CardContent } from "./components/cardContent";
function ExperienceSection(){
    
    
    return (
        <Box className="experienceSection">
            <TitleConfig 
                title={"Experience"}
            />
            
            <CardContent/>

        </Box>
    )
}

export { ExperienceSection }