import { Box } from "@mui/material";
import degree from "../../../../assets/degree.png";
import suitcase from "../../../../assets/suitcase.png";
import "../experience.css";

function BoxContent(props) {
    const selectedImg = props.img == 1 ? degree : suitcase;
  return (
    <Box sx={{display:"flex", flexDirection: "row"}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.2,
        }}
      >
        <img className="iconExp" src={selectedImg} alt="" />
        <div
          style={{
            borderLeft: "2px solid #FFC2D5",
            width: "4px",
            height: "100%",
            borderRadius: "2px",
            marginLeft: "6px",
          }}
        ></div>
      </Box>
      <Box
        sx={{
          paddingLeft: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p className="date">{props.InitDate} - {props.EndDate}</p>
        <h3>{props.kindOf}</h3>
        <p>
          {props.info}
        </p>
      </Box>
    </Box>
  );
}

export {BoxContent}