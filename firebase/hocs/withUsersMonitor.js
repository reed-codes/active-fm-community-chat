import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { auth } from "../client-app";

const withUsersMonitor = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      if (!auth.currentUser) {
        router.push("/");
        return;
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withUsersMonitor;
