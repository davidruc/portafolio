import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import "./icons.css"

function ListOfIcons() {
  return (
    <Box sx={{display:"flex", gap:"3vh"}}>
      <a className="aRedes" href="https://www.instagram.com/david.a.rueda.5/" target="_blank"><InstagramIcon/></a>
      <a className="aRedes" href="https://www.linkedin.com/in/david-rueda-5ba388208/" target="_blank"><LinkedInIcon/></a>
      <a className="aRedes" href="https://co.pinterest.com/davida_rueda/_created/" target="_blank"><PinterestIcon/></a>
      <a className="aRedes" href="https://w.app/jPLhUY" target="_blank"><WhatsAppIcon/></a>
    </Box>
  );
}

export { ListOfIcons };
