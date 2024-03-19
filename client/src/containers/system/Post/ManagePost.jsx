import React, { useEffect, useState, useRef } from "react";
import * as actions from "store/actions";
import { useDispatch, useSelector } from "react-redux";
import { formatTime } from "utils/helper";
import { Button, EditPost } from "components";
import { Pagination } from "components";
import { apiDeletePost } from "services";
import Swal from "sweetalert2";
import { useSearchParams } from "react-router-dom";

const ManagePost = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [update, setUpdate] = useState(false);
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState(0);
  const [sort, setSort] = useState(0);
  const dispatch = useDispatch();
  const { postByUser, dataPost } = useSelector((state) => state.post);
  const [searchParams] = useSearchParams();
  const listRef = useRef();

  useEffect(() => {
    !dataPost && dispatch(actions.getPostByUser());
  }, [dataPost, update]);

  useEffect(() => {
    setPosts(postByUser);
  }, [postByUser]);

  useEffect(() => {
    !dataPost && setIsEdit(false);
  }, [dataPost]);

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
    if (status === 1) searchParamsObject.status = "active";
    if (status === 2) searchParamsObject.status = "pending";
    dispatch(actions.getPostByUser(searchParamsObject));
    // eslint-disable-next-line
  }, [searchParams, status]);

  useEffect(() => {
    listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    // eslint-disable-next-line
  }, [searchParams.get("page")]);

  const handleDeletePost = (postId) => {
    Swal.fire({
      icon: "question",
      title: "Xóa bài viết",
      text: "Bạn có chắc là muốn xóa bài viết này?",
      cancelButtonText: "Hủy",
      confirmButtonText: "Xóa",
      showCancelButton: true,
    }).then(async (rs) => {
      if (rs.isConfirmed) {
        const res = await apiDeletePost(postId);
        if (res?.data?.err === 0) {
          setUpdate((prev) => !prev);
          Swal.fire("Hoàn tất", res?.data?.msg, "success");
        } else Swal.fire("Sự cố", res?.data?.msg, "error");
      }
    });
  };

  useEffect(() => {
    let sortedPosts = [...postByUser];
    if (sort === 1) {
      sortedPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sort === 2) {
      sortedPosts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
    setPosts(sortedPosts);
  }, [postByUser, sort]);

  return (
    <div ref={listRef} className="flex flex-col gap-5">
      <div className="px-6 py-4 border-b-2 border-gray-200 flex items-center justify-between">
        <h1 className="text-3xl font-medium ">Quản lý bài đăng</h1>
        <div className="flex gap-5">
          <select
            onChange={(e) => setStatus(+e.target.value)}
            value={status}
            className="outline-none border p-2 border-gray-200 rounded-md">
            <option value="0">Xem theo trạng thái</option>
            <option value="1">Đang hoạt động</option>
            <option value="2">Đang xử lý</option>
          </select>
          <select
            onChange={(e) => setSort(+e.target.value)}
            value={sort}
            className="outline-none border p-2 border-gray-200 rounded-md ">
            <option value="0">Xem theo ngày</option>
            <option value="1">Ngày gần nhất</option>
            <option value="2">Ngày cũ nhất</option>
          </select>
        </div>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="flex w-full bg-main text-white">
            {/* <th className="border flex-1 p-2">Mã tin</th> */}
            <th className="border flex-1 p-2">Tiêu đề</th>
            <th className="border flex-1 p-2">Ngày tạo</th>
            <th className="border flex-1 p-2">Ngày chỉnh sửa</th>
            <th className="border flex-1 p-2">Trạng thái</th>
            <th className="border flex-1 p-2">Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {posts?.length > 0 &&
            posts?.map((item) => {
              return (
                <tr className="flex items-center h-[80px]" key={item.id}>
                  {/* <td className="border flex-1 h-full flex items-center justify-center px-2">
                    #{item?.id.match(/\d/g).join("")?.slice(0, 7)}
                  </td> */}
                  <td className="border flex-1 h-full flex items-center justify-center p-2">
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
                  <td
                    className={`border flex-1 h-full flex items-center justify-center px-2 font-bold
                    ${
                      item?.status === "pending"
                        ? "text-red-500"
                        : "text-green-500"
                    }
                  `}>
                    {item?.status === "pending"
                      ? "Chưa được duyệt"
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
                    <Button
                      onClick={() => handleDeletePost(item.id)}
                      text={"Xóa"}
                      bgColor={"bg-red-500"}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {isEdit && <EditPost setIsEdit={setIsEdit} />}
      <Pagination list={postByUser} />
    </div>
  );
};

export default ManagePost;
