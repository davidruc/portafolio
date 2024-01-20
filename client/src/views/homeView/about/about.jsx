import { Box } from "@mui/material";
import { MediaControlCard } from "../../../components/card/card";
import me from "../../../assets/skyProvisional.jpeg";
import {ButtonStats} from "../buttons_stats/buttons_stats"
import "./about.css";
import { TitleConfig } from "../../../components/title/titleConfiguration";

export default function AboutMe() {
  return (
    <>
        <Box className="about" sx={{ height: {xs: "100%", lg: "65%", xl: "55%"},  marginBottom:{ xs: 15, md: 10, lg: 5 }  ,marginTop: { xs: 15, md: 10, lg: 5 }, }}>
        <TitleConfig title={"About me"} />  
        <Box
            sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            gap: 4,
            }}
        >
            <Box
            sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
            }}
            >
            <img src={me} alt="" className="imagenAbout" />
            </Box>
            <MediaControlCard />
            
        </Box>
        <ButtonStats/>   
        </Box>
        
    </>
  );
}
