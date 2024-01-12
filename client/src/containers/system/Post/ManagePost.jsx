  import React, { useEffect, useState } from "react";
  import * as actions from "../../../store/actions";
  import { useDispatch, useSelector } from "react-redux";
  import { formatTime } from "../../../utils/helper";
  import { Button, EditPost } from "../../../components";
  import Pagination from '../../public/Post/Pagination'

  const ManagePost = () => {
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    const { postByUser, dataPost } = useSelector((state) => state.post);

    useEffect(() => {
      dispatch(actions.getPostByUser());
    }, []);

    useEffect(() => {
      !dataPost && setIsEdit(false);
    }, [dataPost]);

    return (
      <div className="flex flex-col gap-5">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h1 className="text-3xl font-medium ">Quản lý bài đăng</h1>
          <div className="flex gap-5">
            <select className="outline-none border p-2 border-gray-200 rounded-md">
              <option value="0">Xem theo trạng thái</option>
              <option value="1">Đang xử lý</option>
              <option value="2">Đang hoạt động</option>
            </select>
            <select className="outline-none border p-2 border-gray-200 rounded-md ">
              <option value="0">Xem theo ngày</option>
              <option value="1">Ngày gần nhất</option>
              <option value="2">Ngày cũ nhất</option>
            </select>
          </div>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="flex w-full bg-main text-white">
              <th className="border flex-1 p-2">Mã tin</th>
              <th className="border flex-1 p-2">Tiêu đề</th>
              <th className="border flex-1 p-2">Ngày tạo</th>
              <th className="border flex-1 p-2">Ngày chỉnh sửa</th>
              <th className="border flex-1 p-2">Trạng thái</th>
              <th className="border flex-1 p-2">Tùy chọn</th>
            </tr>
          </thead>
          <tbody>
            { postByUser?.map((item) => {
                return (
                  <tr className="flex items-center h-[80px]" key={item.id}>
                    <td className="border flex-1 h-full flex items-center justify-center px-2">
                      #{item?.id.match(/\d/g).join("")?.slice(0, 7)}
                    </td>
                    <td className="border flex-1 h-full flex items-center justify-center px-2">
                      {item?.title.length > 65
                        ? item?.title.slice(0, 65) + "..."
                        : item?.title}
                    </td>
                    <td className="border flex-1 h-full flex items-center justify-center px-2">
                      {formatTime(item?.createdAt)}
                    </td>
                    <td className="border flex-1 h-full flex items-center justify-center px-2">
                      {formatTime(item?.updatedAt)}
                    </td>
                    <td className="border flex-1 h-full flex items-center justify-center px-2">
                      {item?.status === "pending"
                        ? "Đang xử lý"
                        : "Đang hoạt động"}
                    </td>
                    <td className="border flex-1 h-full flex items-center justify-center gap-2 px-2">
                      <Button
                        text={"Sửa"}
                        bgColor={"bg-secondary"}
                        onClick={() => {
                          dispatch(actions.editPosts(item));
                          setIsEdit(true);
                        }}
                      />
                      <Button text={"Xóa"} bgColor={"bg-red-500"} />
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        {isEdit && <EditPost setIsEdit={setIsEdit} />}
        {/* <Pag/> */}
        <Pagination />
      </div>
    );
  };

  export default ManagePost;
