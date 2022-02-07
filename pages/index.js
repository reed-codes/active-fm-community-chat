import { useContext, useEffect } from "react";
import { scrollTop } from "../utils/index";
import BannerSlider from "../components/BannerSlider";
import ShowCard from "../components/ShowCard";
// import { SectionHeader } from "../styles/style-utils";
import { ThemeContext } from "../state/ThemeProvider";
import { ShowsContext } from "../state/ShowsContext";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";

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

const AddBannerLink = styled.a`
  height: 200px;
  width: 100%;
  margin: 15px 0;
  margin-top: ${(props)=> props.marginTop ? props.marginTop : '15px' };
  position: relative;
  z-index: 100;
  display: block;
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

      <SectionHeader theme={theme} txt = {"TALK SHOWS"}/>
       
      <div className="shows-scrollable-row">
        {shows.talkShows.map((show, index) => (
          <ShowCard index={index} show={show} />
        ))}
      </div>

      <AddBannerLink
        target="_blank"
        href="https://click.linksynergy.com/fs-bin/click?id=YYSWusbt6yg&offerid=971100.11&subid=0&type=4"
      >
        <img
          src="ads/ad-1.jpeg"
          alt=""
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
        />
      </AddBannerLink>

      <SectionHeader theme={theme} txt = {"MORNING SHOWS"}/>

      <div className="shows-scrollable-row">
        {shows.morningShows.map((show, index) => (
          <ShowCard index={index} show={show} />
        ))}
      </div>

      <AddBannerLink
        target="_blank"
        href="https://click.linksynergy.com/fs-bin/click?id=YYSWusbt6yg&offerid=969388.14&subid=0&type=4"
      >
        <img
          src="ads/ad-2.png"
          alt=""
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
        />
      </AddBannerLink>

      <SectionHeader theme={theme} txt = {"AFTERNOON SHOWS"}/>

      <div className="shows-scrollable-row">
        {shows.afternoonShows.map((show, index) => (
          <ShowCard index={index} show={show} />
        ))}
      </div>

      <AddBannerLink
        target="_blank"
        href="https://click.linksynergy.com/fs-bin/click?id=YYSWusbt6yg&offerid=934963.18&subid=0&type=4"
      >
        <img
          src="ads/ad-3.gif"
          alt=""
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
        />
      </AddBannerLink>

      <SectionHeader theme={theme} txt = {"EVENING SHOWS"}/>

      <div className="shows-scrollable-row">
        {shows.eveningShows.map((show, index) => (
          <ShowCard index={index} show={show} />
        ))}
      </div>

      <AddBannerLink
        target="_blank"
        href="https://click.linksynergy.com/fs-bin/click?id=YYSWusbt6yg&offerid=932989.13&subid=0&type=4"
        marginTop = {"-50px"}
      >
        <img
          src="ads/ad-5.gif"
          alt=""
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
        />
      </AddBannerLink>

      <SectionHeader theme={theme} txt = {"MUSIC SHOWS"}/>

      <div className="shows-scrollable-row">
        {shows.musicShows.map((show, index) => (
          <ShowCard index={index} show={show} />
        ))}
      </div>

      <SectionHeader theme={theme} txt = {"SCHEDULE"}/>

      <img
        src={"./img/AFM-schedule.png"}
        style={{
          width: "100%",
          height: 450,
          marginBottom: 30,
          objectFit: "contain",
          position: "relative",
          zIndex: 10,
        }}
        alt="active fm schedule"
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
