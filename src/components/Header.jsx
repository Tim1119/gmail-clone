import React from "react";
import data from "./icons";
// import Button from ".";

const Header = () => {
  return (
    <div className="h-[60px] flex gap-2 items-center w-screen bg-white border-b border-gray-150 justify-between px-5">
      <div className="flex items-center gap-4 ">
        <data.MenuIcon />

        <img
          src="http://tny.im/sIy"
          alt="gmail-icon"
          className="cursor-pointer"
        />
      </div>
      <div className="flex px-5 rounded-lg flex-[0.7] bg-[#F1F3F4] gap-3 h-3/4 items-center justify-between">
        {/* <div > */}
        <span className="flex items-center flex-1 h3/4 space-x-3">
          <data.IconButton>
            <data.SearchIcon />
          </data.IconButton>
          <input
            type="text"
            placeholder="Search mail"
            className="flex-[1] p-1 outline-none border-none bg-inherit "
          />
        </span>
        <span>
          <data.IconButton>
            <data.TuneIcon />
          </data.IconButton>
        </span>
        {/* </div> */}
      </div>
      <div className=" md:h-full md:gap-2 hidden md:flex md:items-center">
        <data.IconButton>
          <data.HelpOutlineIcon sx={{ width: 30, height: 30 }} />
        </data.IconButton>
        <data.IconButton>
          <data.SettingsIcon sx={{ width: 30, height: 30 }} />
        </data.IconButton>
        <data.IconButton>
          <data.AppsIcon sx={{ width: 30, height: 30 }} />
        </data.IconButton>
        <data.IconButton>
          <data.Avatar sx={{ width: 30, height: 30 }} />
        </data.IconButton>
      </div>
    </div>
  );
};

export default Header;
