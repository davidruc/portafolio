import React from "react";
import Navar from "../../components/navar/navar";
import InitialPart from "./initial_section/InitialPart";
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
              <AboutMe/>
            </main>
        </>
    )
}