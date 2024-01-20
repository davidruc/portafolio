import { Box } from "@mui/material";
import {OwnCard} from "../../../components/card_shadows/ownCard"
import "./services_section.css"
import { TitleConfig } from "../../../components/title/titleConfiguration";

function ServicesSection (){
    return (
        <Box className="servicesInfo" sx={{marginY: { xs: 15, md: 10, xl: 5 }}}>
            <TitleConfig title={"Services"} />
            <Box sx={{display: "flex", flexDirection: {xs: "column", md: "row"}, gap: 4, alignItems: "center" ,justifyContent: "center"   }}>
            <OwnCard
                color={1}
                size={30}
                imgUrl={"https://cdn-icons-png.flaticon.com/512/8901/8901502.png"}
                bgColor={"#6C6CE6"}
                title={"Static web Page"}
                text={"This is a really basic service were you can mada any front page."}
            />
            <OwnCard
                color={""}
                size={30}
                imgUrl={"https://cdn-icons-png.flaticon.com/512/2498/2498098.png"}
                bgColor={"#F8D74C"}
                title={"Dynamic Page"}
                text={"Functional, original and prettie, this pack have everything."}
            />
            <OwnCard
                color={1}
                size={30}
                imgUrl={"https://cdn-icons-png.flaticon.com/512/5643/5643764.png"}
                bgColor={"#EC1C24"}
                title={"Aplication"}
                text={"This is a really basic service were you can mada any front page."}
            />
            </Box>
            <Box sx={{display: "flex", justifyContent: "center", pt: 3}}>
                {/*TODO: convertir esta parte en una lista de elementos para poder poner text a text y tener el redireccionamiento.  */}
                <p>Locking for a custom jod? Click here to contact me    </p>
            </Box>
        </Box>
    );
};

export {ServicesSection};