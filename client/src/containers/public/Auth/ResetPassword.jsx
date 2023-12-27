import React, { useState } from "react";
import { InputForm, Button } from "../../../components";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { apiResetPassword } from "../../../services/auth";

const ResetPassword = () => {
  const [payload, setPayload] = useState({ password: "" });
  const [invalidFields, setInvalidFields] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const { token } = useParams();

  const validate = (payload) => {
    let invalids = 0;
    let fields = Object.entries(payload);
    fields.forEach((item) => {
      if (item[1] === "") {
        setInvalidFields((prev) => [
          ...prev,
          {
            name: item[0],
            message: "Bạn không được bỏ trống trường này.",
          },
        ]);
        invalids++;
      }
    });
    fields.forEach((item) => {
      switch (item[0]) {
        case "password":
          if (item[1].length < 8) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Mật khẩu phải có tối thiểu 8 kí tự.",
              },
            ]);
            invalids++;
          }
          break;
        default:
          break;
      }
    });
    return invalids;
  };
  const handleReset = async () => {
    const invalids = validate(payload); // Validate the password
    if (invalids === 0) {
      const finalPayload = { ...payload, token };
      const response = await apiResetPassword(finalPayload);
      if (response?.data?.err === 1)
        Swal.fire("Sự cố!", response?.data?.msg, "error");
      else {
        Swal.fire("Thành công", response?.data?.msg, "success");
      }
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
        <h3 className="font-semibold text-2xl mb-6">Cập nhật mật khẩu</h3>
        <div className="w-full flex flex-col gap-5">
          <InputForm
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            label={"MẬT KHẨU MỚI"}
            value={payload.password}
            setValue={setPayload}
            keyPayload={"password"}
            type={showPassword ? "text" : "password"}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-blue-500 text-sm hover:underline cursor-pointer flex justify-end">
            {showPassword ? "Ẩn mật khẩu" : "Hiển thị mật khẩu"}
          </button>
          <Button
            text={"Xác nhận"}
            bgColor="bg-secondary"
            textColor="text-white"
            fullWidth
            onClick={handleReset}
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
