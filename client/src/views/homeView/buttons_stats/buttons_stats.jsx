import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CoffeeMakerTwoToneIcon from '@mui/icons-material/CoffeeMakerTwoTone';
import HandshakeTwoToneIcon from '@mui/icons-material/HandshakeTwoTone';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import { Box } from "@mui/material";
import "./buttons_stats.css"

function ButtonStats(){
    return (
        <Box sx={{ marginTop: 2}}>
             <Box className='typeOfStat' sx={{ display: "flex", justifyContent:"center", flexWrap: "wrap",gap: {xs:5, md: 10}, padding: "10px"}}>
            <Box sx={{display:"flex", alignItems:"center", justifyContent: "center",width: "180px"}}>
                <ThumbUpIcon className='Statsicons' fontSize='large'/>
                <Box>
                    <h3>14</h3>
                    <p>Projects Completed</p>
                </Box>
            </Box>
            <Box sx={{display:"flex", alignItems:"center", justifyContent: "center",width: "180px"}}>
                <CoffeeMakerTwoToneIcon className='Statsicons' fontSize='large'/>
                <Box>
                    <h3>212</h3>
                    <p>Cup of coffe</p>
                </Box>
            </Box>
            <Box sx={{display:"flex", alignItems:"center", justifyContent: "center",width: "180px"}}>
                <HandshakeTwoToneIcon className='Statsicons' fontSize='large'/>
                <Box>
                    <h3>3</h3>
                    <p>Satisfied clients</p>
                </Box>
            </Box>
            <Box sx={{display:"flex", alignItems:"center", justifyContent: "center",width: "180px"}}>
                <WorkspacePremiumTwoToneIcon className='Statsicons' fontSize='large'/>
                <Box>
                    <h3>2</h3>
                    <p>Winned Hackatons</p>
                </Box>
            </Box>
        </Box>
        </Box>

       
    );
}

export {ButtonStats};