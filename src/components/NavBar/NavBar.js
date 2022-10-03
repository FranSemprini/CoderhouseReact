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
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { useLoginContext } from "../../context/LoginContext";

export function NavBar() {
  const { user, logout } = useLoginContext()
  const { cartAmount } = useContext(CartContext)
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
            </Menu>
          </Box>
          <Link to="/" className="navigate__links">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar alt="Remy Sharp" src={logo} />
              <Typography
                noWrap
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

             <span>{user.user}</span>
              <Button variant="text" onClick={logout} sx={{
                color: 'white', backgroundColor: 'orange', borderColor: 'black', ml: 1.5, mr: 1, '&:hover': {
                  color: `white`,
                  background: "#834bff",
                },
              }}>Logout</Button>
            </div>
          </Box>
          <Box component="div" sx={{ display: { xs: 'inline-grid', sm: 'none', alignItems: `center` } }}>
            <div className="navBar__links">
              <Button variant="text" onClick={logout} sx={{
                color: 'white', backgroundColor: 'orange', borderColor: 'black', mt: 0.5, '&:hover': {
                  color: `white`,
                  background: "#834bff",
                },
              }}>Logout</Button>
            </div>
          </Box>
          {cartAmount() > 0 ? <Link className="cart navigate__links" to="/cart"><CartWidget sx={{ ml: 1.5 }} /></Link> : <Link className="cart navigate__links hidden" to="/cart"><CartWidget sx={{ ml: 1.5 }} /></Link>}
        </Toolbar>
      </Container>
    </AppBar >
  );

}