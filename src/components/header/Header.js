import React from "react";
import { Typography, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import styled from "styled-components";
import MobkoiLogo from "../../images/mobkoi.png";
const StyledHeader = styled.header`
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  background: linear-gradient(45deg, #ff8e53 30%, #fe6b8b 90%);
  color: #fff;
  margin-bottom: 2rem;
`;
const NavBar = styled.nav`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
const Logo = styled.figure`
  max-width: 150px;
  margin: 0.5rem 1rem;
  img {
    width: 100%;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <NavBar>
        <Logo>
          <img alt="" src={MobkoiLogo} />
        </Logo>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          href="/"
        >
          <HomeIcon />
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ paddingLeft: 2 }}
          >
            Home
          </Typography>
        </IconButton>
      </NavBar>
    </StyledHeader>
  );
};

export default Header;
/**
 * 
 *  <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            variant="dense"
            sx={{
              maxWidth: "1200px",
              margin: "0 auto",
              width: "100%",
              textAlign: "right",
            }}
          >
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              href="/"
            >
              <HomeIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
 */
