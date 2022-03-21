import { Box } from "@mui/material";
import withUsersMonitor from "../firebase/hocs/withUsersMonitor";

const UserAccountsListWrapper = () => {
  return (
    <Box
      className="relative flex flex-col h-full"
      sx={{ transform: "translate(0,0)" }}
    >

      <Box className="h-full w-full overflow-auto pb-[100px]" />

      <Box
        style={{
          height: "100%",
          width: "100%",
          position: "fixed",
          background: "url(./rnm.gif)",
          bottom: 0,
          left: 0,
          zIndex: 10,
          filter: "brightness(70%)",
        }}
      />
    </Box>
  );
};

export default withUsersMonitor(UserAccountsListWrapper);
