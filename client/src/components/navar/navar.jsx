import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logo from "../../assets/logo-vertical-sinfondo.png";
import {ButtonNavar} from "../buttons_navar/button_navar";
import { useTranslation } from 'react-i18next';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TemporaryDrawer from "../../components/Drawer/drawer";
import ListItemIcon from '@mui/material/ListItemIcon';



//* Iconos
import MenuItem from "@mui/material/MenuItem";
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
  const [lnge, setLnge] = React.useState('es');
  const changeLanguage = (event) => {
    setLnge(event.target.value);
    i18n.changeLanguage(event.target.value);

  };

  const [section, setSection] = React.useState('home');

  const NAVBAR_HEIGHT = 130; // Ajusta esto según la altura de tu navbar fijo

  const scrollToSection = (href) => {
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      const newSection = href.substring(1);
      setSection(newSection);
      const offset = targetElement.offsetTop - NAVBAR_HEIGHT;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const handleLinkClick = (href) => {
    scrollToSection(href);
  };

  return (
    
    <AppBar className="navar" position="fixed" elevation={0} color="transparent">
      <Container className="navar-inside" maxWidth="xxl">
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
              gap: 5
            }}
          >
           {
            pages.map( page => 
                <ButtonNavar
                    key={page.text}
                    text={t(page.text)}
                    href={page.href}
                    onClick={()=> handleLinkClick(page.href)}
                    activeSection={section}
                />
            )
           } 

          </Box>
        
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth  sx={{ '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.4)'}, '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.4)' }, '& .MuiSelect-icon': { color: 'white' },}}>
              <InputLabel id="demo-simple-select-label">{t('language')}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={lnge}
                label="Age"
                onChange={changeLanguage}
                sx={{ color: 'white !important' }}
              >
                <MenuItem value={'es'}>Español</MenuItem>
                <MenuItem value={'en'}>English</MenuItem>
              </Select>
            </FormControl>
          </Box>
          
        </Toolbar>
        
      </Container>
    </AppBar>
  );
}
export default Navar;
