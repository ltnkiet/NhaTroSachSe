import React, { useState } from "react";
import { Button, InputFormV2 } from "components";
import { apiCreateCategories } from "services";
import { validate } from "utils/helper";
import Swal from "sweetalert2";

const CreateCategory = () => {
  const [invalidFields, setInvalidFields] = useState([]);
  const [payload, setPayload] = useState({
    code: "",
    value: "",
    header: "",
    subheader: "",
  });

  const handleSubmit = async () => {
    const invalid = validate(payload, setInvalidFields);
    if (invalid === 0) {
      const response = await apiCreateCategories(payload);
      if (response?.data?.err === 0)
        Swal.fire("Hoàn tất", response?.data?.msg, "success").then(() => {
          resetPayload();
        });
      else Swal.fire("Sự cố!", response?.data?.msg, "error");
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
        Tạo danh mục
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
          <InputFormV2
            value={payload.subheader}
            setValue={setPayload}
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            label="Tiêu đề phụ"
            name={"subheader"}
          />
          <div className="mt-5 flex items-center justify-center">
            <div className="w-full">
              <Button
                onClick={handleSubmit}
                text={"Tạo danh mục"}
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
