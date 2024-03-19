import React from "react";
import { Link } from "react-router-dom";
import logo from "asset/img/logo_ntss.png";
import { path } from "utils/constant";

const Footer = () => {
  return (
    <div className="bg-main w-full text-left mt-10">
      <div className="w-10/12 mx-auto pt-20 pb-8 flex flex-col sm:flex-row space-y-2 justify-start">
        <div className="w-full sm:w-2/5 pr-6 flex flex-col justify-between space-y-2 pb-6">
          <Link className="flex pt-1" to="/">
            <img
              className="w-[300px] h-[100px] rounded-xl"
              src={logo}
              alt="logo"
            />
          </Link>
          <p className="md:w-80 w-full text-xl font-bold -mt-2 text-yellow-500 ">
            Powered By ltnkiet and NhatKha
          </p>
        </div>
        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold text-yellow-500">
            Về Nhà Trọ Sạch Sẽ
          </h1>
          <Link className="w-28 font-semibold text-lg text-yellow-500">
            Giới thiệu
          </Link>
          <Link className="w-28  font-semibold text-lg text-yellow-500">
            Tìm phòng trọ
          </Link>
          <Link
            className="w-28 font-semibold text-lg text-yellow-500"
            to="/dang-nhap">
            Đăng nhập
          </Link>

          <Link
            className="w-28 font-semibold text-lg text-yellow-500"
            to="/dang-nhap">
            Đăng ký
          </Link>
        </div>

        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold text-yellow-500">
            Chăm sóc khách hàng
          </h1>
          <Link className="w-28 font-semibold text-lg text-yellow-500">
            Hướng dẫn đăng tin
          </Link>
          <Link className="w-28 font-semibold text-lg text-yellow-500">
            Quy định đăng tin
          </Link>
          <Link className="w-28 font-semibold text-lg text-yellow-500">
            Giải quyết khiếu nại
          </Link>
        </div>

        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold text-yellow-500">
            Liên hệ với chúng tôi
          </h1>
          <a
            className="w-28 font-semibold text-lg text-yellow-500"
            href="https://www.facebook.com/profile.php?id=100011056752898"
            target="_blank"
            rel="noreferrer">
            Facebook
          </a>
          <a
            className="w-28 font-semibold text-lg text-yellow-500"
            href="https://github.com/Nhat-Kha"
            target="_blank"
            rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
