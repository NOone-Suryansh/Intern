import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaEarthAfrica } from "react-icons/fa6";


const BottomFooter = ["Privacy Policy", "License", "API","© 2021 All rights reserved"];
const Resources = [
  "Against Discrimination",
  "Invite friends",
  "Gift cards"
];

const Footer = () => {
  return (
    <div className="text-richblack-800 border-t border-richblack-100 mt-11">
      <div className="flex lg:flex-row  items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto relative py-14">
        <div className="border-b   w-[100vw] justify-between flex flex-col lg:flex-row pb-5 border-richblack-100 gap-3">
          {/* Section 1 */}

            <div className=" flex flex-col gap-3  mb-7 ">
              
              <h1 className="text-richblack-900 font-semibold text-[16px]">
                Booking support
              </h1>
              <div className="flex flex-col gap-2">
                {["COVID-19", "Help center", "Support","Trust & Safety"].map((ele, i) => {
                  return (
                    <div
                      key={i}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.toLowerCase()}>{ele}</Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className=" mb-7 lg:pl-0">
              <h1 className="text-richblack-900 font-semibold text-[16px]">
                Community
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>

              
            </div>

            <div className=" flex flex-col gap-3  mb-7 lg:pl-0">
              
              <h1 className="text-richblack-900 font-semibold text-[16px]">
                About
              </h1>
              <div className="flex flex-col gap-2">
                {["How it works", "Career", "About us","Media"].map((ele, i) => {
                  return (
                    <div
                      key={i}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.toLowerCase()}>{ele}</Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" flex flex-col gap-3  mb-7 lg:pl-0">
              
              <h1 className="text-richblack-900 font-semibold text-[16px]">
                Become an employer
              </h1>
              <div className="flex flex-col gap-2">
                {["Post your job", "Business Account", "Resourse Center","Community"].map((ele, i) => {
                  return (
                    <div
                      key={i}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.toLowerCase()}>{ele}</Link>
                    </div>
                  );
                })}
              </div>
            </div>

          {/* Section 2 */}
          
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
        {/* Section 1 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            {BottomFooter.map((ele, i) => {
              return (
                <div
                  key={i}
                  className={` ${
                    BottomFooter.length - 1 === i
                      ? ""
                      : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  } px-3 `}
                >
                  <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                    {ele}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center flex flex-row ">Currency - USD <IoIosArrowDown className="m-auto mr-5" /> English <FaEarthAfrica className="m-auto ml-1" /></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;