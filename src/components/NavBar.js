import * as React from "react";
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar';
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Toolbar from "@mui/material/Toolbar";
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import logo from '../img/logo.jpg'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";



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
    <AppBar position="static" sx={{ color: 'ligth-blue', backgroundColor: 'orange', borderColor: 'amber' }}>
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
              Kittens Art!
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
            <div>
              <Button variant="contained" sx={{
                color: 'black', backgroundColor: 'white', borderColor: 'black', mr: 4, '&:hover': {
                  color: `white`,
                  background: "#834bff",
                  display: { xs: 'none', sm: 'flex', md: 'flex' }
                },
              }}>Home</Button>
              <Button variant="text" size="small" sx={{
                color: 'white', backgroundColor: 'orange', borderColor: 'black', ml: 3, '&:hover': {
                  color: `white`,
                  background: "#834bff",
                },
              }}>Gallery</Button>
              <Button variant="text" size="small" sx={{
                color: 'white', backgroundColor: 'orange', borderColor: 'black', ml: 3, '&:hover': {
                  color: `white`,
                  background: "#834bff",
                },
              }}>About us</Button>
            </div>
            <Button variant="text" size="small" sx={{
              color: 'white', backgroundColor: 'orange', borderColor: 'black', ml: 3, '&:hover': {
                color: `white`,
                background: "#834bff",
              },
            }}>LogIn</Button>
          </Box>

          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <Button variant="text" size="small" sx={{
              color: 'white', backgroundColor: 'orange', borderColor: 'black', '&:hover': {
                color: `white`,
                background: "#834bff",
              },
            }}>LogIn</Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );

}