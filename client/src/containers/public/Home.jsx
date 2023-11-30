import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import { Outlet } from 'react-router-dom'
import Search from "./Search";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center h-full">
      <Header />
      <Navigation/>
      <Search/>
      <div className="w-[90%] lg:w-[70%] flex flex-col items-start justify-start mt-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
