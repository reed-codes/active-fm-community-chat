import { useState, createContext, useContext, useEffect } from "react";

const CurrentChat = createContext(null);

export default function Layout(props) {
  const [currentChat, setCurrentChat] = useState("");
  const [MESSAGE_SENT_HYDRATION_TRIGGER, TRIGGER_MESSAGE_SENT_UPDATE] = useState(null);

  return (
    <CurrentChat.Provider
      value={{
        currentChat,
        setCurrentChat,
        MESSAGE_SENT_HYDRATION_TRIGGER,
        TRIGGER_MESSAGE_SENT_UPDATE,
      }}
    >
      {props.children}
    </CurrentChat.Provider>
  );
}

export const useCurrentChat = () => useContext(CurrentChat);
