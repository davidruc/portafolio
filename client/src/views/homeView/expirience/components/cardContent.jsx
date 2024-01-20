import { BoxContent } from "./contentCard";
import { Box } from "@mui/material";

function CardContent() {
    return (
        
        <Box sx={{display: "flex", flexWrap: "wrap", gap: 5, px: "10px", justifyContent:"center", marginBottom: 5}}> 
            <Box className="experienceBox" sx={{display: "flex", flexDirection: "column",backgroundColor: "white", height: "100%", width: {xs: "320px", md: "40vh" , lg: "50vh"}, padding: "30px"}}>
                    <BoxContent
                        img={1}
                        InitDate={2018}
                        EndDate={"present"}
                        kindOf={"Academic Degree"}
                        info={"La Salle Bacheleor"}
                    />
                    <BoxContent
                        img={0}
                        InitDate={2022}
                        EndDate={2023}
                        kindOf={"Academic Degree"}
                        info={"Campuslands Degree"}
                    />

                    <BoxContent
                        img={0}
                        InitDate={2022}
                        EndDate={2023}
                        kindOf={"Academic Degree"}
                        info={"Campuslands Degree"}
                    />
            </Box>
            <Box className="experienceBox" sx={{display: "flex", flexDirection: "column",backgroundColor: "white", height: "100%", width:{xs: "320px", md: "40vh", lg: "50vh"}, padding: "30px"}}>
                <BoxContent
                    img={1}
                    InitDate={2018}
                    EndDate={"present"}
                    kindOf={"Academic Degree"}
                    info={"La Salle Bacheleor"}
                />
                <BoxContent
                    img={0}
                    InitDate={2022}
                    EndDate={2023}
                    kindOf={"Academic Degree"}
                    info={"Campuslands Degree"}
                />

                <BoxContent
                    img={0}
                    InitDate={2022}
                    EndDate={2023}
                    kindOf={"Academic Degree"}
                    info={"Campuslands Degree"}
                />
            </Box>
        </Box>
    )
}

export {CardContent}