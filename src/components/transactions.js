import React from "react";
import { FaPlus, FaTv } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import neflix from "./img/Netflix.png";

function transactions() {
  const iconStyle = {
    color: "white",
    marginTop: "6px",
  };
  const iconStyle1 = {
    color: "red",
    marginTop: "13px",
    fontSize: "1.2rem",
  };
  const iconStyle2 = {
    color: "red",
    marginTop: "13px",
    height: "1.2rem",
  };
  return (
    <div>
      <div>
        <div class="flex justify-around gap-[7rem] mt-10">
          <p class="font-semibold">Transactions</p>
          <div class="bg-red-500 w-[2rem] flex justify-center h-[2rem] rounded-lg">
            <FaPlus style={iconStyle} />
          </div>
        </div>

        <div class="mt-5">
          <div class="flex gap-3 ml-3 mt-5">
            <div class="bg-white w-[3rem] flex justify-center h-[2.7rem] rounded-lg ml-2">
              <FaTaxi style={iconStyle1} />
            </div>
            <div class="flex gap-[7.4rem]">
              <div>
                <p class="font-semibold">Taxi</p>
                <p class="text-sm font-bold text-slate-400">01:21 PM</p>
              </div>
              <div>
                <p class="font-bold mt-5">-$9,20</p>
              </div>
            </div>
          </div>

          <div class="flex gap-3 ml-3 mt-7">
            <div class="bg-white w-[3rem] flex justify-center h-[2.7rem] rounded-lg ml-2">
              <FaShoppingBag style={iconStyle1} />
            </div>
            <div class="flex gap-[7rem]">
              <div>
                <p class="font-semibold">Shopping</p>
                <p class="text-sm font-bold text-slate-400">01:21 PM</p>
              </div>
              <div>
                <p class="font-bold mt-5">-$142,00</p>
              </div>
            </div>
          </div>

          <div class="flex gap-3 ml-3 mt-7">
            <div class="bg-white w-[3rem] flex justify-center h-[2.7rem] rounded-lg ml-2">
              <img src={neflix} style={iconStyle2} />
            </div>
            <div class="flex gap-[7rem]">
              <div>
                <p class="font-semibold">Netflix</p>
                <p class="text-sm font-bold text-slate-400">01:21 PM</p>
              </div>
              <div>
                <p class="font-bold mt-5">-$24,99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default transactions;
