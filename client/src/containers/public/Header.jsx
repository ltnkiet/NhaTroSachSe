import React, { useCallback, useEffect, useRef, useState } from "react";
import logo from "../../asset/img/logo_ntss.png";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { Button, User } from "../../components";
import icons from "../../asset/icon";
import { path } from "../../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";

const { AiOutlinePlusCircle, AiOutlineLogout, BsChevronDown, MdOutlineLibraryBooks } = icons;

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const headerRef = useRef();


  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);
  // useEffect(() => {
  //   headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  // }, [searchParams.get("page")]);

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
              <User />
              <Button
                text={"Tùy chọn"}
                textColor="text-white"
                bgColor="bg-main"
                px="px-4"
                IcAfter={BsChevronDown}
                onClick={() => setIsShowMenu((prev) => !prev)}
              />
              {isShowMenu && (
                <div className="absolute min-w-200 top-full bg-white shadow-md rounded-md p-4 right-0 flex flex-col mt-2">
                  <Link
                    className="cursor-pointer hover:underline text-blue-500 py-2 flex items-center gap-2"
                    to={"/he-thong"}
                    >
                    <MdOutlineLibraryBooks />
                    Quản lý tài khoản
                  </Link>
                  <span
                    className="cursor-pointer hover:underline text-blue-500 py-2 flex items-center gap-2"
                    onClick={() => {
                      setIsShowMenu(false);
                      dispatch(actions.logout());
                    }}>
                    <AiOutlineLogout />
                    Đăng xuất
                  </span>
                </div>
              )}
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
