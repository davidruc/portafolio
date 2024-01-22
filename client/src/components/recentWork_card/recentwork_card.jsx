import { Box } from "@mui/material"
import "./recentwork_card.css"

function RecentWorksCard(props) {
    const img = props.imageUrl;
    return (
        <Box className="flip-card">
            <Box className="flip-card-inner">
                <Box className="flip-card-front" sx={{ width: "250px", height: "210px", backgroundColor: "white", borderRadius: "15px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 3 }}>
                    <h3>{props.descript}</h3>
                    <img src={img} alt="" />
                </Box>
                <Box className="flip-card-back" sx={{  width: "250px", height: "210px", backgroundColor: "white", borderRadius: "15px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 3 }}>
                    <h3>{props.descript}</h3>

                </Box>
            </Box>
        </Box>
    )
}

export { RecentWorksCard }