import { useState } from "react";
import { Box } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Button } from "@mui/material";
import { signOut } from "../lib/sign-out";
import { useUser } from "../state/context/userContext";
import ProfileImageSelectionModal from "./ProfileImageSelectionModal";
import { useCurrentChat } from "./Layout";

export default function SwipeableAppDrawer(props) {
  const [openProfileImageSelectionModal, setOpenProfileImageSelectionModal] =
    useState(false);
  const [setOpenWallpaperImageSelectionModal] = useState(false);
  const { setCurrentChat } = useCurrentChat();
  const [currentModal] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const { user, setUser } = useUser();

  const handleSelection = (src, color) => {
    if (color) setSelectedImage(color);
    else setSelectedImage(src);
  };

  const handleProfileImageSelectionModalClose = () =>
    setOpenProfileImageSelectionModal(false);

  const handleWallpaperSelectionModalClose = () =>
    setOpenWallpaperImageSelectionModal(false);

  const handleClearSelection = () => {
    setSelectedImage("");
    if (currentModal == "WALLPAPER_MODAL") handleWallpaperSelectionModalClose();
    else handleProfileImageSelectionModalClose();
  };

  return (
    <>
      <Box>
        <SwipeableDrawer
          anchor={"left"}
          open={props.openDrawer}
          onClose={props.toggleDrawer(false)}
          onOpen={props.toggleDrawer(true)}
        >
          <Box
            sx={{ width: 300 }}
            role="presentation"
            onKeyDown={props.toggleDrawer(false)}
            className="flex flex-col h-full bg-[#00312d]"
          >
            <Box className="w-full h-full flex-1 relative pt-4">
              <Button
                className="w-full justify-start p-4 font-bold text-white rounded-none"
                sx={{
                  justifyContent: "flex-start",
                  fontWeight: "bold",
                  color: "#fff",
                  borderRadius: 0,
                  padding: "16px",
                  position: "absolute",
                  background: "rgb(0,0,0,.1)",
                  bottom: "0",
                  left: 0,
                }}
                onClick={() => {
                  setCurrentChat("");
                  signOut();
                }}
              >
                Log out
              </Button>
            </Box>
          </Box>
        </SwipeableDrawer>
      </Box>

      <ProfileImageSelectionModal
        closeFunc={handleProfileImageSelectionModalClose}
        selectImage={handleSelection}
        selectedImage={selectedImage}
        clearSelection={handleClearSelection}
        open={openProfileImageSelectionModal}
        user={user}
        setUser={setUser}
      />
    </>
  );
}
