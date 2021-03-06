import { useUserContext } from "context/userContext";
import React from "react";
import UnauthorizedAlert from "./UnauthorizedAlert";

const PrivateRoute = ({ roleList, children }) => {
  const { userData } = useUserContext();

  // console.log("Private Component:", userData);

  if (roleList.includes(userData.rol)) {
    return children;
  }

  return <UnauthorizedAlert/>;
};

export default PrivateRoute;
