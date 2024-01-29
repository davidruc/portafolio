import { Box } from "@mui/material";
import "./recentWorks.css";
import { TitleConfig } from "../../../components/title/titleConfiguration";
import { BasicTabs } from "./components/basicTabs";
function RecentWorksView(){
    return (
        <Box sx={{height:"100vh"}}>
            <TitleConfig title={"Recent Works"} />
            <BasicTabs/>
        </Box>
    )
}

export {RecentWorksView};