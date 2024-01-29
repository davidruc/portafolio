import React from "react";
import Navar from "../../components/navar/navar";
import InitialPart from "./initial_section/InitialPart";
import {ServicesSection} from "./services/services_section";
import { ExperienceSection } from "./expirience/experience";
import { RecentWorksView } from "./RecentWorks/recentWorks";
import AboutMe from "./about/about";
import "./homeView.css";
import { Box } from "@mui/material";
import TextMobileStepper from "./reviews/reviews_view"; 

export default function HomeView(){

    return (
        <>
            <main>
              <Box className="FView" id="home">
                <Navar/>  
                <InitialPart/>
              </Box>
              <Box className="SView" id="about">
                <AboutMe/>
              </Box>
              <Box className="TView" id="services">
                <ServicesSection/>
                <ExperienceSection/>
              </Box>
              <Box id="works">
                <RecentWorksView/>
              </Box>
              {/* <Box id="contact">
                <TextMobileStepper/>
              </Box> */}

            </main>
        </>
    )
}