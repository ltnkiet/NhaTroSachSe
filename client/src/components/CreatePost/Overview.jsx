import React, { useEffect } from "react";
import { Select, InputReadOnly, InputFormV2 } from "components";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "store/actions";

const Overview = ({ payload, setPayload, invalidFields, setInvalidFields }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.app);
  const { userData } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(actions.getCategories());
  }, [actions]);

  const parseDescription = (description) => {
    // Tách mô tả thành các phần riêng biệt
    const parts = description.split(/\.\s+/);
    return parts.filter((part) => part.trim() !== "");
  };

  const handleDescriptionChange = (e) => {
    const description = e.target.value;
    const parsedDescription = parseDescription(description);
    setPayload((prev) => ({ ...prev, description: parsedDescription }));
  };

  return (
    <div>
      <h2 className="font-semibold text-xl py-4">Thông tin mô tả</h2>
      <div className="w-full flex flex-col gap-4">
        <div className="w-1/2">
          <Select
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            value={payload.categoryCode}
            setValue={setPayload}
            name="categoryCode"
            options={categories}
            label="Loại chuyên mục"
          />
        </div>
        <InputFormV2
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
          value={payload.title}
          setValue={setPayload}
          name="title"
          label="Tiêu đề"
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="desc">Nội dung mô tả</label>
          <textarea
            id="desc"
            cols="30"
            rows="10"
            className="w-full rounded-md outline-none border border-gray-300 p-2"
            value={payload.description.join("\n")}
            onChange={handleDescriptionChange}
            onFocus={() => setInvalidFields([])}></textarea>
          <small className="text-red-500">
            {invalidFields?.some((item) => (item.name = "description")) &&
              invalidFields?.find((item) => (item.name = "description"))
                ?.message}
          </small>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <InputReadOnly label="Thông tin liên hệ" value={userData?.name} />
          <InputReadOnly label="Điện thoại" value={userData?.phone} />
          <InputFormV2
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            value={payload.priceNumber}
            setValue={setPayload}
            small="Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000"
            label="Giá cho thuê"
            unit="đồng"
            name="priceNumber"
          />
          <InputFormV2
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            value={payload.areaNumber}
            setValue={setPayload}
            name="areaNumber"
            label="Diện tích"
            unit="m2"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
