import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { formatVietnameseToString } from "../../../utils/Common/formatVietnameseToString";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/actions";

const notActive =
  "px-4 h-full flex items-center bg-main outline-none hover:underline";
const active = "px-4 h-full flex items-center underline";

const Navigation = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(actions.getCategories());
  }, []);
  return (
    <div
      className={`w-full flex justify-center items-center h-[40px] bg-main text-white`}>
      <div className="w-[70%] flex h-full py-5 items-center justify-evenly text-sm font-medium">
        <NavLink
          to={`/`}
          className={({ isActive }) => (isActive ? active : notActive)}>
          Trang chủ
        </NavLink>
        {categories?.length > 0 &&
          categories.map((item) => {
            return (
              <div
                key={item.code}
                className="h-full flex justify-center items-center">
                <NavLink
                  to={`/${formatVietnameseToString(item.value)}`}
                  className={({ isActive }) => (isActive ? active : notActive)}>
                  {item.value}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation;
