import { Box } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

import { useTranslation } from "react-i18next";

import "./footer.css";
import upArrow from "../../assets/up-arrow.png";

function Footer() {
    const {t} = useTranslation();

    const handleLinkClick = (href) => {
        const targetElement = document.getElementById(href.substring(1));
        if (targetElement) {
        const offset = targetElement.offsetTop ;
        window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    };
    return (
        <Box sx={{backgroundColor: "#024959", height: "29vh", display: "flex", alignItems:"center"}}>
           <Box  sx={{display: "flex", flexDirection: {xs: "column", md: "row"}, alignItems:"center", width: "95%",justifyContent: "space-around"}}>
           <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <p className="textFooter">Copyright © 2024 David Rueda. {t("AllRights")}</p>
                <a className="iconsRef" href="https://www.flaticon.com/free-icons/boots" title="boots icons">Boots icons created by Freepik - Flaticon</a>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column"}}>
                <p>{t("SocialMedia")}</p>
                <Box sx={{display:"flex", gap: "2vh"}}>
                    <a className="aRedes" href="https://www.instagram.com/david.a.rueda.5/" target="_blank"><InstagramIcon/></a>
                    <a className="aRedes" href="https://www.linkedin.com/in/david-rueda-5ba388208/" target="_blank"><LinkedInIcon/></a>
                    <a className="aRedes" href="https://co.pinterest.com/davida_rueda/_created/" target="_blank"><PinterestIcon/></a>
                </Box>
            </Box>
           </Box>
            <Box>
                <button className="buttonGoUp" onClick={()=>handleLinkClick("#home")}>
                    <img className="upArrow" src={upArrow} alt="" srcset="" />
                </button>
            </Box>
           
        </Box>
    );
};

export {Footer};