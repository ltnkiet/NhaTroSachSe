import React, { memo } from "react";

const ProvinceBtn = ({ name, image }) => {
  return (
    <div className="shadow-md rounded-bl-md text-main rounded-br-md cursor-pointer hover:text-secondary">
      <img
        src={image}
        alt={name}
        className="w-[250px] h-[140px] object-cover rounded-tl-md rounded-tr-md"
      />
      <div className="font-medium p-2 text-center">{name}</div>
    </div>
  );
};

export default memo(ProvinceBtn);
