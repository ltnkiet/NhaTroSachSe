import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="absolute top-[50%] right-[50%] left-[50%] bottom-[50%] bg-overlay-70  z-20 flex items-center justify-center">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#181460", "#181460", "#181460", "#181460", "#181460"]}
      />
    </div>
  );
};

export default Loading;
