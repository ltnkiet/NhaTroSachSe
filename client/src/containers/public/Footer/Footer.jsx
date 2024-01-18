import { Link, useNavigate, useSearchParams } from "react-router-dom";
import logo from "../../../asset/img/logo_ntss.png";
import { useCallback, useEffect, useRef } from "react";
import { path } from "../../../utils/constant";
import { useSelector } from "react-redux";

export default function Footer() {
  //   const navigate = useNavigate();
  //   const { isLoggedIn } = useSelector((state) => state.auth);
  //   const headerRef = useRef();
  //   const [searchParams] = useSearchParams();

  //   const goLogin = useCallback((flag) => {
  //     navigate(path.LOGIN, { state: { flag } });
  //   }, []);
  //   useEffect(() => {
  //     headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }, [searchParams.get("page")]);

  return (
    <div className="bg-main text-whblackite text-left">
      <div className="w-10/12 mx-auto pt-20 pb-8 flex flex-col sm:flex-row space-y-2 justify-start">
        <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-2 pb-6">
          <Link className="flex pt-1" to="/">
            <img
              className="w-[300px] h-[100px] rounded-xl"
              src={logo}
              alt="logo"
            />
          </Link>
          <p className="md:w-80 w-full text-lg font-normal -mt-2 text-yellow-500 ">
            Chất lượng hơn số lượng.
          </p>

          <p className="md:w-80 w-full text-xl font-bold -mt-2 text-yellow-500 ">
            Powered By ltnkiet and NhatKha
          </p>
        </div>
        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold text-yellow-500">Welcome</h1>
          <Link
            className="w-28  font-semibold text-lg text-yellow-500"
            to={path.SEARCH}
          >
            Tìm phòng trọ
          </Link>

          <Link
            className="w-40 opacity-60 hover:opacity-100 font-semibold text-lg"
            to={path.CREATE_POST}
          >
            Đăng tin
          </Link>

          <Link
            className="w-28  font-semibold text-lg text-yellow-500"
            to={path.LOGIN}
          >
            Đăng nhập
          </Link>

          <Link
            className="w-40  font-semibold text-lg text-yellow-500"
            to={path.LOGIN}
          >
            Đăng ký
          </Link>
        </div>

        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold text-yellow-500">Chủ trọ</h1>
          <Link
            className="w-28 font-semibold text-lg text-yellow-500"
            to={path.LOGIN}
          >
            Đăng nhập
          </Link>

          <Link
            className="w-40font-semibold text-lg text-yellow-500"
            to={path.LOGIN}
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
            Về chúng tôi
          </Link>

          <Link className="font-semibold text-lg text-yellow-500">
            Quy định về chính sách
          </Link>
        </div>

        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold text-yellow-500">
            Theo dõi chúng tôi qua
          </h1>
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
  );
}
