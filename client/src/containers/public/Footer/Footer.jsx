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
    <div className="bg-[#0174BE] text-whblackite text-left">
      <div className="w-10/12 mx-auto pt-20 pb-8 flex flex-col sm:flex-row space-y-2 justify-start">
        <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-2 pb-6">
          <Link className="flex pt-1" to="/">
            <img
              className="w-[300px] h-[100px] rounded-xl"
              src={logo}
              alt="logo"
            />
          </Link>
          <p className="md:w-80 w-full text-lg font-medium -mt-2 text-white ">
            Chất lượng hơn số lượng.
          </p>

          <a
            className="w-[220px] text-lg font-medium border-b-2 text-white border-white hover:opacity-60"
            href="mailto:nhatkha06299@gmail.com"
          >
            nhatkha06299@gmail.com
          </a>
          <a
            className="w-[220px] text-lg font-medium border-b-2 text-white border-white hover:opacity-60"
            href="mailto:ltnkietviii@gmail.com"
          >
            ltnkietviii@gmail.com
          </a>
        </div>
        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold text-white">Welcome</h1>
          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg text-white"
            to="/for-applicant"
          >
            How it works
          </Link>

          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg text-white"
            to="/jobs"
          >
            Tìm phòng trọ
          </Link>

          {/* <Link
            className="w-40 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/companies"
          >
            Đăng tin
          </Link> */}

          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg text-white"
            to="/sign-in"
          >
            Đăng nhập
          </Link>

          <Link
            className="w-40 opacity-60 hover:opacity-100 font-semibold text-lg text-white"
            to="/sign-up/new-applicant"
          >
            Đăng ký
          </Link>
        </div>

        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold text-white">Chủ trọ</h1>

          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg text-white"
            to="/for-recruiter"
          >
            How it works
          </Link>

          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg text-white"
            to="/sign-in"
          >
            Đăng nhập
          </Link>

          <Link
            className="w-40 opacity-60 hover:opacity-100 font-semibold text-lg text-white"
            to="/sign-up/new-recruiter"
          >
            Đăng ký
          </Link>
        </div>

        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold text-white">Thông tin</h1>

          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg text-white"
            to="/about"
          >
            About us
          </Link>

          <Link
            className="opacity-60 hover:opacity-100 font-semibold text-lg text-white"
            to="/privacy-policy"
          >
            Privacy policy
          </Link>

          <Link
            className="opacity-60 hover:opacity-100 font-semibold text-lg text-white"
            to="/cookie-policy"
          >
            Cookie policy
          </Link>
        </div>

        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold text-white">Follow us</h1>
          <a
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg text-white"
            href="https://www.instagram.com/kha_martin/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg text-white"
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
