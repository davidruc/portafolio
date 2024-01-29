import React from "react";
import { Box } from "@mui/material";

import { TitleConfig } from "../../../components/title/titleConfiguration";

import "./contact.css";


function ContactSection(){
    return (
       <Box>
            <TitleConfig 
                    title={"Get In Touch"}
                />
            <Box className="InTouch" sx={{display:"flex", justifyContent: "center",flexDirection:{xs: "column", md: "row"}, gap: 5}}>
                
                <Box>
                    <h4>Let's talk about your projects!</h4>
                    <p>Don't like forms? Send me a <a href="">WhatsApp</a></p>
                </Box>
                <Box className="inputs" sx={{display: "flex", flexDirection: "column", width: {xs: "95%", md: "40%"}}}>
                    <Box sx={{display: "flex", flexDirection:"row"}}>
                        <input type="text" placeholder="Your name" />
                        <input type="text" placeholder="Email address" />
                    </Box>
                    <input type="text" placeholder="subject"/>
                    <input type="text" placeholder="Message"/>
                    <button>Send Message</button>
                </Box>
            </Box>
       </Box>
    );
};

export {ContactSection};

