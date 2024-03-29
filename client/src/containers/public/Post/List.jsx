import React, { useEffect, useRef, useState } from "react";
import { Item, Pagination, Button, Loading } from "components";
import { getPostsLimit } from "store/actions/post";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const List = ({ categoryCode }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { posts } = useSelector((state) => state.post);
  const listRef = useRef();
  const [sort, setSort] = useState(0);

  //Params
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
    if (categoryCode) searchParamsObject.categoryCode = categoryCode;
    if (sort === 1) searchParamsObject.order = ["createdAt", "DESC"];
    dispatch(getPostsLimit(searchParamsObject));
    // eslint-disable-next-line
  }, [searchParams, categoryCode, sort]);

  useEffect(() => {
    listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    // eslint-disable-next-line
  }, [searchParams.get("page")]);

  return (
    <div
      ref={listRef}
      className="w-full p-2 bg-white shadow-md rounded-md px-6">
      <div className="flex items-center justify-between my-3">
        <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
      </div>
      <div className="flex items-center gap-2 my-2">
        <span>Sắp xếp:</span>
        <Button
          bgColor="bg-gray-200"
          text="Mặc định"
          textColor={`${sort === 0 && `text-secondary`}`}
          onClick={() => setSort(0)}
        />
        <Button
          bgColor="bg-gray-200"
          text="Mới nhất"
          textColor={`${sort === 1 && `text-secondary`}`}
          onClick={() => setSort(1)}
        />
      </div>
      <div className="items bg-[#fff9f3]">
        {posts && posts?.length === 0 ? (
          <div className="flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          posts.map((item) => {
            return (
              <Item
                key={item?.id}
                address={item?.address}
                attributes={item?.attributes}
                description={item?.description}
                images={JSON.parse(item?.images?.image)}
                star={+item?.star}
                title={item?.title}
                user={item?.user}
                id={item?.id}
              />
            );
          })
        )}
      </div>
      <Pagination list={posts} />
    </div>
  );
};

export default List;
