import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { path } from "utils/constant";
import { Sidebar } from './'


const Admin = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) return <Navigate to={`/${path.LOGIN}`} replace={true} />;
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="flex w-full flex-auto">
        <Sidebar />
        <div className="flex-auto bg-white shadow-md h-full p-4">
          <Outlet />
        </div>
      </div>
    </div>
    )
}

export default Admin