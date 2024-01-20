import React from "react";
import Navar from "../../components/navar/navar";
import InitialPart from "./initial_section/InitialPart";
import {ServicesSection} from "./services/services_section";
import { ExperienceSection } from "./expirience/experience";
import { RecentWorksView } from "./RecentWorks/recentWorks";
import AboutMe from "./about/about";
import "./homeView.css";
import { Box } from "@mui/material";


export default function HomeView(){

    return (
        <>
            <main>
              <Box className="FView">
                <Navar/>  
                <InitialPart/>
              </Box>
              <Box className="SView">
                <AboutMe/>
              </Box>
              <Box className="TView">
                <ServicesSection/>
                <ExperienceSection/>
                <RecentWorksView/>
              </Box>

            </main>
        </>
    )
}