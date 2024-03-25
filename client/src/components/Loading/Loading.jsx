import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loading = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#181460", "#181460", "#181460", "#181460", "#181460"]}
    />
  );
};

export default Loading;
