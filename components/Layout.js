import { useContext } from "react";
import Meta from "./Meta";
import Nav from "./nav/Nav";
import FooterSection from "./FooterSection";
import styled from "styled-components";
import { ThemeContext } from "../state/ThemeProvider";
import { useMediaQuery, Button } from "@material-ui/core";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const MainWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => (theme == "light" ? "#eee" : "#111")};
  display: flex;
  padding-top: 85px;
`;

const MainWrapperLeftGrid = styled.div`
  height: 100%;
  flex: 2;
  overflow: auto;
  padding: ${(smallScreen) =>
    smallScreen ? "10px 10px 0 10px" : "10px 20px 0 20px"};
`;

const MainWrapperRightGrid = styled.div`
  height: 100%;
  flex: 1;
  overflow: hidden;
  background: #000;
`;

const IonoSmallScreenPlayerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 205px;
  z-index: 1000;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  backdrop-filter: blur(10px) brightness(100%);
  background: rgb(0, 0, 0, 0.7);
  overflow: hidden;
`;

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const maxWidth900px = useMediaQuery("(max-width:900px)");
  const maxWidth670px = useMediaQuery("(max-width:670px)");

  return (
    <>
      <Meta />
      <Nav />

      <div style={{ position: "relative" }}>
        <MainWrapper theme={theme}>
          <MainWrapperLeftGrid smallScreen={maxWidth670px}>
            {children}
            <FooterSection />
          </MainWrapperLeftGrid>

          {!maxWidth900px && (
            <MainWrapperRightGrid>
              <iframe
                src="https://iframe.iono.fm/p/277?layout=legacy&lang=en&playlist=latest&accent=ed3d96&background=000000&border=000000&text=ffffff&rounded=19&artwork=0&description=0&sharing=1&waveform=0&download=1"
                style={{
                  height: "100%",
                  width: "100%",
                  background: "#000",
                  margin: 0,
                  padding: 0,
                }}
                frameBorder="0"
              />
            </MainWrapperRightGrid>
          )}
        </MainWrapper>


        {maxWidth900px && (
                <IonoSmallScreenPlayer/>
        )}
       
      </div>
    </>
  );
};

export default Layout;




const IonoSmallScreenPlayer = ()=>{
  return (

<IonoSmallScreenPlayerWrapper id="iono-small-screen-player-wrapper">
<Button
  style={{
    width: "100%",
    borderBottom: "1px rgba(225,225,225,.1) solid",
    borderRadius: 0,
    padding: "3px 0",
  }}
  onClick={() => {
    let smallScreenIonoWrapperDefaultHeight = "205px";
    let smallScreenIonoWrappercurrentHeight = "205px";

    const IonoSmallScreenPlayerWrapper = document.querySelector(
      "#iono-small-screen-player-wrapper"
    );
    const arrowDropDownIcon = document.querySelector(
      "#arrow-dropdown-icon"
    );
    const arrowDropUpIcon =
      document.querySelector("#arrow-dropup-icon");

    if (IonoSmallScreenPlayerWrapper && arrowDropUpIcon ) {
      if (
        IonoSmallScreenPlayerWrapper.clientHeight + "px" ==
        smallScreenIonoWrapperDefaultHeight
      ) {
        IonoSmallScreenPlayerWrapper.style.height = "345px";
        smallScreenIonoWrappercurrentHeight = "345px";
        arrowDropDownIcon.style.display = "block";
        arrowDropUpIcon.style.display = "none";
      } else {
        IonoSmallScreenPlayerWrapper.style.height = "205px";
        smallScreenIonoWrappercurrentHeight = "205px";
        arrowDropDownIcon.style.display = "none";
        arrowDropUpIcon.style.display = "block";
      }
    }
  }}
>

  <ArrowDropDownIcon
    id="arrow-dropdown-icon"
    style={{ 
             color: "#fff", 
             display: 'none',
         }}
  />

  <ArrowDropUpIcon
    id="arrow-dropup-icon"
    style={{ 
      color: "#fff", 
      display: 'block', 
  }}

  />
</Button>

<iframe
  src="https://iframe.iono.fm/p/277?layout=legacy&lang=en&playlist=latest&accent=ed3d96&background=000000&border=000000&text=ffffff&rounded=19&artwork=0&description=0&sharing=1&waveform=0&download=1"
  style={{
    height: "100%",
    width: "100%",
    background: "#000",
    margin: 0,
    padding: 0,
  }}
  frameBorder="0"
/>
</IonoSmallScreenPlayerWrapper>
  )
}