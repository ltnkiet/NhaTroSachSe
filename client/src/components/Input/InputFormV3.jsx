import React from 'react'

const InputFormV3 = ({ label, value, setValue}) => {
  return (
    <div>
      <label htmlFor="title">{label}</label>
      <div className="flex items-center">
        <input
          type="text"
          id="title"
          className={"rounded-md outline-none border flex-auto border-gray-300 p-2"}
          value={value}
          onChange={(e) => setValue(e.target.value)
          }
        />
      </div>
    </div>
  )
}

export default InputFormV3