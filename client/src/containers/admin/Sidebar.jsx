import React from "react";
import anonAvatar from "asset/img/anon-avatar.png";
import { useSelector, useDispatch } from "react-redux";
import adminSidebar from "utils/adminSidebar";
import { NavLink, Link } from "react-router-dom";
import * as actions from "store/actions";
import { AiOutlineLogout } from "react-icons/ai";
import logo from "asset/img/logo_ntss.png";

const activeStyle =
  "hover:bg-secondary flex rounded-md items-center gap-2 p-2 font-bold bg-secondary my-4";
const notActiceStyle =
  "hover:bg-secondary flex rounded-md items-center gap-2 p-2 cursor-pointer mt-4";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { currentData } = useSelector((state) => state.user);
  return (
    <div className="w-[20%] flex-none p-4 flex flex-col gap-6 bg-main text-white">
      <Link to={"/*"}>
        <img src={logo} alt="logo"/>
      </Link>
      <h1 className="text-3xl">Trang Quản Trị</h1>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img
            src={currentData?.avatar || anonAvatar}
            alt="avatar"
            className="w-12 h-12 object-cover rounded-full border-2 border-white"
          />
          <div className="flex flex-col justify-center">
            <span className="font-semibold">Admin: {currentData?.name}</span>
            <small>Sđt: {currentData?.phone}</small>
          </div>
        </div>
        {/* <span>
          Mã thành viên:{" "}
          <small className="font-medium">
            {currentData?.id?.match(/\d/g).join("")?.slice(0, 6)}
          </small>
        </span> */}
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
      </div>
    </div>
  );
};

export default Sidebar;
