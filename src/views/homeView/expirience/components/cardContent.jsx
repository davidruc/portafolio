import { BoxContent } from "./contentCard";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

function CardContent() {
    const {t} = useTranslation();

    return (
        
        <Box sx={{display: "flex", flexWrap: "wrap", gap: 5, px: "10px", justifyContent:"center", marginBottom: 5}}> 
            <Box className="experienceBox" sx={{display: "flex", flexDirection: "column",backgroundColor:  "#F5F5F5", height: "100%", width: {xs: "320px", md: "40vh" , lg: "50vh"}, padding: "30px"}}>
                    <BoxContent
                        img={1}
                        InitDate={2011}
                        EndDate={2017}
                        kindOf={t("bachiller")}
                        info={t("academic")}
                    />
                    <BoxContent
                        img={1}
                        InitDate={2018}
                        EndDate={t("present")}
                        kindOf={t("physics")}
                        info={t("infoPhysics")}
                     />
                    <BoxContent
                        img={1}
                        InitDate={2022}
                        EndDate={2023}
                        kindOf={"Bootcamp: Campuslands"}
                        info={t("academic")}
                    />

                    
            </Box>
            <Box className="experienceBox" sx={{display: "flex", flexDirection: "column",backgroundColor:"#F5F5F5", height: "100%", width:{xs: "320px", md: "40vh", lg: "50vh"}, padding: "30px"}}>
                
                <BoxContent
                    img={1}
                    InitDate={2022}
                    EndDate={t("present")}
                    kindOf={"Udemy - Platzi"}
                    info={t("certified")}
                />
                <BoxContent
                    img={0}
                    InitDate={2022}
                    EndDate={t("present")}
                    kindOf={t("FreelanceWeb")}
                    info={t("workExp")}
                />

                <BoxContent
                    img={0}
                    InitDate={2023}
                    EndDate={t("present")}
                    kindOf={t("MobileFreelance")}
                    info={t("workExp")}
                />
            </Box>
        </Box>
    )
}

export {CardContent}