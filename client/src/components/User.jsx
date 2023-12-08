import React from 'react'
import { useSelector } from 'react-redux'
import anonAvatar from '../asset/img/anon-avatar.png'

const User = () => {
    const { currentData } = useSelector(state => state.user)

    return (
        <div className='flex items-center gap-2'>
            <img src={currentData?.avatar || anonAvatar} alt="avatar" className='w-10 object-cover rounded-full h-10 border-2 shadow-md border-white' />
            <span>Xin chào, <span className='font-semibold'>{currentData?.name}</span></span>
        </div>
    )
}

export default User