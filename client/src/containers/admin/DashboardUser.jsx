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
        {/* <div className="flex gap-5">
          <select
            onChange={(e) => setStatus(+e.target.value)}
            value={status}
            className="outline-none border p-2 border-gray-200 rounded-md">
            <option value="0">Xem theo trạng thái</option>
            <option value="1">Đang xử lý</option>
            <option value="2">Đang hoạt động</option>
          </select>
          <select
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
            className="outline-none border p-2 border-gray-200 rounded-md ">
            <option value="0">Xem theo ngày</option>
            <option value="1">Ngày gần nhất</option>
            <option value="2">Ngày cũ nhất</option>
          </select>
        </div> */}
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="flex w-full bg-main text-white">
            <th className="border flex-1 p-2">Mã người dùng</th>
            <th className="border flex-1 p-2">Tên người dùng</th>
            <th className="border flex-1 p-2">Số điện thoại</th>
            <th className="border flex-1 p-2">Ngày tham gia</th>
            <th className="border flex-1 p-2">Số bài viết</th>
            <th className="border flex-1 p-2">Tùy chọn</th>
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
                    5
                  </td>
                  <td className="border flex-1 h-full flex items-center justify-center gap-2 px-2">
                    <Button
                      text={"Xem"}
                      bgColor={"bg-secondary"}
                      // onClick={() => {
                      //   dispatch(actions.getuserLimit({ id: item.id }));
                      //   setQuickView(true);
                      // }}
                    />
                    <Button
                      // onClick={() => handleDeletePost(item.id)}
                      text={"Xóa"}
                      bgColor={"bg-red-500"}
                    />
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
