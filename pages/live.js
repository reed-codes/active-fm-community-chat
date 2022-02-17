import { useEffect } from "react";
import styled from "styled-components";
import { scrollTop } from "../utils/index";

const LivePageContainer = styled.div`
  height: 80vh;
  width: 100%;
  margin-bottom: 30px;
`;

const IframeWrapper = styled.div`
  background: #000;
  height: 100%;
  width: 100%;
`;

const live = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  let liveIframe = "https://hearthis.at/activefm/live"
  const liveHour = new Date().getHours();
  const isWednesday = new Date().getDay() == 3;
  const isThursday = new Date().getDay() == 4;
  const isLiveDay = isWednesday || isThursday;
  const isOnePM = liveHour == 15;

  console.log("Heart Radio")
  console.log(isOnePM , isLiveDay , liveIframe)
  return (
    <LivePageContainer>
      <IframeWrapper>
        {isLiveDay && isOnePM ? (
          <iframe
            style={{
              height: "100%",
              width: "100%",
              background: "url(./logo.png)",
              backgroundSize: 120,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            scrolling="no"
            id="hearthis_at_track_6554137"
            width="100%"
            height="150"
            src={liveIframe}
            frameBorder="0"
            allow="autoplay"
            >
            <p>
              Listen to{" "}
              <a href="ACTIVE FM" target="_blank">
                no name
              </a>{" "}
              <span>by</span>
              <a href="ACTIVE FM" target="_blank">
                ACTIVE FM
              </a>{" "}
              <span>on</span>{" "}
              <a
                href="Listen to DJ Sets, Mixes, Tracks and Sounds |  hearthis.at"
                target="_blank"
                >
                hearthis.at
              </a>
            </p>
          </iframe>
        ) 
        : (
          <iframe
            style={{
              height: "100%",
              width: "100%",
              background: "url(./logo.png)",
              backgroundSize: 120,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            src="https://www.youtube.com/embed/rjDXZO-Ek24"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        )}

        {/* <iframe  style={{
                    height: "100%",
                    width: "100%",
                    background: "url(./logo.png)",
                    backgroundSize: 120,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                src="https://www.youtube.com/embed/rjDXZO-Ek24" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                /> */}
      </IframeWrapper>
    </LivePageContainer>
  );
};

export default live;
