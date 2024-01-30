import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CoffeeMakerTwoToneIcon from '@mui/icons-material/CoffeeMakerTwoTone';
import HandshakeTwoToneIcon from '@mui/icons-material/HandshakeTwoTone';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import { Box } from "@mui/material";
import { useTranslation } from 'react-i18next';

import "./buttons_stats.css"

function ButtonStats(){

    const { t } = useTranslation();

    return (
        <Box sx={{ marginTop: 2}}>
             <Box className='typeOfStat' sx={{ display: "flex", justifyContent:"center", flexWrap: "wrap",gap: {xs:5, md: "10vh", xxl: "15vh"}, padding: "10px"}}>
            <Box sx={{display:"flex", alignItems:"center", justifyContent: "flex-start",width: "180px"}}>
                <ThumbUpIcon className='Statsicons' fontSize='large'/>
                <Box>
                    <h3>34</h3>
                    <p>{t('ProjectsCompleted')}</p>
                </Box>
            </Box>
            <Box sx={{display:"flex", alignItems:"center", justifyContent: "flex-start",width: "180px"}}>
                <CoffeeMakerTwoToneIcon className='Statsicons' fontSize='large'/>
                <Box>
                    <h3>812</h3>
                    <p>{t('CupCoffe')}</p>
                </Box>
            </Box>
            <Box sx={{display:"flex", alignItems:"center", justifyContent: "flex-start",width: "180px"}}>
                <HandshakeTwoToneIcon className='Statsicons' fontSize='large'/>
                <Box>
                    <h3>10</h3>
                    <p>{t('SatisfiedClients')}</p>
                </Box>
            </Box>
            <Box sx={{display:"flex", alignItems:"center", justifyContent: "flex-start",width: "180px"}}>
                <WorkspacePremiumTwoToneIcon className='Statsicons' fontSize='large'/>
                <Box>
                    <h3>2</h3>
                    <p>{t('WinnedHackatons')}</p>
                </Box>
            </Box>
        </Box>
        </Box>

       
    );
}

export {ButtonStats};