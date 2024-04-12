import React from 'react';
// import { HiHome, HiPencilAlt, HiSearch, HiCamera, HiUserCircle } from 'react-icons/hi';
import camera from "../assets/camera.png"
import search from "../assets/search.png"
import stats from "../assets/stats.png"
import user from "../assets/user.png"
import home from "../assets/home.png"

const MenuBar = () => {
  return (
    <div className="sticky bottom-0 w-full left-0 bg-white flex justify-around items-center py-2 border-t-2">
      <div className="text-gray-500 hover:text-blue-500 cursor-pointer">
        <img src={home} />
      </div>
      <div className="text-gray-500 hover:text-blue-500 cursor-pointer">
        <img src={stats} />
      </div>
      <div className="from-[#95BEFF] to-[#7B91FF] bg-gradient-to-r relative shadow-md bottom-[30px] rounded-full p-4 text-white">
        <img src={search} />
      </div>
      <div className="text-gray-500 hover:text-blue-500 cursor-pointer">
        <img src={camera} />
      </div>
      <div className="text-gray-500 hover:text-blue-500 cursor-pointer">
        <img src={user} />
      </div>
    </div>
  );
};

export default MenuBar;