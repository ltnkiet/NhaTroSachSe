import React, { useState, useEffect } from "react";
import { Button, InputFormV2 } from "components";
import { useSelector, useDispatch } from "react-redux";
import { apiUpdateCategories, apiCreateCategories } from "services";
import { validate } from "utils/helper";
import Swal from "sweetalert2";

const CreateCategory = ({ isEdit }) => {
  const [invalidFields, setInvalidFields] = useState([]);
  const { dataCate } = useSelector((state) => state.app);

  const [payload, setPayload] = useState({
    cateId: dataCate?.cateId || "",
    code: dataCate?.code || "",
    value: dataCate?.value || "",
    header: dataCate?.header || "",
    subheader: dataCate?.subheader || "",
  });

  const handleSubmit = async () => {
    const invalid = validate(payload, setInvalidFields);
    if (invalid === 0) {
      if (isEdit) {
        const response = await apiUpdateCategories(payload);
        if (response?.data?.err === 0)
          Swal.fire("Hoàn tất", response?.data?.msg, "success").then(() => {
            resetPayload();
          });
        else Swal.fire("Sự cố!", response?.data?.msg, "error");
      } else {
        const response = await apiCreateCategories(payload);
        if (response?.data?.err === 0)
          Swal.fire("Hoàn tất", response?.data?.msg, "success").then(() => {
            resetPayload();
          });
        else Swal.fire("Sự cố!", response?.data?.msg, "error");
      }
    }
  };

  const resetPayload = () => {
    setPayload({
      cateId: "",
      code: "",
      value: "",
      header: "",
      subheader: "",
    });
  };
  return (
    <div className="flex flex-col gap-5 items-center px-6">
      <h1 className="text-3xl text-start w-full py-4 font-medium border-b-2 border-gray-200">
        {isEdit ? "Chỉnh sửa danh mục" : "Tạo danh mục"}
      </h1>
      <div className="w-full flex flex-row">
        <div className="w-3/5 flex flex-col gap-4">
          <InputFormV2
            value={payload.code}
            setValue={setPayload}
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            label="Code"
            name={"code"}
          />
          <InputFormV2
            value={payload.value}
            setValue={setPayload}
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            label="Danh mục"
            name={"value"}
          />
          <InputFormV2
            value={payload.header}
            setValue={setPayload}
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            label="Tiêu đề"
            name={"header"}
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="desc">Tiêu đề phụ</label>
            <textarea
              id="desc"
              cols="30"
              rows="10"
              className="w-full rounded-md outline-none border border-gray-300 p-2"
              value={payload.subheader}
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, subheader: [e.target.value] }))
              }
              onFocus={() => setInvalidFields([])}></textarea>
            <small className="text-red-500">
              {invalidFields?.some((item) => (item.name = "subheader")) &&
                invalidFields?.find((item) => (item.name = "subheader"))
                  ?.message}
            </small>
          </div>
          <div className="mt-5 flex items-center justify-center">
            <div className="w-full">
              <Button
                onClick={handleSubmit}
                text={isEdit ? "Cập nhật" : "Tạo tin"}
                bgColor="bg-secondary"
                textColor="text-white"
                fullWidth
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
