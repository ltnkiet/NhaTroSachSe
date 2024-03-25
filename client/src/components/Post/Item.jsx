import React, { memo, useState } from "react";
import icons from "asset/icon";
import nonAvatar from "asset/img/anon-avatar.png";
import { Link } from "react-router-dom";
import { formatVietnameseToString } from "utils/Common/formatVietnameseToString";
import { path } from "utils/constant";

const indexs = [0, 1, 2, 3];

const { RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons;

const Item = ({
  images,
  user,
  title,
  description,
  attributes,
  address,
  id,
}) => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);


  return (
    <div className="w-full flex border-t border-orange-600 py-4 ">
      <Link
        to={`${path.DETAIL}${formatVietnameseToString(
          title?.replaceAll("/", "")
        )}/${id}`}
        className="w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer">
        {images &&
          images.length > 0 &&
          images
            .filter((i, index) => indexs.some((i) => i === index))
            ?.map((i, index) => {
              return (
                <img
                  key={index}
                  src={i}
                  alt="preview"
                  className="w-[47%] h-[120px] object-cover"
                />
              );
            })}
        <span className="bg-overlay-70 text-white px-2 rounded-md absolute left-1 bottom-4">{`${images.length} ảnh`}</span>
        <span
          className="text-white absolute right-5 bottom-1"
          onMouseEnter={() => setIsHoverHeart(true)}
          onMouseLeave={() => setIsHoverHeart(false)}>
          {isHoverHeart ? (
            <RiHeartFill size={26} color="red" />
          ) : (
            <RiHeartLine size={26} color="yellow" />
          )}
        </span>
      </Link>
      <div className="w-[70%]">
        <Link
          to={`${path.DETAIL}${formatVietnameseToString(
            title?.replaceAll("/", "")
          )}/${id}`}>
          <div className="flex justify-between gap-2 w-full">
            <div className="flex flex-col">
              {/* <div className="text-red-600 font-medium flex flex-row">
                {handleStar(+star).length > 0 &&
                  handleStar(+star).map((star, number) => {
                    return <span key={number}>{star}</span>;
                })}
              </div> */}
              <p className="font-medium">{title}</p>
            </div>
            <div className="w-[10%] flex justify-end">
              <BsBookmarkStarFill size={24} color="orange" />
            </div>
          </div>
          <div className="my-2 flex items-center justify-between gap-2">
            <span className="font-bold flex-3 text-green-600 whitespace-nowrap overflow-hidden text-ellipsis">
              {attributes?.price}
            </span>
            <span className="flex-1">{attributes?.acreage}</span>
            <span className="flex-3 whitespace-nowrap overflow-hidden text-ellipsis text-sm">
              {`
                ${address.split(",")[address.split(",").length - 2]}, 
                ${address.split(",")[address.split(",").length - 1]}
              `}
            </span>
          </div>
          <p className="text-gray-500 w-full h-[50px] text-ellipsis overflow-hidden">
            {JSON.parse(description)}
          </p>
          <div className="flex items-center my-5 justify-between">
            <div className="flex items-center">
              <img
                src={user?.avatar ? user?.avatar : nonAvatar}
                alt="avatar"
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
              <p className="ml-2">{user?.name}</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <button
                type="button"
                className="bg-secondary text-white p-1 rounded-md">
                {`Gọi ${user?.phone}`}
              </button>
              <button
                type="button"
                className="text-secondary p-1 rounded-md border border-secondary">
                Nhắn zalo
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default memo(Item);
