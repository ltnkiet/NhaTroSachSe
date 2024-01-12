import React, { memo, useEffect, useState } from "react";
import { Select, InputReadOnly, InputFormV3 } from "..";
import {
  apiGetPublicProvinces,
  apiGetPublicDistrict,
  apiGetPublicWard,
} from "../../services";
import { useSelector } from 'react-redux'

const Address = ({ setPayload, invalidFields, setInvalidFields }) => {
  const { dataPost } = useSelector(state => state.post)

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [province, setProvince] = useState(""); 
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [street, setStreet] = useState("");

  const [reset, setReset] = useState(false);

  useEffect(() => {
    let addressArray = dataPost?.address?.split(',')
    let foundProvince = provinces.length > 0 && 
      provinces?.find(item => item.province_name === addressArray[addressArray.length - 1]?.trim())
    setProvince(foundProvince ? foundProvince.province_id : "")
  }, [provinces])

  useEffect(() => {
    let addressArray = dataPost?.address?.split(',')
    let foundDistrict = districts.length > 0 && 
      districts?.find(item => item.district_name === addressArray[addressArray.length - 2]?.trim())
    setDistrict(foundDistrict ? foundDistrict.district_id : "")
  }, [districts])

  useEffect(() => {
    let addressArray = dataPost?.address?.split(',')
    let foundWard = wards.length > 0 && 
      wards?.find(item => item.ward_name === addressArray[addressArray.length - 3]?.trim())
    setWard(foundWard ? foundWard.ward_id : "")
  }, [wards])

  useEffect(() => {
    let addressArray = dataPost?.address?.split(',');
    setStreet(addressArray[0]?.trim() || ""); // Assuming street is the first element in the array
  }, [dataPost?.address]);


  useEffect(() => {
    const fetchPublicProvince = async () => {
      const response = await apiGetPublicProvinces();
      if (response.status === 200) {
        setProvinces(response?.data.results);
      }
    };
    fetchPublicProvince();
  }, []);

  useEffect(() => {
    setDistrict("");
    const fetchPublicDistrict = async () => {
      const response = await apiGetPublicDistrict(province);
      if (response.status === 200) {
        setDistricts(response.data?.results);
      }
    };
    province && fetchPublicDistrict();
    !province ? setReset(true) : setReset(false);
    !province && setDistricts([]);
  }, [province]);

  useEffect(() => {
    setWard("");
    const fetchPublicWard = async () => {
      const response = await apiGetPublicWard(district);
      if (response.status === 200) {
        setWards(response.data?.results);
      }
    };
    district && fetchPublicWard();
    !district ? setReset(true) : setReset(false);
    !district && setWards([]);
  }, [district]);

  useEffect(() => {
    setPayload((prev) => ({
      ...prev,
      address: `${street ? `${street},` : ""} ${
        ward
          ? `${wards?.find((item) => item.ward_id === ward)?.ward_name},`
          : ""
      } ${
        district
          ? `${
              districts?.find((item) => item.district_id === district)
                ?.district_name
            },`
          : ""
      } ${
        province
          ? provinces?.find((item) => item.province_id === province)
              ?.province_name
          : ""
      }`,
      province: province
        ? provinces?.find((item) => item.province_id === province)
            ?.province_name
        : "",
    }));
  }, [province, district, ward, street]);

  return (
    <div>
      <h2 className="font-semibold text-xl py-4">Địa chỉ cho thuê</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Select
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields} 
            type="province"
            value={province}
            setValue={setProvince}
            options={provinces}
            label="Tỉnh/Thành phố"
          />
          <Select
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields} 
            reset={reset}
            type="district"
            value={district}
            setValue={setDistrict}
            options={districts}
            label="Quận/Huyện"
          />
          <Select
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields} 
            reset={reset}
            type="ward"
            value={ward}
            setValue={setWard}
            options={wards}
            label="Phường/Xã"
          />
        </div>
        <InputFormV3
          name="street"
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields} 
          value={street}
          setValue={setStreet}
          label="Số nhà và tên đường"
        />
        <InputReadOnly
          label="Địa chỉ chính xác"
          value={`${street ? `${street},` : ""} ${
            ward
              ? `${wards?.find((item) => item.ward_id === ward)?.ward_name},`
              : ""
          } ${
            district
              ? `${
                  districts?.find((item) => item.district_id === district)
                    ?.district_name
                },`
              : ""
          } ${
            province
              ? provinces?.find((item) => item.province_id === province)
                  ?.province_name
              : ""
          }`}
        />
      </div>
    </div>
  );
};

export default memo(Address);
