import React from "react";

const ManagePost = () => {
  return (
    <>
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-3xl font-medium ">
          Quản lý bài đăng
        </h1>
        <select className="outline-none border p-2 border-gray-200 rounded-md" name="" id="">
          <option value="">Lọc theo trạng thái</option>
        </select>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th>Mã tin</th>
            <th>Ảnh bìa</th>
            <th>Tiêu đề</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NhaTroSachSe</td>
            <td>NhaTroSachSe</td>
            <td>NhaTroSachSe</td>
          </tr>
          <tr>
            <td>NhaTroSachSe</td>
            <td>NhaTroSachSe</td>
            <td>NhaTroSachSe</td>
          </tr>
          <tr>
            <td>NhaTroSachSe</td>
            <td>NhaTroSachSe</td>
            <td>NhaTroSachSe</td>
          </tr>
          <tr>
            <td>NhaTroSachSe</td>
            <td>NhaTroSachSe</td>
            <td>NhaTroSachSe</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ManagePost;
