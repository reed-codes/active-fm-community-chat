import { useState, useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import Switch from "@material-ui/core/Switch";
import MenuIcon from "@material-ui/icons/Menu";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import HomeIcon from "@mui/icons-material/Home";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import InfoIcon from "@mui/icons-material/Info";

import SocialMediaLinksGroup from "../SocialMediaLinksGroup";
import { ThemeContext } from "../../state/ThemeProvider";
import { useMediaQuery, Button } from "@material-ui/core";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navigation = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem ${(smallScreen) => (smallScreen ? "1rem" : "3rem")};
  background: ${({ theme }) => (theme == "light" ? "#fff" : "#000")};
  box-shadow: 0px 1px 15px rgb(0, 0, 0, 0.1);
  position: fixed;
  top: 25px;
  left: 0;
  z-index: 100;
`;

const NavSection = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.alignment};
  font-weight: 700;
`;

const TopContactStrip = styled.div`
  position: fixed;
  width: 100%;
  height: 25px;
  top: 0px;
  left: 0%;
  padding: 5px;
  display: flex;
  font-size: 10px;
  border-bottom: 1px rgba(0, 0, 0, 0.1) solid;
  font-weight: 700;
  z-index: 200;
  background: #00312d;
  color: #fff;
`;

const Anchor = styled.a`
  color: ${({ theme }) => (theme == "light" ? "#111" : "#fff")};
`;

const Nav = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(Boolean(theme == "dark"));
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const maxWidth900px = useMediaQuery("(max-width:900px)");
  const maxWidth670px = useMediaQuery("(max-width:670px)");

  const handleThemeChange = () => {
    const newTheme = theme == "dark" ? "light" : "dark";
    setTheme(newTheme);
    setDarkMode(Boolean(newTheme == "dark"));
  };

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenMenuModal(!openMenuModal);
  };

  return (
    <>
      <TopContactStrip id="top-contact-strip" theme={theme}>
        {!maxWidth900px && <div> 084 628 6060</div>}
        <div> activefm@activemi.co.za </div>
        {!maxWidth670px && (
          <div>26A Loveday Street South Selby, Johannesburg South Africa</div>
        )}
      </TopContactStrip>

      <Navigation theme={theme} smallScreen={maxWidth670px}>
        {!maxWidth900px && <LeftWideScreenNavSection theme={theme} />}

        <NavSection alignment={maxWidth900px ? "space-between" : "flex-end"}>
          {maxWidth900px && (
            <Button onClick={() => setOpenMenuModal(true)}>
              <MenuIcon style={{ color: darkMode ? "#fff" : "#111" }} />
            </Button>
          )}

          <SocialMediaLinksGroup darkTheme={darkMode} />

          <div className="d-flex align-items-center text-white">
            <Switch
              checked={darkMode}
              onChange={handleThemeChange}
              name="theme switcher"
              inputProps={{ "aria-label": "theme switcher" }}
            />

            {darkMode ? (
              <DarkModeIcon style={{ fontSize: 15 }} />
            ) : (
              <LightModeIcon style={{ color: "#111", fontSize: 15 }} />
            )}
          </div>
        </NavSection>
      </Navigation>

      <SwipeableMenuDrawer
        toggleDrawer={toggleDrawer}
        openMenuModal={openMenuModal}
      />
    </>
  );
};

export const LeftWideScreenNavSection = ({ theme }) => {
  return (
    <>
      <NavSection alignment="flex-start">
        {theme == "dark" ? (
          <a href="/">
            <img
              src={"./icons/main-logo.png"}
              style={{
                height: "45px",
                width: "45px",
                objectFit: "contain",
                marginRight: 10,
              }}
              alt ="active fm logo"
            />
          </a>
        ) : (
          <a href="/">
            <img
              src={"./icons/light-theme-logo.png"}
              style={{
                height: "45px",
                width: "45px",
                objectFit: "contain",
                marginRight: 10,
              }}
               alt ="active fm logo"
            />
          </a>
        )}

        <Link href="/">
          <a>
            <Button
              style={{
                fontWeight: 700,
                minWidth: 120,
              }}
            >
              <Anchor theme={theme}>Home</Anchor>
            </Button>
          </a>
        </Link>

        <Link href="/shows">
          <a>
            <Button
              style={{
                fontWeight: 700,
                minWidth: 120,
              }}
            >
              <Anchor theme={theme}>Shows</Anchor>
            </Button>
          </a>
        </Link>

        <Link href="/live">
          <a>
            <Button
              style={{
                fontWeight: 700,
                minWidth: 120,
              }}
            >
              <Anchor theme={theme}>Live</Anchor>
            </Button>
          </a>
        </Link>

        <Link href="/about">
          <a>
            <Button
              style={{
                fontWeight: 700,
                minWidth: 120,
              }}
            >
              <Anchor theme={theme}>About</Anchor>
            </Button>
          </a>
        </Link>
      </NavSection>
    </>
  );
};

export function SwipeableMenuDrawer({ toggleDrawer, openMenuModal }) {
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
          <div
            style={{
              height: "100vh",
              width: 290,
              background: "#000",
              color: "#fff",
              paddingTop: 20,
            }}
          >
            <Link href="/">
            <a>
            <img
              src="./icons/logo.png"
              style={{
                width: "100%",
                height: 100,
                objectFit: "contain",
                paddingBottom: 20,
              }}
              alt = "active fm logo"
            />
            </a>
            </Link>

            <Divider />

            <List>
              <Link href="/">
                <a>
                  <ListItem>
                    <ListItemButton style = {{padding : '5px 10px'}}>
                      <ListItemIcon>
                        <HomeIcon style={{ color: "#fff" }} />
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItemButton>
                  </ListItem>
                </a>
              </Link>

              <Link href="/shows">
                <a>
                  <ListItem>
                    <ListItemButton style = {{padding : '5px 10px'}}>
                      <ListItemIcon>
                        <PodcastsIcon style={{ color: "#fff" }} />
                      </ListItemIcon>
                      <ListItemText primary="Shows" />
                    </ListItemButton>
                  </ListItem>
                </a>
              </Link>

              <Link href="/live">
                <a>
                  <ListItem>
                    <ListItemButton style = {{padding : '5px 10px'}}>
                      <ListItemIcon>
                        <SlowMotionVideoIcon style={{ color: "#fff" }} />
                      </ListItemIcon>
                      <ListItemText primary="Live" />
                    </ListItemButton>
                  </ListItem>
                </a>
              </Link>

              <Link href="/about">
                <a>
                  <ListItem>
                    <ListItemButton style = {{padding : '5px 10px'}}>
                      <ListItemIcon>
                        <InfoIcon style={{ color: "#fff" }} />
                      </ListItemIcon>
                      <ListItemText primary="About" />
                    </ListItemButton>
                  </ListItem>
                </a>
              </Link>

            </List>

            <Divider />
          </div>
        </Box>
      </SwipeableDrawer>
    </>
  );
}

export default Nav;
