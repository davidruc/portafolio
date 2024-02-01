import { Box } from "@mui/material";
import logo from "../../../assets/logo.png";
import {ListOfIcons} from "../../../components/list_of_icons/icons";
import {ActionButton} from "../../../components/action_button/action_button";
import { useTranslation } from 'react-i18next';

export default function InitialPart() {

  const { t } = useTranslation();


  const NAVBAR_HEIGHT = 130; // Ajusta esto según la altura de tu navbar fijo

  const handleLinkClick = (href) => {
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      const offset = targetElement.offsetTop - NAVBAR_HEIGHT;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2vh",
      }}
    >
      <img src={logo} alt="" className="imagenCentral" />
      
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column"}}
      >
        <h1 className="name">David Rueda</h1>
     
          <p className="presentation">{t('welcome')}</p>
    
        <ListOfIcons />
      </Box>
      <ActionButton  onClick={()=> handleLinkClick('#contact')} text={t('hireMe')} />
     
    </Box>
  );
}
