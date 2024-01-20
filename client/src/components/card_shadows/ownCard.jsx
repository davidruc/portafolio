import { Box } from "@mui/material"
import "./ownCard.css"

function OwnCard(props){
    const imgUrl = props.imgUrl
    return (
        <Box className="personalCard" sx={{height: props.size + "vh", width: props.size + "vh", backgroundColor: props.bgColor, borderRadius: "15px", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center", padding: 3, color: props.color == 1 ? "white" : ""}}>    
            <img className="imgCard" src={imgUrl} alt="" />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </Box>
    )
};

export {OwnCard}