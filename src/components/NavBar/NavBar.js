import * as React from "react";
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar';
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Toolbar from "@mui/material/Toolbar";
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import logo from "../../assets/logo.jpg"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { CartWidget } from "../CartWidget/CartWidget";
import './NavBar.scss'
import { Link } from "react-router-dom";

export function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ color: 'ligth-blue', backgroundColor: 'orange', borderColor: 'amber' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls={open ? 'menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu"
              aria-labelledby="menuButton"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleClose}>Gallery</MenuItem>
              <MenuItem onClick={handleClose}>AboutUs</MenuItem>
            </Menu>
          </Box>
          <Link to="/" className="navigate__links">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar alt="Remy Sharp" src={logo} />
              <Typography
                noWrap
                component="a"
                sx={{
                  ml: 1,
                  mt: 1,
                  fontSize: 32,
                  fontFamily: `gabriola`,
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none"
                }}
              >
                Paw Stuff
              </Typography>
            </Box>
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'flex', alignItems: `center` } }}>
            <div className="navBar__links">
              <Link to="/" className="navigate__links">
                <Button variant="contained" sx={{
                  color: 'black', backgroundColor: 'white', borderColor: 'black', mr: 3, '&:hover': {
                    color: `white`,
                    background: "#834bff",
                  },
                }}>Home</Button>
              </Link>
              <Button variant="text" sx={{
                color: 'white', backgroundColor: 'orange', borderColor: 'black', ml: 1.5, mr: 1, '&:hover': {
                  color: `white`,
                  background: "#834bff",
                },
              }}>Gallery</Button>
              <Button variant="text" sx={{
                color: 'white', backgroundColor: 'orange', borderColor: 'black', ml: 1.5, mr: 1, '&:hover': {
                  color: `white`,
                  background: "#834bff",
                },
              }}>About us</Button>
            </div>
            <Box component="div" sx={{ display: 'inline-grid', alignItems: `center`, justifyItems: `center`, }}>
              <div className="navBar__links">
                <Button variant="text" sx={{
                  color: 'white', backgroundColor: 'orange', borderColor: 'black', ml: 1, mr: 1, mt: 0.5, '&:hover': {
                    color: `white`,
                    background: "#834bff",
                  },
                }}>LogIn</Button>
              </div>
              <CartWidget sx={{ ml: 1.5 }} />
            </Box>
          </Box>
          <Box component="div" sx={{ display: { xs: 'inline-grid', sm: 'none', alignItems: `center` } }}>
            <div className="navBar__links">
              <Button variant="text" sx={{
                color: 'white', backgroundColor: 'orange', borderColor: 'black', mt: 0.5, '&:hover': {
                  color: `white`,
                  background: "#834bff",
                },
              }}>LogIn</Button>
            </div>
            <CartWidget />
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );

}