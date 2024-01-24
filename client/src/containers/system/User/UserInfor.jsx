import React, { useState, useEffect } from "react";
import { InputReadOnly, Button, InputFormV2 } from "components";
import { useSelector, useDispatch } from "react-redux";
import anonAvatar from 'asset/img/anon-avatar.png'
import { apiUploadImages, apiUpdateUser } from 'services'
import { validate, } from 'utils/helper'
import Swal from 'sweetalert2'
import { getUser } from 'store/actions'



const UserInfor = () => {
  const { userData } = useSelector((state) => state.user);
  const [invalidFields, setInvalidFields] = useState([]);
  const [isEdit, setIsEdit] = useState(false)

  const dispatch = useDispatch()

  const [payload, setPayload] = useState({
    name: userData?.name || "",
    phone: userData?.phone || "",
    email: userData?.email || "",
    // password: user?.password || "",
    zalo: userData?.zalo || "",
    fbUrl: userData?.fbUrl || "",
    avatar: userData?.avatar || ""
  })


  const handleSubmit = async () => {
    const invalid = validate(payload, setInvalidFields)
    if(invalid === 0){
      const response = await apiUpdateUser(payload)
      if (response?.data?.err === 1) Swal.fire("Sự cố!", response?.data?.msg, "error");
      else Swal.fire("Hoàn tất", response?.data?.msg, "success").then(() => {
        dispatch(getUser())
        setIsEdit(false)
      });
    }
  }


  const handleUploadFile = async (e) => {
    const img = e.target.files[0]
    let formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset",process.env.REACT_APP_UPLOAD_PRESER_NAME);
    formData.append("folder", "nhatrosachse");
    let response = await apiUploadImages(formData);
    if (response.status === 200) {
      setPayload(prev => ({
        ...prev,
        avatar: response.data?.secure_url
      }))
    }
  }

  return (
    <div className="flex flex-col gap-5 items-center px-6">
      <h1 className="text-3xl text-start w-full py-4 font-medium border-b-2 border-gray-200">
        Thông tin cá nhân
      </h1>
      <div className="w-full flex flex-row">
        <div className="w-3/5 flex flex-col gap-4">
          {isEdit ? (
            <>
              <InputFormV2 
                value={payload.phone}
                setValue={setPayload}
                invalidFields={invalidFields}
                setInvalidFields={setInvalidFields} 
                label="Số điện thoại"
                name={'phone'}
              />
              <InputFormV2 
                value={payload.email}
                setValue={setPayload}
                invalidFields={invalidFields}
                setInvalidFields={setInvalidFields} 
                label="Email"
                name={'email'}
              />
              <InputFormV2 
                value={payload.name}
                setValue={setPayload}
                invalidFields={invalidFields}
                setInvalidFields={setInvalidFields} 
                label="Tên người dùng"
                name={'name'}
              />
              {/* <InputFormV2 
                value={payload.password}
                setValue={setPayload}
                invalidFields={invalidFields}
                setInvalidFields={setInvalidFields} 
                label="Mật khẩu"
                name={'password'}
              /> */}
              <InputFormV2 
                value={payload.zalo}
                setValue={setPayload}
                invalidFields={invalidFields}
                setInvalidFields={setInvalidFields} 
                label="Zalo"
                name={'zalo'}
              />
              <InputFormV2 
                value={payload.fbUrl}
                setValue={setPayload}
                invalidFields={invalidFields}
                setInvalidFields={setInvalidFields} 
                label="Facebook"
                name={'fbUrl'}
              />
            </>
          ) : (
            <>
              <InputReadOnly label={"Mã thành viên"} value={userData.id?.match(/\d/g).join("")?.slice(0, 7)} />
              <InputReadOnly label={"Số điện thoại"} value={userData.phone} />
              <InputReadOnly label={"Tên người dùng"} value={userData.name} />
              <InputReadOnly label={"Email"} value={userData.email} />
              <InputReadOnly label={"Zalo"} value={userData.zalo ? userData.zalo : ""} />
              <InputReadOnly label={"Facebook"} value={userData.fbUrl ? userData.fbUrl : ""} />
            </>
          )}
          <div className="mt-5 flex items-center justify-center">
            {isEdit ? (
             <div className="w-full flex flex-row gap-2">
              <Button
                onClick={() => {
                  setIsEdit(false)
                }}
                text={"Hủy"}
                bgColor="bg-red-500"
                textColor="text-white"
                fullWidth
              />
               <Button
                onClick={() => {
                  handleSubmit()
                }}
                text={"Lưu"}
                bgColor="bg-secondary"
                textColor="text-white"
                fullWidth
              />
             </div>
            ) : (
              <Button
              onClick={() => {
                setIsEdit(true)
              }}
              text={"Chỉnh sửa"}
              bgColor="bg-secondary"
              textColor="text-white"
              fullWidth
            />
            )}
            </div>
        </div>
        <div className="w-2/5">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-medium text-lg py-2">Ảnh đại diện</h1>
            {isEdit ? (
              <>
                <img src={payload.avatar ||  anonAvatar} alt="" className="rounded-full w-60 h-60 object-cover border-4 shadow-md border-secondary"/>
                <span className="mt-10 font-semibold text-lx">Thay đổi ảnh</span>
                <input onChange={handleUploadFile} type="file" id="avatar" className="appearance-none my-4" />
                <span className="text-red-500 text-sm">
                  {invalidFields?.some((item) => (item.name = 'avatar')) 
                    && invalidFields?.find((item) => (item.name = 'avatar'))?.message}
                </span>
              </>  
            ) : (
              <img src={userData.avatar ||  anonAvatar} alt="" className="rounded-full w-60 h-60 object-cover border-4 shadow-md border-secondary"/>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default UserInfor;
