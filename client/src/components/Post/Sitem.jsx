import React from "react";
import moment from "moment";
import "moment/locale/vi";
import { Link } from "react-router-dom";
import { formatVietnameseToString } from "utils/Common/formatVietnameseToString";
import { path } from "utils/constant";

const Sitem = ({ title, price, image, createdAt, id }) => {
  const formatTime = (createdAt) => {
    return moment(createdAt).fromNow();
  };
  return (
    <Link
      to={`${path.DETAIL}${formatVietnameseToString(
        title?.replaceAll("/", "")
      )}/${id}`}
      className="w-full flex items-center gap-2 py-2 border-b border-gray-300">
      <img
        src={image[0]}
        alt="anh"
        className="w-[65px] h-[65px] object-cover flex-none rounded-md"
      />
      <div className="w-full flex-auto flex flex-col justify-between gap-1">
        <h4 className="text-secondary text-[14px]">{`${title?.slice(
          0,
          45
        )}...`}</h4>
        <div className=" flex items-center justify-between w-full">
          <span className="text-sm font-medium text-green-500">{price}</span>
          <span className="text-sm text-gray-300">{formatTime(createdAt)}</span>
        </div>
      </div>
    </Link>
  );
};

export default Sitem;
