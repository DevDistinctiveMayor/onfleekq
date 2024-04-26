import React from 'react'
import {
    FaWallet,
  } from "react-icons/fa";
import { RiPieChart2Fill } from "react-icons/ri";
import { RiMessage2Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
  

function footer() {
    const iconStyle1 = {
        color: "#B2BEB5",
        fontSize: "1.3em",
      };
      const iconStyle = {
        color: '#ff0000',
        fontSize: '1.3rem',
        marginLeft: "0.5rem",
        marginTop: "0.5rem"
        
      };
    
  return (
    <div class="block lg:hidden">
        <div class="h-[4rem] mt-8 rounded-full bg-indigo-900">
            <div class="flex justify-center">
                <div>
                <div class="bg-slate-50 absolute -ml-12 h-[2.4rem] w-[2.4rem] -mt-[1rem] rounded-lg z-10 shadow-slate-600 shadow-2xl"><FaHome style={iconStyle}/></div>
                </div>
                <div class="flex sm:gap-[6rem] gap-[3rem] mt-5">
                    <RiPieChart2Fill style={iconStyle1}/>
                    <RiMessage2Fill style={iconStyle1}/>
                    <FaWallet style={iconStyle1}/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default footer