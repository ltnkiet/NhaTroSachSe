import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { Intro, Contact, Footer, Loading } from "components";
import { Outlet, useLocation } from "react-router-dom";
import Search from "../Search/Search";
import { path } from "utils/constant";

const Home = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className=" relative w-full flex flex-col items-center h-full">
      {loading && <Loading />}
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
