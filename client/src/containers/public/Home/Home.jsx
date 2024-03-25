import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { Intro, Contact, Footer } from "components";
import { Outlet, useLocation } from "react-router-dom";
import Search from "../Search/Search";
import { path } from "utils/constant";

const Home = () => {
  const location = useLocation();
  return (
    <div className=" relative w-full flex flex-col items-center h-full">
      <Header />
      <Navigation />
      {!location.pathname?.includes(path.DETAIL) && <Search />}
      <div className="w-1100 lg:w-[70%] flex flex-col items-start justify-start mt-3">
        <Outlet />
      </div>
      <Intro />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
