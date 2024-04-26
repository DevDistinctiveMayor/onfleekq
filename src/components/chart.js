import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory
import chart1 from "./img/chart1.png";
import chart2 from "./img/chart2.png";
import chart3 from "./img/chart3.png";
import { FaSignal, FaCreditCard } from 'react-icons/fa';
import Sideshow from "./toggleshow";

function Chart() {
    const [showSideshow, setShowSideshow] = useState(false); // State to manage the visibility of Sideshow
    const history = useHistory(); // Get the history object
    
    const handleShowClick = () => {
        setShowSideshow(true); // Toggle the visibility of Sideshow
        // If you want to navigate to "/toggleshow" route when clicking, uncomment the line below
        // history.push("/toggleshow"); // Navigate to "/toggleshow" route
    };
    const handleDisableClick = () => {
        setShowSideshow(false); // Disable the content
    };
    
    const iconStyle = {
        
        fontSize: "1.5rem",
        
        
    };
    const iconStyle0 = {
        
        fontSize: "1.5rem",
        
    };

    return (
        <div>
            <div>
                <div className="lg:hidden flex justify-center mt-10 cursor-pointer">
                    <div className="flex bg-slate-300 rounded-2xl">
                        <div className="w-[5rem] py-3 flex justify-center hover:bg-cyan-400 rounded-2xl" onClick={handleShowClick}>
                            <FaSignal class="text-slate-500 transition-colors duration-300 hover:text-white" style={iconStyle}/>
                        </div>
                        <div className="w-[5rem] py-3 flex justify-center hover:bg-cyan-300 rounded-2xl " onClick={handleDisableClick}>
                            <FaCreditCard style={iconStyle0} class="text-slate-500 transition-colors duration-300 hover:text-white"  />
                        </div>
                    </div>
                </div>

                
                <div className="flex sm:gap-[2.5rem] gap-[1rem] mt-[2rem] ml-6">
                    <div className="shadow-slate-300 shadow-xl lg:w-[13rem] w-[6.5rem] lg:h-[5rem] h-[9rem] rounded-[10px]"> 
                        <div className="lg:flex gap-2 mt-2 lg:flex-row flex-col-reverse flex">
                            <img src={chart1} className="w-[3.5rem] lg:w-[3rem] h-[4rem] lg:h-[2rem] lg:mt-4 ml-6 bg-slate-500"/>
                            <div className="text-sm ml-6 lg:ml-2 mt-2">
                                <p className="text-[10px] text-slate-400 font-medium">VISITORS</p>
                                <p className="font-bold lg:text-black text-violet-700">10,320</p>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-slate-300 shadow-xl lg:w-[13rem] w-[6.5rem] lg:h-[5rem] h-[9rem] rounded-[10px]"> 
                        <div className="lg:flex gap-2 mt-2 lg:flex-row flex-col-reverse flex">
                            <img src={chart2} className="w-[3.5rem] lg:w-[3rem] h-[4rem] lg:h-[2rem] lg:mt-3 ml-6 bg-slate-500"/>
                            <div className="text-sm ml-6 mt-2 lg:ml-2">
                                <p className="text-[10px] text-slate-400 font-medium">CUSTOMERS</p>
                                <p className="font-bold lg:text-black text-violet-700">4,628</p>
                            </div>
                        </div>
                    </div>   
                    <div className="bg-red-500 shadow-xl lg:w-[13rem] w-[6.6rem] lg:h-[5rem] h-[9rem] rounded-[10px]"> 
                        <div className="lg:flex gap-2 mt-2 lg:flex-row flex-col-reverse flex">
                            <img src={chart3} className="w-[3.5rem] lg:w-[3rem] h-[4rem] lg:h-[2rem] lg:mt-3 ml-6"/>
                            <div className="text-sm ml-6 mt-2 lg:ml-2">
                                <p className="text-[10px] text-slate-200 font-medium">ORDERS</p>
                                <p className="font-bold lg:text-black text-white">2,980</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="">
      <div class="absolute lg:-mt-[22rem] mt-[2rem] flex lg:hidden sm:gap-[13rem] gap-[10rem] ml-6">
        
          <div>
            <p class="font-medium">Statistics</p>
          </div>

          <div class="">
          <select className="p-1 w-[5rem] rounded-xl h-[2rem] text-violet-800 bg-slate-300 lg:bg-white">
              <option >Year</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
            </select>
          </div>
        </div>
      </div>

                {/* Render Sideshow conditionally based on showSideshow state */}
                {showSideshow && <Sideshow />}
            </div>
        </div>
    );
}

export default Chart;
