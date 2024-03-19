import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { path } from "utils/constant";
import { Sidebar } from "./";

const Admin = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.user);

  if (!isLoggedIn || !userData || +userData.role !== 1)
    return <Navigate to={`/${path.HOME__PAGE}`} replace={true} />;
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="flex h-screen w-full flex-auto">
        <Sidebar />
        <div className="flex-auto bg-white shadow-md h-full p-4 overflow-y-scroll no-scrollbar">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
