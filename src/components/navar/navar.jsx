import React, {useState, useEffect} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {ButtonNavar} from "../buttons_navar/button_navar";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListItemIcon from '@mui/material/ListItemIcon';

import logo from "../../assets/logo-vertical-sinfondo.png";
import TemporaryDrawer from "../../components/Drawer/drawer";

import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

//* Iconos
import MenuItem from "@mui/material/MenuItem";
import GTranslateIcon from '@mui/icons-material/GTranslate';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import PhoneIcon from '@mui/icons-material/Phone';

import "./navar.css";

const pages = [
  { text: 'Home', href: "#home", icon: <HomeIcon /> },
  { text: "About", href: "#about", icon: <InfoIcon /> },
  { text: "Services", href: "#services", icon: <DisplaySettingsIcon /> },
  { text: "Works", href: "#works", icon: <WorkIcon /> },
  { text: "Contact", href: "#contact", icon: <PhoneIcon /> },
];


function Navar() {

  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [lnge, setLnge] = useState('es');
  const changeLanguage = (event) => {
    setLnge(event.target.value);
    i18n.changeLanguage(event.target.value);

  };
  const NAVBAR_HEIGHT = 130; // Ajusta esto según la altura de tu navbar fijo

  const [currentSection, setCurrentSection] = useState('Home');
  const [refContainer, inViewContainer] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      // Obtenemos la posición de todas las secciones
      const homePos = document.getElementById('home')?.offsetTop - NAVBAR_HEIGHT || 0;
      const aboutPos = document.getElementById('about')?.offsetTop - NAVBAR_HEIGHT || 0;
      const servicesPos = document.getElementById('services')?.offsetTop - NAVBAR_HEIGHT || 0;
      const worksPos = document.getElementById('works')?.offsetTop - NAVBAR_HEIGHT || 0;
      const contactPos = document.getElementById('contact')?.offsetTop - NAVBAR_HEIGHT || 0;

      // Obtenemos la posición actual del scroll
      const scrollPos = window.scrollY;

      // Determinamos la sección actual
      if (scrollPos < aboutPos) setCurrentSection('Home');
      else if (scrollPos < servicesPos) setCurrentSection('About');
      else if (scrollPos < worksPos) setCurrentSection('Services');
      else if (scrollPos < contactPos) setCurrentSection('Works');
      else setCurrentSection('Contact');
    };

    window.addEventListener('scroll', handleScroll);

    // Manejar el evento load para garantizar que el DOM esté completamente cargado
    window.addEventListener('load', handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, [inViewContainer]);

  const handleLinkClick = (href, section) => {
    setCurrentSection(section);
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      const offset = targetElement.offsetTop - NAVBAR_HEIGHT;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };


  return (
    
    <AppBar className="navar" position="fixed" elevation={0} color="transparent">
      <Container ref={refContainer} className="navar-inside" maxWidth="xxl">
        <Toolbar disableGutters>

          {/* Parte del ícono y logo Grande */}
          <Box sx={{display: {xs: "none", lg:"flex"}, width: "50vh", justifyContent: "end"}}>
            <img src={logo} className="logo" alt="" />
          </Box>

          <Box sx={{display: {xs: "flex", lg:"none"}}}>
            {/* Parte del ícono y logo pequeño */}
            <img src={logo} className="logo" alt="" />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" }, justifyContent: "flex-end" }}>
            <TemporaryDrawer
              anchor="right"
              icon={<MenuIcon sx={{ color: "white" }} />}
              content={ 
                <>
                  {pages.map((page) => (
                    <MenuItem key={page.text} sx={{paddingBottom: "30px"}} onClick={() => handleLinkClick(page.href)}>
                      <ListItemIcon>{page.icon}</ListItemIcon>
                      <Typography textAlign="center">{t(page.text)}</Typography>
                    </MenuItem>
                  ))}
                </>
              }
  
            />
          </Box>


          <Box
            sx={{
                
              flexGrow: 1,
              display: { xs: "none", lg: "flex" },
              justifyContent: "center",
              gap: "5vh"
            }}
          >
           {
            pages.map( (page) => (
                <ButtonNavar
                    key={page.text}
                    text={t(page.text)}
                    // href={page.href}
                    onClick={()=> handleLinkClick(page.href, page.text)}
                    // activeSection={section}
                    active={currentSection === page.text}
                /> )
            )
           } 

          </Box>
        
          <Box sx={{ width: "15vh", height: "6vh"}}>
            <FormControl fullWidth  sx={{ height: "100% !important", fontSize: "1.8vh !important",'& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.4)'}, '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.4)' }, '& .MuiSelect-icon': { color: 'white' },}}>
            <InputLabel id="demo-simple-select-label"><GTranslateIcon/></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={lnge}
                label="Age"
                onChange={changeLanguage}
                sx={{ color: 'white !important' ,height: "100% !important", fontSize: "1.8vh !important"}}
              >
                <MenuItem sx={{ fontSize: "1.8vh !important"}} value={'es'}>Español</MenuItem>
                <MenuItem sx={{ fontSize: "1.8vh !important"}} value={'en'}>English</MenuItem>
              </Select>
            </FormControl>
          </Box>
          
        </Toolbar>
        
      </Container>
    </AppBar>
  );
}
export default Navar;
