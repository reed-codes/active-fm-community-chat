import React, { useState, useContext } from "react";
import { Footer, Paragraph } from "../styles/style-utils";
import SocialMediaLinksGroup from "./SocialMediaLinksGroup";
import { ThemeContext } from "../state/ThemeProvider";
import { useMediaQuery } from "@material-ui/core";

const FooterSection = () => {
  const { theme } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(Boolean(theme == "dark"));
  const maxWidth900px = useMediaQuery("(max-width:900px)");

  return (
    <>
      <Footer>
        <div
          className="row"
          style={{
            paddingBottom: maxWidth900px ? 170 : 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="col-md-8">
            <Paragraph>
              <span style={{ display: "block" }}>
                {" "}
                <b>Tel :</b> 084 505 1166{" "}
              </span>
              <span style={{ display: "block" }}>
                {" "}
                <b>Email :</b> activefm@activemi.co.za{" "}
              </span>
              <span style={{ display: "block" }}>
                {" "}
                <b>Address :</b> 26A Loveday Street South Selby, Johannesburg
                South Africa{" "}
              </span>
            </Paragraph>

            <SocialMediaLinksGroup darkTheme={darkMode} />
          </div>

          <div
            className="col-md-4"
            style={{
              background: `url("./logo.png")`,
              backgroundSize: "contain",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        <br />

        <div className="text-center">
          <small>
            {" "}
            Copyright © {new Date().getFullYear()} Active FM. All rights
            reserved
          </small>
        </div>
      </Footer>
    </>
  );
};

export default FooterSection;
