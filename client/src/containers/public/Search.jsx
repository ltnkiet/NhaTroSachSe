import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, createSearchParams, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { path } from "../../utils/constant";
import { SearchItem, Modal } from "../../components";

import icons from "../../asset/icon";
const {
  BsChevronRight,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdOutlineHouseSiding,
  FiSearch,
} = icons;

const Search = () => {

  const { provinces, areas, prices, categories } = useSelector(state => state.app)
  const navigate = useNavigate()
  const location = useLocation()
  const [queries, setQueries] = useState({})
  const [isShowModal, setIsShowModal] = useState(false)
  const [content, setContent] = useState([])
  const [name, setName] = useState('')
  const [defaultText, setDefaultText] = useState('')
  const [arrMinMax, setArrMinMax] = useState({})

  const handleShowModal = (content, name, defaultText) => {
    setContent(content)
    setName(name)
    setDefaultText(defaultText)
    setIsShowModal(true)
  };

  useEffect(() => {
    if (!location?.pathname.includes(path.SEARCH)) {
      setQueries({})
    }
  }, [location]);

  const handleSubmit = useCallback((e, query, arrMaxMin) => {
    e.stopPropagation()
    setQueries(prev => ({ ...prev, ...query }))
    setIsShowModal(false)
    arrMaxMin && setArrMinMax(prev => ({ ...prev, ...arrMaxMin }))
    // eslint-disable-next-line
  }, [isShowModal, queries]); 

  const handleSearch = () => {
    const queryCodes = Object.entries(queries).filter(item => item[0].includes('Number') || item[0].includes('Code')).filter(item => item[1])
    let queryCodesObj = {}
    queryCodes.forEach(item => { queryCodesObj[item[0]] = item[1] })
    const queryText = Object.entries(queries).filter(item => !item[0].includes('Code') || !item[0].includes('Number'))
    let queryTextObj = {}
    queryText.forEach(item => { queryTextObj[item[0]] = item[1] })
    let titleSearch = `${queryTextObj.category
        ? queryTextObj.category
        : 'Cho thuê tất cả'} ${queryTextObj.province
            ? `tỉnh ${queryTextObj.province}`
            : ''} ${queryTextObj.price
                ? `giá ${queryTextObj.price}`
                : ''} ${queryTextObj.area
                    ? `diện tích ${queryTextObj.area}` : ''} `
    navigate({
        pathname: path.SEARCH,
        search: createSearchParams(queryCodesObj).toString(),
    }, { state: { titleSearch } })
  }

  return (
    <>
      <div className="p-[10px] w-[70%] my-3 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
        <span
          onClick={() => handleShowModal(categories, "category", "Tìm tất cả")}
          className="cursor-pointer flex-1">
          <SearchItem
            IconBefore={<MdOutlineHouseSiding />}
            fontWeight
            IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
            text={queries.category}
            defaultText={"Tìm tất cả"}
          />
        </span>
        <span
          onClick={() => handleShowModal(provinces, "province", "Toàn quốc")}
          className="cursor-pointer flex-1">
          <SearchItem
            IconBefore={<HiOutlineLocationMarker />}
            IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
            text={queries.province}
            defaultText={"Toàn quốc"}
          />
        </span>
        <span
          onClick={() => handleShowModal(prices, "price", "Chọn giá")}
          className="cursor-pointer flex-1">
          <SearchItem
            IconBefore={<TbReportMoney />}
            IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
            text={queries.price}
            defaultText={"Chọn giá"}
          />
        </span>
        <span
          onClick={() => handleShowModal(areas, "area", "Chọn diện tích")}
          className="cursor-pointer flex-1">
          <SearchItem
            IconBefore={<RiCrop2Line />}
            IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
            text={queries.area}
            defaultText={"Chọn diện tích"}
          />
        </span>
        <button
          type="button"
          onClick={handleSearch}
          className="outline-none py-2 px-4 flex-1 bg-secondary rounded-md text-[13.3px] flex items-center justify-center gap-2 text-white font-medium">
          <FiSearch />
          Tìm kiếm
        </button>
      </div>
      {isShowModal && <Modal  
        handleSubmit={handleSubmit}
        queries={queries}
        content={content}
        name={name}
        arrMinMax={arrMinMax}
        setIsShowModal={setIsShowModal}
        defaultText={defaultText}
        />
      }
    </>
  );
};

export default Search;
