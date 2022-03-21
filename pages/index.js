import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithGoogle } from "../lib/sign-in-with-google";
import { MetroSpinner } from "react-spinners-kit";

const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const handleStartLoading = () => setLoading(true);
  const handleStopLoading = () => setLoading(false);

  const handleSignIn = async () => {
    handleStartLoading();
    await signInWithGoogle();
    handleStopLoading();
  };

  return (
    <Box className="fixed bottom-0 flex justify-center items-center flex-col w-full h-full overflow-hidden bg-[#000]">
      <img
        src="/main-logo.png"
        className="w-[50px] h-[50px] object-contain mb-20 animate-bounce pointer-events-none"
      />

      <Button
        variant="contained"
        className="p-0 justify-center items-center overflow-hidden rounded-none"
        sx={{
          padding: 0,
          pointerEvents: loading ? "none" : "auto",
        }}
        onClick={handleSignIn}
      >
        <Box
          component="span"
          className="bg-white p-4 h-full min-w-[60px] flex items-center justify-center"
        >
          <GoogleIcon className="text-[deeppink] text-[13px]" />
        </Box>

        <Box
          component="span"
          className="font-bold py-2 px-4 h-full w-full flex items-center justify-center text-white text-[11px] bg-[deeppink]"
        >
          {loading ? <MetroSpinner /> : "Sign in with google"}
        </Box>
      </Button>
    </Box>
  );
};

export default SignIn;
