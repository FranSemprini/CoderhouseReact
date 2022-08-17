import * as React from "react";
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar';
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Toolbar from "@mui/material/Toolbar";
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import logo from '../img/logo.jpg'



export function NavBar() {
  return (
    <AppBar position="static" sx={{ color: 'ligth-blue', backgroundColor: 'orange', borderColor: 'amber'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar alt="Remy Sharp" src={logo} />
            <Typography
              noWrap
              component="a"
              sx={{
                ml: 1,
                mt:1,
                fontSize: 35,
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
          <Box sx={{}}>
            <Button variant="contained" sx={{
              color: 'black', backgroundColor: 'white', borderColor: 'black', mr: 5, '&:hover': {
                color: `white`,
                background: "#834bff",
              },
            }}>Home</Button>
            <Button variant="text" size="small" sx={{
              color: 'white', backgroundColor: 'orange', borderColor: 'black', ml: 4, '&:hover': {
                color: `white`,
                background: "#834bff",
              },
            }}>Gallery</Button>
            <Button variant="text" size="small" sx={{
              color: 'white', backgroundColor: 'orange', borderColor: 'black', ml: 4, '&:hover': {
                color: `white`,
                background: "#834bff",
              },
            }}>About us</Button>
            <Button variant="text" size="small" sx={{
              color: 'white', backgroundColor: 'orange', borderColor: 'black', ml: 4, '&:hover': {
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