import { useState, useContext } from "react";
import Link from 'next/link'
import styled from "styled-components";
import Switch from "@material-ui/core/Switch";
import MenuIcon from "@material-ui/icons/Menu";

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import SocialMediaLinksGroup from '../SocialMediaLinksGroup'
import {ThemeContext} from '../../state/ThemeProvider'
import {
  useMediaQuery,
  Button,
  Fade,
  Backdrop,
  Modal,
} from "@material-ui/core";

const Navigation = styled.nav`
height: 60px;
width: 100%;
display: flex;
flex-wrap: wrap;
padding: 0.5rem ${(smallScreen)=> smallScreen ? "1rem" : "3rem"};
background: ${({theme})=> ( theme == 'light' ) ? '#fff' : '#000'};
box-shadow: 0px 1px 15px rgb(0, 0, 0, 0.1);
position:fixed;
top:25px;
left:0;
z-index:100;
`

const NavSection = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.alignment};
  font-weight: 700;
`;


const TopContactStrip = styled.div`
position:fixed;
width:100%;
height:25px;
top:0px;
left: 0%;
padding:5px;
display: flex;
font-size: 10px;
border-bottom: 1px rgba(0,0,0,.1) solid;
font-weight: 700;
z-index:200;
background: #00312d;
color: #fff;
`

const Anchor = styled.a`
color: ${({theme})=> ( theme == 'light' ) ? '#111' : '#fff'};
`

const Nav = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const [darkMode, setDarkMode] = useState( Boolean(theme == "dark")  );
    const [openMenuModal, setOpenMenuModal] = useState(false);
    const maxWidth900px = useMediaQuery("(max-width:900px)");
    const maxWidth670px = useMediaQuery("(max-width:670px)");

    const handleThemeChange = () =>{
       const newTheme = (theme == "dark") ? "light" : "dark";
       setTheme(newTheme)
       setDarkMode(Boolean(newTheme == "dark"))
    };
    
    const toggleDrawer = () => (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }

      setOpenMenuModal(!openMenuModal);
    };

  return (
    <>
      <TopContactStrip id = "top-contact-strip" theme = {theme}>
              { !maxWidth900px &&  <div>+27 11 524 2000</div> }
              <div>example@gmail.com</div>
              { !maxWidth670px &&  <div>26A Loveday Street South Selby, Johannesburg South Africa</div>}
              
      </TopContactStrip>

      <Navigation theme = {theme} smallScreen = {maxWidth670px} >
        {!maxWidth900px && <LeftWideScreenNavSection theme = {theme}/>}

       
       <NavSection alignment = {maxWidth900px ? "space-between" : "flex-end"}>
          {maxWidth900px && (

            <Button onClick={()=>setOpenMenuModal(true)}>
              <MenuIcon style={{ color: darkMode ? "#fff" : "#111" }} />
            </Button>

          )}

          <SocialMediaLinksGroup darkTheme = {darkMode}/>

          <div className="d-flex align-items-center text-white">
            
              <Switch
                checked={darkMode}
                onChange={handleThemeChange}
                name="theme switcher"
                inputProps={{ "aria-label": "theme switcher" }}
              />
 
               Dark

          </div>

        </NavSection>



      </Navigation>

      <SwipeableMenuDrawer toggleDrawer = {toggleDrawer}
                           openMenuModal = {openMenuModal}
                           />
    
    </>
  );
};



export const LeftWideScreenNavSection = ({theme}) => {
    return (
      <>
        
 <NavSection alignment="flex-start">

{
    (theme == 'dark') ? (

      <a href = "/">
          <img
            src={"/main-logo.png"}
            style={{
              height: "45px",
              width: "45px",
              objectFit: "contain",
              marginRight: 10,
            }}
          />
      </a>

    ) : (

      <a href = "/">
          <img
            src={"/light-theme-logo.png"}
            style={{
              height: "45px",
              width: "45px",
              objectFit: "contain",
              marginRight: 10,
            }}
          />
      </a>

    )

}



<Link href="/">
        <Button
          style={{
            fontWeight: 700,
            minWidth: 120,
          }}
        >
              <Anchor theme = {theme} >Home</Anchor>
        </Button>
</Link>

  
<Link href="/shows">
        <Button
          style={{
            fontWeight: 700, 
            minWidth: 120,
          }}
        >
              <Anchor theme = {theme} >Shows</Anchor>
        </Button>
</Link>
  
  
<Link href="/live">
        <Button
          style={{
            fontWeight: 700,
            minWidth: 120,
          }}
        >
              <Anchor theme = {theme}>Live</Anchor>
        </Button>
</Link>


<Link href="/about">
        <Button
          style={{
            fontWeight: 700,
            minWidth: 120,
          }}
        >
          <Anchor theme = {theme}>
              About
          </Anchor>
        </Button>
</Link>

      </NavSection>

      </>
      
    );
  };


  export function SwipeableMenuDrawer({toggleDrawer, openMenuModal}) {
  
    return (
      <>
            <SwipeableDrawer
              anchor={"left"}
              open={openMenuModal}
              onClose={toggleDrawer("left", false)}
              onOpen={toggleDrawer("left", true)}
            >
                 <Box
                  role="presentation"
                  onClick={toggleDrawer("left", false)}
                  onKeyDown={toggleDrawer("left", false)}
                 >
                   <div style = {{
                       height:'100vh',
                       width:290,
                       background:'#000'
                   }}>





                     </div>
                </Box>
            </SwipeableDrawer>
      </>
    );
  }

export default Nav;
