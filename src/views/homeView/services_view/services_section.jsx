import { Box } from "@mui/material";
import {OwnCard} from "../../../components/card_shadows/ownCard"
import "./services_section.css"
import { TitleConfig } from "../../../components/title/titleConfiguration";
import { useTranslation } from 'react-i18next';

function ServicesSection (){
    const { t } = useTranslation();
    return (
        <Box className="servicesInfo" sx={{marginY: { xs: 15, md: 10, xl: 5 }}}>
            <TitleConfig title={t('Services')} />
            <Box sx={{display: "flex", flexDirection: {xs: "column", md: "row"}, gap: "4vh", alignItems: "center" ,justifyContent: "center"   }}>
            <OwnCard
                color={1}
                size={30}
                imgUrl={"https://cdn-icons-png.flaticon.com/512/8901/8901502.png"}
                bgColor={"#6C6CE6"}
                title={t("StaticWP")}
                text={t("infoSWP")}
            />
            <OwnCard
                color={""}
                size={30}
                imgUrl={"https://cdn-icons-png.flaticon.com/512/2498/2498098.png"}
                bgColor={"#F8D74C"}
                title={t("DynamicWP")}
                text={t("infoDWP")}
            />
            <OwnCard
                color={1}
                size={30}
                imgUrl={"https://cdn-icons-png.flaticon.com/512/5643/5643764.png"}
                bgColor={"#EC1C24"}
                title={t("Aplication")}
                text={t("infoApp")}
            />
            </Box>
            <Box className="ContactMe" sx={{display: "flex", flexDirection: {xs: "column", md: "row"}, justifyContent: "center", alignItems:"center", pt: 5, gap: 1}}>
                {/*TODO: convertir esta parte en una lista de elementos para poder poner text a text y tener el redireccionamiento.  */}
                <p>{t('CustomW')}</p> 
                <a href="https://w.app/jPLhUY" target="_blank" rel="noopener noreferrer"> {t("ClickHere")} </a>
                <p>{t('toWhat')}</p> 
            </Box>
        </Box>
    );
};

export {ServicesSection};