import { Box } from "@mui/material"
import "./experience.css"

import { TitleConfig } from "../../../components/title/titleConfiguration";
import { CardContent } from "./components/cardContent";


const tecnologies = [
    "https://cdn-icons-png.flaticon.com/512/753/753244.png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
    "https://img.icons8.com/?size=512&id=SDVmtZ6VBGXt&format=png",
    "https://img.icons8.com/?size=256&id=8rKdRqZFLurS&format=png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    "https://img.icons8.com/?size=512&id=QERhMe8qpblP&format=png",
    "https://img.icons8.com/?size=512&id=rHpveptSuwDz&format=png",
    "https://img.icons8.com/?size=256&id=7I3BjCqe9rjG&format=png",
    "https://img.icons8.com/?size=512&id=7AFcZ2zirX6Y&format=png",
    "https://img.icons8.com/?size=512&id=zfHRZ6i1Wg0U&format=png",
    "https://img.icons8.com/?size=256&id=HF4xGsjDERHf&format=png",
    "https://img.icons8.com/?size=512&id=uJM6fQYqDaZK&format=png",
    "https://img.icons8.com/?size=512&id=13441&format=png",
    "https://img.icons8.com/?size=512&id=fAMVO_fuoOuC&format=png"
];


function ExperienceSection(){
    
    
    return (
        <Box className="experienceSection">
            <TitleConfig 
                title={"Experience"}
            />
            
            <CardContent/>
            
                <Box sx={{
                    display: "flex",
                    gap: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingX: {xs: 2 , md: 15, lg: "40vh" },
                    
                    marginY: { xs: 10 },
                    flexWrap: "wrap",
                    height: "24vh",
                    overflowX: "auto",
                    '@media (max-width: 700px)': {
                    flexDirection: "column", // Cambiar a columnas en pantallas más pequeñas
                    },
                }}> 
                    
                    {
                        tecnologies.map((tecnologie, index) => (
                            <img key={index} className="tecnologies" src={tecnologie} alt="" />
                        ))
                    }
                </Box>
        </Box>
    )
}

export { ExperienceSection }