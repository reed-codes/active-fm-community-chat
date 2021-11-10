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

  return (
    <LivePageContainer>
      <IframeWrapper>
        <iframe  style={{
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
      </IframeWrapper>
    </LivePageContainer>
  );
};

export default live;
