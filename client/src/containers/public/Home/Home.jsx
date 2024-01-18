import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { Intro, Contact, Footer} from 'components'
import { Outlet } from "react-router-dom";
import Search from "../Search/Search";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center h-full">
        <Header />
        <Navigation />
        <Search />
        <div className="w-[90%] lg:w-[70%] flex flex-col items-start justify-start mt-3">
          <Outlet />
        </div>
        <div className="h-[500px]"></div>
      </div>
<<<<<<< HEAD
      <Footer />
    </>
=======
      <Intro />
      <Contact/>
      <Footer/>
    </div>
>>>>>>> 9142bdc5378620ff28274c53aec1a5ff88e52499
  );
};

export default Home;
