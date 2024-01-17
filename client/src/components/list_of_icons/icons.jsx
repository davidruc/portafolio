import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import "./icons.css"

function ListOfIcons() {
  return (
    <Box sx={{display:"flex", gap:3}}>
        {/* todo: agregar funcionalidad en los botones */}
      <LinkedInIcon className="iconsSocial"/>
      <GoogleIcon className="iconsSocial"/>
      <WhatsAppIcon className="iconsSocial"/>
    </Box>
  );
}

export { ListOfIcons };
