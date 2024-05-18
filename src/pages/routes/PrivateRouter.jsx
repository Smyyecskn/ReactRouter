import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const isAuthenticated = false;
  return <div>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
