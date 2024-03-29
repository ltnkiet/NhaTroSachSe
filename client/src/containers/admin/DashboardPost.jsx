import React, { useEffect, useState, useRef } from "react";
import * as actions from "store/actions";
import { useDispatch, useSelector } from "react-redux";
import { formatTime } from "utils/helper";
import { Button, Loading, QuickView } from "components";
import { Pagination } from "components";
import { apiUpdatePostByAdmin } from "services";
import Swal from "sweetalert2";
import { useSearchParams } from "react-router-dom";

const DashboardPost = () => {
  const [quickView, setQuickView] = useState(false);
  const [update, setUpdate] = useState(false);
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState(0);
  const [sort, setSort] = useState(0);
  const dispatch = useDispatch();
  const { postByAdmin } = useSelector((state) => state.post);
  const [searchParams] = useSearchParams();
  const listRef = useRef();

  useEffect(() => {
    setPosts(postByAdmin);
  }, [postByAdmin, update]);

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
    dispatch(actions.getPostByAdmin(searchParamsObject));
    // eslint-disable-next-line
  }, [searchParams, status, update]);

  useEffect(() => {
    listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    // eslint-disable-next-line
  }, [searchParams.get("page")]);

  const handleSubmit = async (sts, postId) => {
    const payload = { sts, postId };
    const response = await apiUpdatePostByAdmin(payload);
    if (response?.data?.err === 0) {
      setUpdate((prev) => !prev);
      Swal.fire("Hoàn tất", response?.data?.msg, "success");
    } else {
      Swal.fire("Sự cố!", response?.data?.msg, "error");
    }
  };

  useEffect(() => {
    let sortedPosts = [...postByAdmin];
    if (sort === 1) {
      sortedPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sort === 2) {
      sortedPosts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
    setPosts(sortedPosts);
  }, [postByAdmin, sort]);

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
            <option value="2">Chưa được duyệt</option>
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
            <th className="border flex-1 p-2">Tác giả</th>
            <th className="border flex-2 p-2">Tiêu đề</th>
            <th className="border flex-1 p-2">Danh mục</th>
            <th className="border flex-1 p-2">Ngày đăng</th>
            <th className="border flex-1 p-2">Ngày cập nhật</th>
            <th className="border flex-1 p-2">Trạng thái</th>
            <th className="border flex-1 p-2">Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {posts && posts?.length === 0 ? (
            <div className="flex items-center justify-center">
              <Loading />
            </div>
          ) : (
            posts?.map((item) => {
              return (
                <tr className="flex items-center h-[80px]" key={item.id}>
                  <td className="border flex-1 h-full flex items-center justify-center px-2 gap-2">
                    <div className="w-10 h-10">
                      <img
                        src={item?.user?.avatar}
                        alt=""
                        className="rounded-full w-full h-full object-cover border-2 shadow-md border-secondary"
                      />
                    </div>
                    <div>{item?.user?.name}</div>
                  </td>
                  <td className="border flex-2 h-full flex items-center justify-center px-2">
                    {item?.title.length > 65
                      ? item?.title.slice(0, 65) + "..."
                      : item?.title}
                  </td>
                  <td className="border flex-1 h-full flex items-center justify-center px-2">
                    {item?.overviews?.type}
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
                      text={"Xem"}
                      bgColor={"bg-secondary"}
                      onClick={() => {
                        dispatch(actions.getPostsDetail(item.id));
                        setQuickView(true);
                      }}
                    />
                    {item.status === "active" ? (
                      <Button
                        onClick={() => handleSubmit("pending", item.id)}
                        text={"Ẩn"}
                        bgColor={"bg-red-500"}
                      />
                    ) : (
                      <Button
                        onClick={() => handleSubmit("active", item.id)}
                        text={"Duyệt"}
                        bgColor={"bg-green-500"}
                      />
                    )}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {quickView && <QuickView setQuickView={setQuickView} />}
      <Pagination list={postByAdmin} />
    </div>
  );
};

export default DashboardPost;
