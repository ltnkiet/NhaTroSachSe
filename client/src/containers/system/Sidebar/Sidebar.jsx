import React from "react";
import anonAvatar from "asset/img/anon-avatar.png";
import { useSelector } from "react-redux";
import menuSidebar from "utils/menuSidebar";
import { NavLink, Link } from "react-router-dom";
import logo from "asset/img/logo_ntss.png";

const activeStyle =
  "hover:bg-secondary flex rounded-md items-center gap-2 p-2 font-bold bg-secondary my-4";
const notActiceStyle =
  "hover:bg-secondary flex rounded-md items-center gap-2 p-2 cursor-pointer mt-4";

const Sidebar = () => {
  const { userData } = useSelector((state) => state.user);
  return (
    <div className="w-[256px] flex-none p-4 flex flex-col gap-6 bg-main text-white">
      <Link to={"/*"}>
        <img src={logo} alt="logo" />
      </Link>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img
            src={userData?.avatar || anonAvatar}
            alt="avatar"
            className="w-12 h-12 object-cover rounded-full border-2 border-white"
          />
          <div className="flex flex-col justify-center text-white">
            <span className="font-semibold">{userData?.name}</span>
            <small>SĐT: {userData?.phone}</small>
          </div>
        </div>
        <span>
          Mã thành viên:{" "}
          <small className="font-medium text-base">
            {userData?.id?.match(/\d/g).join("")?.slice(0, 7)}
          </small>
        </span>
      </div>
      <div>
        {menuSidebar.map((item) => {
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
      </div>
    </div>
  );
};

export default Sidebar;
