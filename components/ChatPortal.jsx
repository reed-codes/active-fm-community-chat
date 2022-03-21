import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ChatControls from "./ChatControls";
import TextMessageItem from "./chat-message-items/TextMessageItem";
import AudioMessageItem from "./chat-message-items/AudioMessageItem";
import ImageMessageitem from "./chat-message-items/ImageMessageItem";
import { useCurrentChat } from "./Layout";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { auth, db } from "../firebase/client-app";
import { useUser } from "../state/context/userContext";
import { scrollToLatestMessage } from "../lib/scroll-for-new-message";

const ChatPortal = () => {
  const { TRIGGER_MESSAGE_SENT_UPDATE } = useCurrentChat();
  const { user } = useUser();
  const [messages, setMessages] = useState([]);
  const [openMediaUploader, setOpenMediaUploader] = useState(false);

  const conversationID = "community";

  const handleMediaUploaderOpen = () => setOpenMediaUploader(true);
  const handleMediaUploaderClose = () => setOpenMediaUploader(false);

  useEffect(() => {
    const messagesRef = collection(db, "chats", conversationID, "messages");
    const q = query(messagesRef, orderBy("CreatedAt", "asc"));

    const unsubscriber = onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => msgs.push(doc.data()));
      setMessages(msgs);
    });

    return () => unsubscriber();
  }, []);

  useEffect(() => {
    TRIGGER_MESSAGE_SENT_UPDATE({ sent: true });
  }, []);

  useEffect(()=>{
      scrollToLatestMessage()
  },[messages])

  return (
    <>
      <Box
        className="h-screen w-full pb-[55px] relative bg-[#0c1118] flex flex-col"
        sx={{
          transform: "translate(0,0)",
          backgroundSize: "250px",
        }}
      >
        <Box
          className="h-full w-full flex flex-col"
          sx={{
            background: "rgba(0,0,0,.8)",
          }}
        >
          <Box
            className="min-h-[70px] bg-[#00312d] w-full flex items-center justify-between border-l border-b border-solid border-gray-900 relative z-10"
            sx={{
              minHeight: "70px !important",
              height: "70px",
              paddingLeft: "16px",
            }}
          >
            <h3>Active FM Community Chat</h3>
          </Box>

          <Box
            className="h-full w-full overflow-auto p-4 mt-0"
            sx={{
              paddingTop: "15px !important",
              background: `url(main-logo.png)`,
              backgroundPosition: "center",
              backgroundSize: "70px",
              backgroundRepeat: "no-repeat",
            }}
          >
            {messages.map((message) => {
              if (message.Type === "TEXT")
                return (
                  <TextMessageItem
                    key={message.ID}
                    message={message}
                    self={
                      message.SenderID ===
                      (auth.currentUser ? auth.currentUser.uid : "")
                    }
                  />
                );
              else if (message.Type === "IMAGE")
                return (
                  <ImageMessageitem
                    key={message.ID}
                    message={message}
                    self={
                      message.SenderID ===
                      (auth.currentUser ? auth.currentUser.uid : "")
                    }
                  />
                );
              else if (message.Type === "AUDIO")
                return (
                  <AudioMessageItem
                    key={message.ID}
                    message={message}
                    self={
                      message.SenderID ===
                      (auth.currentUser ? auth.currentUser.uid : "")
                    }
                  />
                );
            })}

            <Box id="scroll-into-view-stub" />
          </Box>

          <ChatControls
            handleMediaUploaderOpen={handleMediaUploaderOpen}
            handleMediaUploaderClose={handleMediaUploaderClose}
            openMediaUploader={openMediaUploader}
          />
        </Box>
      </Box>
    </>
  );
};

export default ChatPortal;
