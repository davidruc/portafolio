import { Box } from "@mui/material";
import logo from "../../../assets/logo.png";
import {ListOfIcons} from "../../../components/list_of_icons/icons";
import {ActionButton} from "../../../components/action_button/action_button";
import { useTranslation } from 'react-i18next';

export default function InitialPart() {

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
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

      <ActionButton text={t('hireMe')} />
    </Box>
  );
}
