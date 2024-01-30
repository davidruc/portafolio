import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgressWithLabel from "../progress_linear/progress_linear_component";
import "./card.css";

import { useTranslation } from 'react-i18next';

function MediaControlCard() {
  const { t } = useTranslation();
  const pathCv = "../../../public/cv.pdf";
  return (
    <Card className='cardBox' sx={{ display: 'flex', flexDirection: {xs: "column", md: "row"}, alignItems: "center"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column',  width: "60vh", maxWidth: "365px", alignItems: "center" }}>
      <CardContent>
        <p className='pText'>{t("textAboutMe")}</p>  
      </CardContent>
      <Box>
        <a className='cvButton' href={pathCv} download="curriculum.pdf">
          Descargar PDF
        </a>
      </Box>  
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: "30px" }}>
        
        <LinearProgressWithLabel
          text={t('diseñoWeb')}
          number={95}
          barColor={"#FFD351"}
        />
        
        <LinearProgressWithLabel
          text={t('mobileDesing')}
          number={75}
          barColor={"blue"}
        />
        
        <LinearProgressWithLabel
          text={t('customized')}
          number={100}
          barColor={"blue"}
        />
      </Box>
    </Card>
  );
  
}

export {MediaControlCard};