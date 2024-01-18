import React, { memo } from "react";
import { intro, path } from "utils/constant";
import icons from "asset/icon";
import { Button } from "components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatVietnameseToString } from "utils/Common/formatVietnameseToString";

const { GrStar } = icons;
const star = [1, 2, 3, 4, 5];

const Intro = () => {
  const { categories } = useSelector((state) => state.app);
  return (
    <div className="w-[70%] bg-white rounded-md shadow-md p-4 mt-5 gap-4 flex-col flex justify-center items-center
      border-4 border-dashed border-secondary">
      <h3 className="font-bold text-lg">{intro.title}</h3>
      <p className="text-gray-800 text-center my-4">
        {intro.description}
        <span className="text-link">
          {categories?.length > 0 &&
            categories.map((item) => {
              return (
                <Link
                  to={`/${formatVietnameseToString(item.value)}`}
                  key={item.code}
                  className="text-secondary font-medium hover:text-main">
                  {`${item.value.toLowerCase()}, `}
                </Link>
              );
            })}
        </span>
        {intro.description2}
      </p>
      <div className="flex items-center justify-around w-full">
        {intro.statistic.map((item, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center"
              key={index}>
              <h4 className="font-bold text-lg">{item.value}</h4>
              <p className="text-gray-700">{item.name}</p>
            </div>
          );
        })}
      </div>
      <h3 className="font-bold text-lg py-2">{intro.price}</h3>
      <div className="flex items-center justify-center gap-1">
        {star.map((item) => {
          return (
            <span key={item}>
              <GrStar size={24} color="yellow" />
            </span>
          );
        })}
      </div>
      <p className="text-gray-600 italic text-center">{intro.comment}</p>
      <span className="text-gray-700">{intro.author}</span>
      <h3 className="font-bold text-lg py-2">{intro.question}</h3>
      <p>{intro.answer}</p>
      <Link to={`${path.SYSTEM}${path.CREATE_POST}`}>
        <Button
          text="Đăng tin ngay"
          bgColor="bg-secondary"
          textColor="text-white"
          px="px-6"
        />
      </Link>
      <div className="h-12"></div>
    </div>
  );
};

export default memo(Intro);
