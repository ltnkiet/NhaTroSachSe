import React, { useState } from "react";
import { Address, Overview, Loading, Button } from "../../../components";
import icons from "../../../asset/icon";
import { apiUploadImages } from "../../../services";
import { getCodesArea, getCodesPrice } from "../../../utils/Common/getCodes";
import { useSelector } from "react-redux";

const { BsCameraFill, ImBin } = icons;

const CreatePost = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [imagesPreview, setImagesPreview] = useState([]);
  const { prices, areas } = useSelector((state) => state.app);

  const [payload, setPayload] = useState({
    categoryCode: "",
    title: "",
    priceNumber: 0,
    areaNumber: 0,
    images: "",
    address: "",
    priceCode: "",
    areaCode: "",
    description: "",
    province: "",
  });

  const handleFiles = async (e) => {
    e.stopPropagation();
    setIsLoading(true);
    let images = [];
    let files = e.target.files;
    let formData = new FormData();
    for (let i of files) {
      formData.append("file", i);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_UPLOAD_PRESER_NAME
      );
      formData.append("folder", "nhatrosachse");
      let response = await apiUploadImages(formData);
      if (response.status === 200)
        images = [...images, response.data?.secure_url];
      console.log(response);
    }
    setIsLoading(false);
    setImagesPreview((prev) => [...prev, ...images]);
    setPayload((prev) => ({ ...prev, images: [...prev.images, ...images] }));
  };

  const handleDeleteImage = (image) => {
    setImagesPreview((prev) => prev?.filter((item) => item !== image));
    setPayload((prev) => ({
      ...prev,
      images: prev.images?.filter((item) => item !== image),
    }));
  };

  const handleSubmit = () => {
    let priceCodeArr = getCodesPrice(+payload.priceNumber, prices, 1, 15);
    let priceCode = priceCodeArr[0]?.code;
    let areaCodeArr = getCodesArea(+payload.areaNumber, areas, 0, 90);
    let areaCode = areaCodeArr[0]?.code;
    
    let finalPayload = {
      ...payload,
      priceCode,
      areaCode
    }
    console.log(finalPayload)
  };
  return (
    <div className="px-6">
      <h1 className="text-3xl font-medium py-4 border-b border-gray-200">
        Đăng tin mới
      </h1>
      <div className="flex gap-4">
        <div className="py-4 flex flex-col gap-8 flex-auto">
          <Address payload={payload} setPayload={setPayload} />
          <Overview payload={payload} setPayload={setPayload} />
          <div className="w-full mb-6">
            <h2 className="font-semibold text-xl py-4">Hình ảnh</h2>
            <div className="w-full">
              <label
                className="w-full border-2 h-[200px] my-4 gap-4 flex flex-col items-center justify-center border-gray-400 border-dashed rounded-md"
                htmlFor="file">
                {isLoading ? (
                  <Loading />
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <BsCameraFill color="blue" size={50} />
                    Thêm ảnh
                  </div>
                )}
              </label>
              <input
                onChange={handleFiles}
                hidden
                type="file"
                id="file"
                multiple
              />
              <div className="w-full">
                <h3 className="font-medium py-4">Ảnh đã chọn</h3>
                <div className="flex gap-4 items-center">
                  {imagesPreview?.map((item) => {
                    return (
                      <div key={item} className="relative w-1/3 h-1/3 ">
                        <img
                          src={item}
                          alt="preview"
                          className="w-full h-full object-cover rounded-md"
                        />
                        <span
                          title="Xóa"
                          onClick={() => handleDeleteImage(item)}
                          className="absolute top-2 right-2 p-2 cursor-pointer bg-yellow-500 hover:bg-red-500 rounded-full">
                          <ImBin />
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <Button
            onClick={handleSubmit}
            text="Tạo mới"
            bgColor="bg-green-600"
            textColor="text-white"
          />
        </div>
        <div className="w-[30%] flex-none">Maps</div>
      </div>
    </div>
  );
};

export default CreatePost;
