import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsLimit } from 'store/actions'
import { SliderCustom } from 'components'
import icons from 'asset/icon'
import { formatTimeV2 } from 'utils/helper'

const { IoLocation, TbReportMoney, TbShapeOff, FaRegClock } = icons


const DetailPost = () => {
  const {postId} = useParams()
  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.post)
  const listRef = useRef();
  useEffect(() => {
    postId && dispatch(getPostsLimit({id: postId}))
  }, [postId])

  useEffect(() => {
    listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    // eslint-disable-next-line
  }, [listRef]);
  
  return (
    <div ref={listRef} 
      className='w-full flex gap-4'>
      <div className='w-[70%]'>
        <SliderCustom images={posts && posts.length > 0 && JSON.parse(posts[0]?.images?.image)}/>
        <div className='bg-white rounded-md shadow-md p-4'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl font-bold text-secondary'>{posts[0]?.title}</h1>
            <div className='flex items-center gap-2 mt-2'>
              <span className='font-medium text-lg'>Chuyên mục:</span>
              <span className=' text-main font-medium underline hover:text-secondary cursor-pointer'>{posts[0]?.overviews?.type}</span>
            </div>
            <div className='flex items-center gap-2 mt-2'>
              <IoLocation className='text-blue-500 text-xl'/>
              <span className='font-medium text-lg'>Địa chỉ:</span>
              <span>{posts[0]?.address}</span>
            </div>
            <div className='flex items-center gap-10 mt-2 font-medium'>
              <span className='flex items-center gap-2 text-lg'>
                <TbReportMoney/>
                <span className='font-medium text-green-500'>{posts[0]?.attributes?.price}</span>
              </span>
              <span className='flex items-center gap-2'>
                <TbShapeOff className='text-lg' />
                <span>{posts[0]?.attributes?.acreage}</span>
              </span>
              <span className='flex items-center gap-2'>
                <FaRegClock className='text-lg' />
                <span>{formatTimeV2(posts[0]?.createdAt)}</span>
              </span>
            </div>
          </div>
          <div className='mt-5'>
            <h3 className='text-lg font-medium'>Thông tin mô tả</h3>
            <div className='flex flex-col gap-2'>
              {posts[0]?.description && JSON.parse(posts[0]?.description)?.map((item, index) => (
                <span key={index}>{item}</span>    
              ))}
            </div>
          </div>
          <div className='mt-5'>
            Maps
          </div>
        </div>
        <div className='bg-white rounded-md shadow-md p-4 mt-10'>
          Đánh giá
        </div>
      </div>
      <div className='w-[30%]'>Content</div>
    </div>
  )
}

export default DetailPost