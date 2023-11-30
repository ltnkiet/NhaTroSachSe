import React, { useState, useEffect, memo } from 'react'
import icons from '../asset/icon'

const { GrLinkPrevious } = icons

const Modal = ({ setIsShowModal, content, name, handleSubmit, queries, defaultText }) => {

  return (
    <div onClick={() => { setIsShowModal(false) }} 
      className='fixed top-0 left-0 right-0 bottom-0 bg-overlay-70 z-20 flex justify-center items-center'>
      <div onClick={(e) => {
        e.stopPropagation() 
        setIsShowModal(true)}} 
        className='w-2/5 h-[70%] bg-white rounded-md relative'>
        <div className='h-[45px] px-4 flex items-center border-b border-gray-200'>  
          <span className='cursor-poiter' 
            onClick={(e) => {
            e.stopPropagation()
            setIsShowModal(false)}}
          ><GrLinkPrevious size={20} />
          </span>
        </div>
        {(name === 'category' || name === 'province') && 
          <div className='p-4 flex flex-col'>
            <span className='py-2 flex gap-2 items-center border-b border-gray-200'>
              <input
                  type="radio"
                  name={name}
                  value={defaultText || ''}
                  id='default'
                  checked={!queries[`${name}Code`] ? true : false}
                  onChange={(e) => handleSubmit(e, { [name]: defaultText, [`${name}Code`]: null })}
              />
              <label htmlFor='default'>{defaultText}</label>
            </span>
            {content?.map(item => {
              return (
                <span key={item.code} className='py-2 flex gap-2 items-center border-b border-gray-200'>
                  <input
                      type="radio"
                      name={name}
                      id={item.code}
                      value={item.code}
                      checked={item.code === queries[`${name}Code`] ? true : false}
                      onChange={(e) => handleSubmit(e, { [name]: item.value, [`${name}Code`]: item.code })}
                  />
                  <label htmlFor={item.code}>{item.value}</label>
                </span>
              )
            })}
          </div>
        }
        {(name === "price" || name === "area") && (
          <div className='p-4 flex flex-col'>
            <span className='py-2 flex gap-2 items-center border-b border-gray-200'>
              <input
                  type="radio"
                  name={name}
                  value={defaultText || ''}
                  id='default'
                  checked={!queries[`${name}Code`] ? true : false}
                  onChange={(e) => handleSubmit(e, { [name]: defaultText, [`${name}Code`]: null })}
              />
              <label htmlFor='default'>{defaultText}</label>
            </span>
            {content?.map(item => {
              return (
                <span key={item.code} className='py-2 flex gap-2 items-center border-b border-gray-200'>
                  <input
                      type="radio"
                      name={name}
                      id={item.code}
                      value={item.code}
                      checked={item.code === queries[`${name}Code`] ? true : false}
                      onChange={(e) => handleSubmit(e, { [name]: item.value, [`${name}Code`]: item.code })}
                  />
                  <label htmlFor={item.code}>{item.value}</label>
                </span>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(Modal);