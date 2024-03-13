import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostsDetail } from "store/actions";
import { SliderCustom, Map, BoxInfor, RelatedPost } from "components";
import icons from "asset/icon";
import { formatTimeV2 } from "utils/helper";

const { IoLocation, TbReportMoney, TbShapeOff, FaRegClock } = icons;

const DetailPost = ({ setQuickView }) => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { postDetail } = useSelector((state) => state.post);
  const listRef = useRef();

  useEffect(() => {
    postId && dispatch(getPostsDetail(postId));
  }, [postId, setQuickView]);

  useEffect(() => {
    listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    // eslint-disable-next-line
  }, [listRef]);

  const renderDescription = () => {
    if (!postDetail?.description) return null;
    const descriptionLines = JSON.parse(postDetail?.description.split("\n"));
    return descriptionLines.map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <div ref={listRef} className="w-full flex gap-4">
      <div className="w-[70%]">
        <SliderCustom
          images={
            postDetail &&
            postDetail.images &&
            postDetail?.images.image &&
            JSON.parse(postDetail?.images.image)
          }
        />
        <div className="bg-white rounded-md shadow-md p-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-secondary">
              {postDetail?.title}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-medium text-lg">Chuyên mục:</span>
              <span className=" text-main font-medium underline hover:text-secondary cursor-pointer">
                {postDetail?.overviews?.type}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <IoLocation className="text-blue-500 text-xl" />
              <span className="font-medium text-lg">Địa chỉ:</span>
              <span>{postDetail?.address}</span>
            </div>
            <div className="flex items-center gap-10 mt-2 font-medium">
              <span className="flex items-center gap-2 text-lg">
                <TbReportMoney />
                <span className="font-medium text-green-500">
                  {postDetail?.attributes?.price}
                </span>
              </span>
              <span className="flex items-center gap-2">
                <TbShapeOff className="text-lg" />
                <span>{postDetail?.attributes?.acreage}</span>
              </span>
              <span className="flex items-center gap-2">
                <FaRegClock className="text-lg" />
                <span>{formatTimeV2(postDetail?.createdAt)}</span>
              </span>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-medium">Thông tin mô tả</h3>
            <div className="flex flex-col flex-wrap gap-2">
              {renderDescription()}
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-medium my-4">Bản đồ</h3>
            <Map address={postDetail?.address} />
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-4 mt-10">Đánh giá</div>
      </div>
      <div className="w-[30%] flex flex-col gap-4">
        <BoxInfor user={postDetail?.user} />
        {!setQuickView && <RelatedPost />}
      </div>
    </div>
  );
};

export default DetailPost;
