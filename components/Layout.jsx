import { useState, createContext, useContext, useEffect } from "react";
import { signOut } from "../lib/sign-in-with-google";

const CurrentChat = createContext(null);

export default function Layout(props) {
  const [currentChat, setCurrentChat] = useState("");
  const [MESSAGE_SENT_HYDRATION_TRIGGER, TRIGGER_MESSAGE_SENT_UPDATE] = useState(null);

  useEffect(() => {
    try {
      setCurrentChat("");
      window.addEventListener("beforeunload", signOut);
    } catch (err) {
      console.log(err.message);
    }
  }, []);

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
