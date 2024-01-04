import React from 'react'

const InputFormV3 = ({ label, name, value, setValue, invalidFields, setInvalidField}) => {
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
      <small className="text-red-500">
          {invalidFields?.some((item) => (item.name = name)) 
          && invalidFields?.find((item) => (item.name = name))?.message}
        </small>
    </div>
  )
}

export default InputFormV3