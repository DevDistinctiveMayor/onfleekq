import React, { useState } from "react";
import { FaSearch, FaWallet, FaBell, FaHome } from "react-icons/fa";
import { RiPieChart2Fill } from "react-icons/ri";
import { SiDeluge } from "react-icons/si";
import { RiMessage2Fill } from "react-icons/ri";
import img from "./img/user_.png";
import Chart from "./chart";
import Sideshow from "./sideshow";
import Statistics from "./statistics";
import Timespent from "./timespent";
import UserInfo from "./userinfo";
import Footer from "./footer";
import "./header.css";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <div id="header">
      <div className="h-[65rem] bg-cyan-100">
        <div className="flex justify-center">
          <SiDeluge
            className="lg:hidden"
            style={{
              color: "#4B0082",
              marginTop: "5rem",
              marginLeft: "1rem",
              fontSize: "1.2rem",
              zIndex: "1",
            }}
          />
          <div className="h-[57rem] w-[7rem] mt-[3rem] bg-indigo-800 rounded-l-[30px] hidden lg:block">
            <SiDeluge
              style={{
                color: "white",
                marginTop: "1.5rem",
                marginLeft: "1.4rem",
                fontSize: "1.2rem",
              }}
            />
            <div className="bg-white absolute ml-9 mt-[10rem] h-[2.5rem] w-[2.5rem] rounded-lg hidden lg:block z-10">
              <FaHome
                style={{
                  color: "#ff0000",
                  fontSize: "1.4rem",
                  marginLeft: "0.5rem",
                  marginTop: "0.5rem",
                }}
              />
            </div>
            <div className="mt-[14rem] flex flex-col gap-5">
              <RiMessage2Fill
                style={{
                  color: "#B2BEB5",
                  marginTop: "1.5rem",
                  marginLeft: "1.4rem",
                  fontSize: "1.3em",
                }}
              />
              <RiPieChart2Fill
                style={{
                  color: "#B2BEB5",
                  marginTop: "1.5rem",
                  marginLeft: "1.4rem",
                  fontSize: "1.3em",
                }}
              />
              <FaWallet
                style={{
                  color: "#B2BEB5",
                  marginTop: "1.5rem",
                  marginLeft: "1.4rem",
                  fontSize: "1.3em",
                }}
              />
            </div>
          </div>
          <div className="lg:bg-white bg-blue-50 lg:h-[57rem] lg:w-[70rem] mt-[3rem] -ml-[3rem] rounded-[30px] sm:w-[26rem] w-[22rem]">
            <div className="flex ml-[16rem] lg:ml-[4rem] mt-7">
              <div className="hidden lg:block flex ">
                <FaSearch
                  style={{
                    color: "#646F67",
                    position: "absolute",
                    marginTop: "0.5rem",
                    marginLeft: "-1.4rem",
                    fontSize: "1rem",
                  }}
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[24rem] pl-10 h-[2rem] bg-blue-50 rounded-xl -ml-[10%] border-none outline-none"
                />
              </div>
              <div className="flex lg:gap-[20rem] sm:gap-[3rem]">
                <div className="flex gap-3">
                  <label
                    className={`hamburger-menu ${menuVisible ? "open" : ""}`}
                    onClick={toggleMenu}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </label>
                  <div
                    className={`lg:flex gap-5 ml-[1rem] cursor-pointer font-medium menu-content  ${
                      menuVisible ? "open" : ""
                    }`}
                    onClick={toggleMenu}
                  >
                    <a href="#">Feedback</a>
                    <a href="#">Contacts</a>
                    <a href="#">Help</a>
                  </div>
                </div>
                <div className="flex gap-4 cursor-pointer">
                  <FaBell
                    style={{
                      color: "#B2BEB5",
                      fontSize: "1.3rem",
                      marginTop: "0.4rem",
                    }}
                  />
                  <img src={img} className="w-7 h-7" alt="user" />
                </div>
              </div>
            </div>
            <Chart />
            <div className="flex mt-8 gap-[1.4rem] ml-2">
              <Statistics />
              <Sideshow />
            </div>
            <div className="lg:flex hidden lg:visible mt-4">
              <Timespent />
              <UserInfo />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
