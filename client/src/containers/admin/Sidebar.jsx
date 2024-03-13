import React from "react";
import anonAvatar from "asset/img/anon-avatar.png";
import { useSelector, useDispatch } from "react-redux";
import adminSidebar from "utils/adminSidebar";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "asset/img/logo_ntss.png";
import { path } from "utils/constant";
import * as actions from "store/actions";

import icons from "asset/icon";

const { AiOutlineLogout } = icons;

const activeStyle =
  "hover:bg-secondary flex rounded-md items-center gap-2 p-2 font-bold bg-secondary my-4";
const notActiceStyle =
  "hover:bg-secondary flex rounded-md items-center gap-2 p-2 cursor-pointer mt-4";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(actions.logout());
    navigate(path.HOME);
  };
  return (
    <div className="w-[20%] flex-none p-4 flex flex-col gap-6 bg-main text-white">
      <div className="flex flex-col items-center justify-center">
        <img src={logo} alt="logo" />
        <h1 className="text-3xl font-medium">Trang Quản Trị</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img
            src={userData?.avatar || anonAvatar}
            alt="avatar"
            className="w-12 h-12 object-cover rounded-full border-2 border-white"
          />
          <div className="flex flex-col justify-center">
            <span className="font-semibold">Admin: {userData?.name}</span>
            <small>Sđt: {userData?.phone}</small>
          </div>
        </div>
      </div>
      <div>
        {adminSidebar.map((item) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive ? activeStyle : notActiceStyle
              }
              key={item.id}
              to={item?.path}>
              {item?.icon}
              {item.text}
            </NavLink>
          );
        })}
        <span
          className="hover:bg-secondary flex rounded-md items-center gap-2 p-2 cursor-pointer my-4"
          onClick={handleLogout}>
          <AiOutlineLogout />
          Đăng xuất
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
