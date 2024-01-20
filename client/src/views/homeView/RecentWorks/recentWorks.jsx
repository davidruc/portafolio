import { Box } from "@mui/material";
import "./recentWorks.css";
import { TitleConfig } from "../../../components/title/titleConfiguration";
import { BasicTabs } from "./components/basicTabs";
function RecentWorksView(){
    return (
        <Box>
            <TitleConfig title={"Recent Works"} />
            <BasicTabs/>
        </Box>
    )
}

export {RecentWorksView};