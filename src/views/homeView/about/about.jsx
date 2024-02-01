import { Box } from "@mui/material";
import { MediaControlCard } from "../../../components/card/card";
import me from "../../../assets/profilePicture.png";
import {ButtonStats} from "../buttons_stats/buttons_stats"
import "./about.css";
import { TitleConfig } from "../../../components/title/titleConfiguration";
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <>
        <Box className="about" sx={{ height: {xs: "100%", lg: "65%", xl: "55%"},  marginY: "7vh"  }}>
        <TitleConfig title={t('AboutMe')} />  
        <Box
            sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            gap: "4vh",
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
