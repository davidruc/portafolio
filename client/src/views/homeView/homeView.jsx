import React from "react";
import { Box } from "@mui/material";

import Navar from "../../components/navar/navar";
import InitialPart from "./initial_section/InitialPart";
import {ServicesSection} from "./services_view/services_section";
import { ExperienceSection } from "./expirience/experience";
import { RecentWorksView } from "./RecentWorks/recentWorks";
import AboutMe from "./about/about";
import TextMobileStepper from "./reviews_view/reviews_view"; 
import { ContactSection } from "./contact/contact";

import "./homeView.css";
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
              </Box>
              <Box id="works">
                
                {/* Trabajos recientes: <RecentWorksView/> */}
                <ExperienceSection/>
              </Box>
              <Box id="contact">
                {/* Testimonios <TextMobileStepper/> */}
                <ContactSection/>
              </Box>

            </main>
        </>
    )
}