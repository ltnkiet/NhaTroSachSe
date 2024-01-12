import React, { useState, useEffect } from "react";
import { InputForm, Button } from "../../../components";
import { useLocation, useNavigate } from "react-router-dom";
import * as actions from "../../../store/actions";
import { apiForgotPassword } from "../../../services/auth";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import validate from '../../../utils/helper'

const Login = () => {

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, msg, update, err } = useSelector((state) => state.auth);
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const [payload, setPayload] = useState({
    email: "",
    phone: "",
    password: "",
    name: "",
  }); 

  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);
  
  useEffect(() => {
    if (msg) {
      if (err === 0) {
        Swal.fire("Hoàn tất", msg, "success");
      } else {
        Swal.fire("Sự cố!", msg, "error");
      }
    }
  }, [msg, err, update]);

  const handleSubmit = () => {
    let finalPayload = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };
    let invalids = validate(finalPayload, setInvalidFields);
    if (invalids === 0)
      isRegister
        ? dispatch(actions.register(payload))
        : dispatch(actions.login(payload));
  };

  const handleForgotPass = async () => {
    const response = await apiForgotPassword(payload);
    if (response?.data?.err === 1)
      Swal.fire("Sự cố!", response?.data?.msg, "error");
    else {
      Swal.fire("Hoàn tất", response?.data?.msg, "success");
    }
  };
  
  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-white w-[600px] p-8 rounded-md shadow-sm">
        {isForgotPassword ? (<>
          <h3 className="font-semibold text-2xl mb-5">Quên mật khẩu</h3>
          <div className="w-full flex flex-col gap-5">
            <InputForm
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              label={"EMAIL"}
              value={payload.email}
              setValue={setPayload}
              keyPayload={"email"}
            />
            <Button
              text="Gửi"
              bgColor="bg-secondary"
              textColor="text-white"
              fullWidth
              onClick={handleForgotPass}
            />
          </div>
          <div className="mt-7 flex items-center justify-between text-xl">
            <small
              onClick={() => setIsForgotPassword(false)}
              className="text-main font-medium hover:underline cursor-pointer">
              Quay lại
            </small>
          </div>
        </>) : (<>
          <h3 className="font-semibold text-2xl mb-5">
            {isRegister ? "Đăng kí tài khoản" : "Đăng nhập"}
          </h3>
          <div className="w-full flex flex-col gap-5">
            {isRegister && (<>
              <InputForm
                setInvalidFields={setInvalidFields}
                invalidFields={invalidFields}
                label={"HỌ TÊN"}
                value={payload.name}
                setValue={setPayload}
                keyPayload={"name"}
              />
              <InputForm
                setInvalidFields={setInvalidFields}
                invalidFields={invalidFields}
                label={"EMAIL"}
                value={payload.email}
                setValue={setPayload}
                keyPayload={"email"}
              />
            </>)}
            <InputForm
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              label={"SỐ ĐIỆN THOẠI"}
              value={payload.phone}
              setValue={setPayload}
              keyPayload={"phone"}
            />
            <InputForm
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              label={"MẬT KHẨU"}
              value={payload.password}
              setValue={setPayload}
              keyPayload={"password"}
              type={showPassword ? "text" : "password"}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-main font-medium text-sm hover:underline cursor-pointer flex justify-end">
              {showPassword ? "Ẩn mật khẩu" : "Hiển thị mật khẩu"}
            </button>
            <Button
              text={isRegister ? "Đăng kí" : "Đăng nhập"}
              bgColor="bg-secondary"
              textColor="text-white"
              fullWidth
              onClick={handleSubmit}
            />
          </div>
          <div className="mt-7 flex items-center justify-between text-xl">
            {isRegister ? (
              <small>
                Bạn đã có tài khoản?{" "}
                <span
                  onClick={() => {
                    setIsRegister(false);
                    setPayload({
                      email: "",
                      phone: "",
                      password: "",
                      name: "",
                    });
                  }}
                  className="text-main font-medium hover:underline cursor-pointer">
                  Đăng nhập ngay
                </span>
              </small>
            ) : (<>
              <small
                onClick={() => setIsForgotPassword(true)}
                className="text-main font-medium hover:underline cursor-pointer">
                Bạn quên mật khẩu
              </small>
              <small
                onClick={() => {
                  setIsRegister(true);
                  setPayload({
                    email: "",
                    phone: "",
                    password: "",
                    name: "",
                  });
                }}
                className="text-main font-medium hover:hover:underline cursor-pointer">
                Tạo tài khoản mới
              </small>
            </> )}
          </div>
        </>)}
      </div>
    </div>
  );
};

export default Login;
