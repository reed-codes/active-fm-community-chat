import { useContext, useEffect } from "react";
import { scrollTop } from "../utils/index";
import BannerSlider from "../components/BannerSlider";
import ShowCard from "../components/ShowCard";
import { SectionHeader } from "../styles/style-utils";
import { ThemeContext } from "../state/ThemeProvider";
import { ShowsContext } from "../state/ShowsContext";
import styled from "styled-components";

const ParallaxImage = styled.div`
  height: 130px;
  width: 130px;
  background: red;
  position: absolute;
  top: ${({ top }) => top};
  z-index: 0;
  transform: rotate(25deg);
  background: url(${({ img }) => img});
  background-attachment: fixed;
  background-position: center;
  filter: brightness(30%);
`;

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { shows } = useContext(ShowsContext);

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      <BannerSlider />

      <SectionHeader className="section-header" theme={theme}>
        TALK SHOWS
      </SectionHeader>

      <div className="shows-scrollable-row">
        {shows.talkShows.map((show, index) => (
          <ShowCard index={index} show={show} />
        ))}
      </div>

      <SectionHeader className="section-header" theme={theme}>
        MORNING SHOWS
      </SectionHeader>

      <div className="shows-scrollable-row">
        {shows.morningShows.map((show, index) => (
          <ShowCard index={index} show={show} />
        ))}
      </div>

      <SectionHeader className="section-header" theme={theme}>
        AFTERNOON SHOWS
      </SectionHeader>

      <div className="shows-scrollable-row">
        {shows.afternoonShows.map((show, index) => (
          <ShowCard index={index} show={show} />
        ))}
      </div>

      <SectionHeader className="section-header" theme={theme}>
        EVENING SHOWS
      </SectionHeader>

      <div className="shows-scrollable-row">
        {shows.eveningShows.map((show, index) => (
          <ShowCard index={index} show={show} />
        ))}
      </div>

      <SectionHeader className="section-header" theme={theme}>
        MUSIC SHOWS
      </SectionHeader>

      <div className="shows-scrollable-row">
        {shows.musicShows.map((show, index) => (
          <ShowCard index={index} show={show} />
        ))}
      </div>

      <SectionHeader className="section-header" theme={theme}>
        SCHEDULE
      </SectionHeader>

      <img
        src={"./img/schedule.jpg"}
        style={{
          width: "100%",
          height: 450,
          marginBottom: 30,
          objectFit: "contain",
          position: "relative",
          zIndex: 10,
        }}
        alt = "active fm schedule"
      />

      <ParallaxImage
        img={"./img/de-mode-2.jpg"}
        top={"20%"}
        style={{
          right: "15%",
        }}
      />

      <ParallaxImage
        img={"./img/the-political-show-2.jpg"}
        top={"40%"}
        style={{
          left: "15%",
        }}
      />

      <ParallaxImage
        img={"./img/its-a-moms-life-2.jpg"}
        top={"60%"}
        style={{
          right: "15%",
        }}
      />

      <ParallaxImage
        img={"./img/lets-talk-2.jpg"}
        top={"80%"}
        style={{
          right: "25%",
        }}
      />
    </>
  );
};

export default Home;
