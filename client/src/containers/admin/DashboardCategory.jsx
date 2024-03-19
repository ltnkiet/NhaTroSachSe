import React, { useEffect, useState, useRef } from "react";
import * as actions from "store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Popup } from "components";
import { Pagination } from "components";
import { apiDeleteCategories } from "services";
import Swal from "sweetalert2";
import { useSearchParams } from "react-router-dom";

const DashboardCategory = () => {
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(false);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  const { categoriesByAdmin, dataCate } = useSelector((state) => state.app);
  const [searchParams] = useSearchParams();
  const listRef = useRef();

  useEffect(() => {
    !dataCate && dispatch(actions.getCategoriesAdmin());
    // eslint-disable-next-line
  }, [dataCate, update]);

  useEffect(() => {
    setCategory(categoriesByAdmin);
  }, [categoriesByAdmin]);

  useEffect(() => {
    let params = [];
    for (let entry of searchParams.entries()) {
      params.push(entry);
    }
    let searchParamsObject = {};
    params?.forEach((i) => {
      if (Object.keys(searchParamsObject)?.some((item) => item === i[0])) {
        searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]];
      } else {
        searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] };
      }
    });
    dispatch(actions.getCategoriesAdmin(searchParamsObject));
    // eslint-disable-next-line
  }, [searchParams, update]);

  useEffect(() => {
    listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    // eslint-disable-next-line
  }, [searchParams.get("page")]);

  const handleDeleteCategory = (cateId) => {
    Swal.fire({
      icon: "question",
      title: "Xóa danh mục",
      text: "Bạn có chắc là muốn xóa danh mục này?",
      cancelButtonText: "Hủy",
      confirmButtonText: "Xóa",
      showCancelButton: true,
    }).then(async (rs) => {
      if (rs.isConfirmed) {
        const res = await apiDeleteCategories(cateId);
        if (res?.data?.err === 0) {
          setUpdate((prev) => !prev);
          Swal.fire("Hoàn tất", res?.data?.msg, "success");
        } else Swal.fire("Sự cố", res?.data?.msg, "error");
      }
    });
  };

  return (
    <div ref={listRef} className="flex flex-col gap-5">
      <div className="px-6 py-4 border-b-2 border-gray-200 flex items-center justify-between">
        <h1 className="text-3xl font-medium ">Quản lý danh mục</h1>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="flex w-full bg-main text-white">
            <th className="border flex-1 p-2">Code</th>
            <th className="border flex-1 p-2">Danh mục</th>
            <th className="border flex-1 p-2">Tiêu đề</th>
            <th className="border flex-2 p-2">Tiêu đề phụ</th>
            <th className="border flex-1 p-2">Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {category?.length > 0 &&
            category?.map((item) => {
              return (
                <tr className="flex items-center h-[90px]" key={item.id}>
                  <td className="border flex-1 h-full flex items-center justify-center px-2 gap-2">
                    {item?.code}
                  </td>
                  <td className="border flex-1 h-full flex items-center justify-center px-2">
                    {item?.value}
                  </td>
                  <td className="border flex-1 h-full flex items-center justify-center px-2">
                    {item?.header}
                  </td>
                  <td className="border flex-2 h-full flex items-center justify-center px-2">
                    {item?.subheader.length > 150
                      ? item?.subheader.slice(0, 150) + "..."
                      : item?.subheader}
                  </td>
                  <td className="border flex-1 h-full flex items-center justify-center gap-2 px-2">
                    <Button
                      text={"Sửa"}
                      bgColor={"bg-secondary"}
                      onClick={() => {
                        dispatch(actions.editCategory(item));
                        setEdit(true);
                      }}
                    />
                    <Button
                      onClick={() => handleDeleteCategory(item.id)}
                      text={"Xóa"}
                      bgColor={"bg-red-500"}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {edit && <Popup setPopup={setEdit} />}
      <Pagination list={categoriesByAdmin} />
    </div>
  );
};

export default DashboardCategory;
