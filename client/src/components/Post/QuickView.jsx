import React from "react";
import { DetailPost } from "containers/public";

const QuickView = ({ setQuickView }) => {
  return (
    <div
      className="absolute top-0 right-0 left-0 bottom-0 bg-overlay-70 flex justify-center p-5"
      onClick={(e) => {
        e.stopPropagation();
        setQuickView(false);
      }}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-1100 w-full overflow-y-auto no-scrollbar border rounded-xl p-5 ">
        <DetailPost setQuickView />
      </div>
    </div>
  );
};

export default QuickView;
