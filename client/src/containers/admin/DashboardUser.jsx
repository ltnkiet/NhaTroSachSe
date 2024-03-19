import React, { useEffect, useState, useRef } from "react";
import * as actions from "store/actions";
import { useDispatch, useSelector } from "react-redux";
import { formatTime } from "utils/helper";
import { Button, QuickView } from "components";
import { Pagination } from "components";
import Swal from "sweetalert2";
import { useSearchParams } from "react-router-dom";

const DashboardUser = () => {
  const [userList, setUserList] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [searchParams] = useSearchParams();
  const listRef = useRef();

  useEffect(() => {
    !user && dispatch(actions.getAllUser());
    setUserList(user);
    // eslint-disable-next-line
  }, [user]);

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
    dispatch(actions.getAllUser(searchParamsObject));
    // eslint-disable-next-line
  }, [searchParams]);

  return (
    <div ref={listRef} className="flex flex-col gap-5">
      <div className="px-6 py-4 border-b-2 border-gray-200 flex items-center justify-between">
        <h1 className="text-3xl font-medium ">Quản lý người dùng</h1>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="flex w-full bg-main text-white">
            <th className="border flex-1 p-2">Mã người dùng</th>
            <th className="border flex-1 p-2">Tên người dùng</th>
            <th className="border flex-1 p-2">Số điện thoại</th>
            <th className="border flex-1 p-2">Ngày tham gia</th>
            <th className="border flex-1 p-2">Số bài viết</th>
          </tr>
        </thead>
        <tbody>
          {userList?.length > 0 &&
            userList?.map((item) => {
              return (
                <tr className="flex items-center h-[80px]" key={item.id}>
                  <td className="border flex-1 h-full flex items-center justify-center px-2">
                    #{item?.id.match(/\d/g).join("")?.slice(0, 7)}
                  </td>
                  <td className="border flex-1 h-full flex items-center justify-center px-2">
                    {item?.name.length > 65
                      ? item?.name.slice(0, 65) + "..."
                      : item?.name}
                  </td>
                  <td className="border flex-1 h-full flex items-center justify-center px-2">
                    {item?.phone}
                  </td>
                  <td className="border flex-1 h-full flex items-center justify-center px-2">
                    {formatTime(item?.createdAt)}
                  </td>
                  <td className="border flex-1 h-full flex items-center justify-center px-2">
                    {item?.postCount}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Pagination list={userList} />
    </div>
  );
};

export default DashboardUser;
