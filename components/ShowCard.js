import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../state/ThemeProvider";
import { trim } from "../utils";

const ShowCardWrapper = styled.a`
  width: 200px;
  min-width: 200px;
  margin-bottom: 30px;
  margin-right: 2px;
  transition: all 0.3s;
  padding: 10px;
  color: #ddd;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(35px);
  &:hover {
    color: #aa2329;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const ShowCardTitle = styled.div`
  color: ${({ darkMode }) => (darkMode ? "#fff" : "#111")};
`;
const ShowCardDescription = styled.div`
  color: ${({ darkMode }) => (darkMode ? "#eee" : "#111")};
  font-size: 13px;
  opacity: 0.5;
`;

export const ShowCard = ({ show }) => {
  const { theme } = useContext(ThemeContext);
  const darkMode = Boolean(theme == "dark");

  return (
    <ShowCardWrapper href={show.link}>
      <div
        style={{
          height: 160,
          width: "100%",
          marginBottom: 10,
          position: "relative",
        }}
      >
        <img
        style = {{
            width:'100%',
            height:'100%',
            objectFit:"cover"
        }}
          alt={show.name}
          src={`/${show.img}`}
          className="show-img"
        />
      </div>
      <ShowCardTitle darkMode={darkMode}>{show.name}</ShowCardTitle>

      <ShowCardDescription theme={theme} darkMode={darkMode}>
        {trim(show.description)}
      </ShowCardDescription>
    </ShowCardWrapper>
  );
};

export default ShowCard;
