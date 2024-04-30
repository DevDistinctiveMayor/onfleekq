import React from "react";
import { FaPen } from "react-icons/fa";
import Loading from "./CircularProgressBar";
import Card from "./card";
import Transactions from "./transactions";
import Footer from "./footer";
import "./toggleshow.css";


function Sideshow() {
  const iconStyle = {
    color: "#B2BEB5",
  };

  return (
    <div className="lg:hidden">
      <div className="bg-blue-50 h-[36rem] lg:-mt-[7rem] absolute rounded-2xl z-10 lg:z-0 -mt-[10rem] sm:w-[26rem] w-[22rem] hide-scrollbar">
        <div className="mt-6 ml-[17rem]">
          <FaPen style={iconStyle} class="hidden lg:block" />
        </div>

        <div class="lg:hidden">
          <div class="flex justify-center mt-5">
            <p class="text-lg font-semibold">Total Sales</p>
          </div>
        </div>
        <div className="bg-indigo-700 w-[5rem] p-2 rounded-xl absolute lg:ml-[17rem] lg:mt-5 sm:m-[0rem] m-[1rem] sm:ml-[19.5rem] ml-[16.5rem]">
          <p className="text-white">$10,600</p>
        </div>
        <div className="flex justify-center lg:mt-1 sm:-mt-[2rem] -mt-[0rem]">
          <Loading />
        </div>
        <div>
          <Card />
        
        </div>
        <div class="mb-10">
          <Transactions />
        </div>
        {/* <div><Footer/></div> */}
      </div>
    </div>
  );
}

export default Sideshow;
