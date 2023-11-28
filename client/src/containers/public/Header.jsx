import React, { useCallback } from "react";
import logo from "../../asset/img/logo_ntss.png";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { Button } from "../../components";
import icons from "../../asset/icon";
import { path } from "../../utils/constant";
import { useSelector, useDispatch } from "react-redux";

const { AiOutlinePlusCircle, AiOutlineLogout, BsChevronDown } = icons;

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);

  return (
    <div  className="w-[70%]">
      <div className="w-full flex items-center justify-between my-4">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-[300px] h-[100px] rounded-xl"
          />
        </Link>
        <div className="flex items-center gap-1">
          {!isLoggedIn && (
            <div className="flex items-center gap-1">
              <Button
                text={"Đăng nhập"}
                textColor="text-white"
                bgColor="bg-main"
                onClick={() => goLogin(false)}
              />
              <Button
                text={"Đăng ký"}
                textColor="text-white"
                bgColor="bg-main"
                onClick={() => goLogin(true)}
              />
            </div>
          )}
          {isLoggedIn && (
            <div className="flex items-center gap-3 relative">
              {/* <User /> */}
              <Button
                text={"Quản lý tài khoản"}
                textColor="text-white"
                bgColor="bg-blue-700"
                px="px-4"
                IcAfter={BsChevronDown}
                // onClick={() => setIsShowMenu((prev) => !prev)}
              />
              {/* {isShowMenu && (
                <div className="absolute min-w-200 top-full bg-white shadow-md rounded-md p-4 right-0 flex flex-col">
                  {menuManage.map((item) => {
                    return (
                      <Link
                        className="hover:text-orange-500 flex items-center gap-2 text-blue-600 border-b border-gray-200 py-2"
                        key={item.id}
                        to={item?.path}>
                        {item?.icon}
                        {item.text}
                      </Link>
                    );
                  })}
                  <span
                    className="cursor-pointer hover:text-orange-500 text-blue-500 py-2 flex items-center gap-2"
                    onClick={() => {
                      setIsShowMenu(false);
                      dispatch(actions.logout());
                    }}>
                    <AiOutlineLogout />
                    Đăng xuất
                  </span>
                </div>
              )} */}
            </div>
          )}
          <Button
            text={"Đăng tin"}
            textColor="text-white"
            bgColor="bg-secondary"
            IcAfter={AiOutlinePlusCircle}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
