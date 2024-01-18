import React from 'react'
import { Link } from "react-router-dom";
import logo from "asset/img/logo_ntss.png";
import { path } from 'utils/constant';


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
          <h1 className="text-2xl font-semibold text-yellow-500">Welcome</h1>
          <Link
            className="w-28 font-semibold text-lg text-yellow-500"
            to="/for-applicant"
          >
            How it works
          </Link>

          <Link
            className="w-28  font-semibold text-lg text-yellow-500"
            to="/jobs"
          >
            Tìm phòng trọ
          </Link>
          <Link
            className="w-28  font-semibold text-lg text-yellow-500"
            to="/sign-in"
          >
            Đăng nhập
          </Link>

          <Link
            className="w-40  font-semibold text-lg text-yellow-500"
            to="/sign-up/new-applicant"
          >
            Đăng ký
          </Link>
        </div>

        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold text-yellow-500">Chủ trọ</h1>

          <Link
            className="w-28 font-semibold text-lg text-yellow-500"
            to="/for-recruiter"
          >
            How it works
          </Link>

          <Link
            className="w-28 font-semibold text-lg text-yellow-500"
            to="/sign-in"
          >
            Đăng nhập
          </Link>

          <Link
            className="w-40font-semibold text-lg text-yellow-500"
            to="/sign-up/new-recruiter"
          >
            Đăng ký
          </Link>
        </div>

        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold text-yellow-500">Thông tin</h1>

          <Link
            className="w-28 font-semibold text-lg text-yellow-500"
            to={path.ABOUT_US}
          >
            About us
          </Link>

          <Link
            className="font-semibold text-lg text-yellow-500"
            to="/privacy-policy"
          >
            Privacy policy
          </Link>

          <Link
            className="font-semibold text-lg text-yellow-500"
            to="/cookie-policy"
          >
            Cookie policy
          </Link>
        </div>

        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold text-yellow-500">Follow us</h1>
          <a
            className="w-28 font-semibold text-lg text-yellow-500"
            href="https://www.instagram.com/kha_martin/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className="w-28 font-semibold text-lg text-yellow-500"
            href="https://github.com/Nhat-Kha"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer