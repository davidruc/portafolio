import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import "./navar.css";
import logo from "../../assets/logo-vertical-sinfondo.png";
import {ButtonNavar} from "../buttons_navar/button_navar";
import {useNavigate} from "react-router-dom";

const pages = [
  { text: "Home", path: "/home" },
  { text: "About", path: "/about" },
  { text: "Services", path: "/services" },
  { text: "Works", path: "/work" },
  { text: "Contact", path: "/contact" },
];

function Navar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const redirection = (path) =>{
    navigate(path)
  }

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
            
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color: "white"}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", lg: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={()=> redirection(page.path)}>
                  <Typography textAlign="center">{page.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
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
                    text={page.text}
                    onClick={()=> redirection(page.path)}
                />
            )
           } 
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navar;
