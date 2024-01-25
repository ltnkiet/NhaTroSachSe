import React, {memo} from 'react'
import icons from 'asset/icon'

const { FaPhone, FaSquareFacebook, SiZalo  } = icons

const BoxInfor = ({user: {name, avatar, fbUrl, zalo, phone}}) => {
  return (
    <div className='w-full bg-secondary rounded-md flex flex-col items-center p-4 gap-4'>
      <img src={avatar} alt="" className='w-16 h-16 rounded-full object-contain'/>
      <h3 className='text-white text-xl font-semibold'>{name}</h3>
      <div className='w-full bg-green-500 rounded-md flex items-center justify-center px-4 py-2 gap-4 text-white font-semibold text-lg'>
        <FaPhone />
        <span>{phone}</span>
      </div>
      <div className='w-full bg-white rounded-md flex items-center justify-center px-4 py-2 gap-4 text-black font-semibold text-lg'>
        <SiZalo className='text-blue-600 text-xl'/>
        <a href={`https://zalo.me/${zalo}`} target='_blank'>Nhắn Zalo</a>
      </div>
      <div className='w-full bg-white rounded-md flex items-center justify-center px-4 py-2 gap-4 text-black font-semibold text-lg'>
        <FaSquareFacebook className='text-blue-800 text-2xl'/>
        <a href={fbUrl} target='_blank'>Facebook</a>
      </div>
    </div>
  )
}

export default memo(BoxInfor)