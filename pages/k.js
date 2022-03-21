import { Box } from "@mui/material";
import UserAccountsListWrapper from "../components/UserAccountsListWrapper";
import ChatPortal from "../components/ChatPortal";

export default function Home() {
  return (
    <>
      <Box className="h-screen w-full flex items-start">
        <Box className="flex flex-col w-[20px] min-w-[20px] h-full bg-[#333] relative">
          <UserAccountsListWrapper/>
        </Box>

        <Box className="w-full block">
          <ChatPortal />
        </Box>
      </Box>
    </>
  );
}

