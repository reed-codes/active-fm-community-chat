import { useState } from "react";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DoneIcon from "@mui/icons-material/Done";
import moment from "moment";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { ref, deleteObject } from "firebase/storage";
import { doc, deleteDoc } from "firebase/firestore";
import { db, storage } from "../../../firebase/client-app";
import { useUser } from "../../../state/context/userContext";


const deleteMessage = async (message) => {
  // IF MESSAGE INCLUDED MEDIA FILE
  if (message.Type === "TEXT") {
    try {
      await deleteDoc(doc(db, message.DocPath));
      console.log("DELETED DOC");
    } catch (err) {
      console.log(err.message, " FAILED TO DELETE DOC");
    }
  } else {
    let fileRef = ref(storage, message.FilePath);
    try {
      await deleteObject(fileRef);
      await deleteDoc(doc(db, message.DocPath));
      console.log("DELETED DOC & FILE");
    } catch (err) {
      console.log(err.message, " FAILED TO DELTE FILE");
    }
  }

  try {
    await deleteDoc(doc(db, message.LastMessageDocPath));
  } catch (err) {
    console.log(err.message, " FAILED TO DELTE LAST MESSAGE");
  }
};

const MessageWrapper = (props) => {
  const [contextMenu, setContextMenu] = useState(null);
  const [contextElement, setContextElement] = useState(null);
  const m = moment(new Date(props.message.CreatedAt.toDate()));
  const timestamp = m.format("hh:mm a");
  const data = useUser()

  const isImage = props.message.Type === "IMAGE";

  const handleContextMenu = (event) => {
    if(data.user.Email !== "activefm@activemi.co.za"){
       return
    }

    event.preventDefault();
    setContextElement(event.currentTarget);
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };

  const handleClose = () => {
    setContextElement(null);
    setContextMenu(null);
  };

  const handleDeleteMessage = () => {
    deleteMessage(props.message);
  };

  return (
    <>
      <Box
        className={`overflow-hidden w-full mb-3 flex justify-${
          props.self ? "end" : "start"
        }`}
        onContextMenu={handleContextMenu}
        sx={{
          background: contextElement ? "#60a5fa29 !important" : "none",
          borderRadius: contextElement ? "3px" : 0,
        }}
      >
        <Box className = "min-w-[120px] md:max-w-[430px]"
              sx = {{
                maxWidth:
                props.message.Type === "AUDIO" ? "auto !important" : "65%",
              }}
              >
          <Box
            className={`shadow-2xl min-w-[90px] md:max-w-[430px] relative ${
              props.self ? "bg-[#e22d34]" : "bg-[#a02025]"
            } text-white rounded overflow-auto`}
            sx={{
              padding: isImage ? "0 !important" : "10px !important",
              display: "flex",
              maxWidth:
                props.message.Type === "AUDIO" ? "auto !important" : "100%",
              borderBottomLeftRadius: "0 !important",
              borderBottomRightRadius: "0 !important",
            }}
          >
            {props.children}
          </Box>
          <Box
            sx={{
              height: "50px",
              width: "100%",
              display: "flex",
              p: 1,
              background: "#222",
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "0",
              overflow: "hidden",
              borderRadius: "3px !important",
              alignItems: "center",
            }}
            className="rounded"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={
                  props.message.SenderProfileImage
                }
                alt="user-pro-pic"
                style={{
                  width: "35px",
                  height: "35px",
                  background: "#000",
                  borderRadius: "50%",
                  backgroundSize: "cover",
                }}
              />

              <Box
                sx={{
                  fontWeight: 700,
                  fontSize: 10,
                  pl: 1,
                  pr: 2,
                }}
              >
                Thecoderlorian
              </Box>
            </Box>

            <Box
              className="text-[12px] text-right px-4 py-1 flex justify-end items-center gap-2"
              sx={{
                flex: 1,
              }}
            >
              <Box className="opacity-50" sx = {{ fontSize: 10}}>{timestamp}</Box>
              {props.self && (
                <IconButton>
                  {props.message.Unread ? (
                    <DoneIcon
                      className="h-[15px] w-[15px] text-[#ffe2f2]"
                      sx={{
                        width: "15px",
                        height: "15px",
                      }}
                    />
                  ) : (
                    <DoneAllIcon
                      className="h-[15px] w-[15px] text-[#ffe2f2]"
                      sx={{
                        width: "15px",
                        height: "15px",
                      }}
                    />
                  )}
                </IconButton>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleDeleteMessage} sx={{ background: "#00312d" }}>
          Delete message
        </MenuItem>
      </Menu>
    </>
  );
};

export default MessageWrapper;
