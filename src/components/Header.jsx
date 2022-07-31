import React from "react";
import icon from "../icons";
import { headerRightNavlinks } from "../exports";
import { UserAuth } from "../context/UserContext";


const Header = () => {

  const {user} = UserAuth()
  return (
    <div className="h-[60px] flex gap-2 items-center w-screen bg-white border-b border-gray-150 justify-between px-5">
      <div className="flex items-center gap-4 ">
        <icon.MenuIcon />

        <img
          src="	https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="gmail-icon"
          className="cursor-pointer"
        />
      </div>
      <div className="flex px-5 rounded-lg flex-[0.7] bg-[#F1F3F4] gap-3 h-3/4 items-center justify-between">
        <span className="flex items-center flex-1 h3/4 space-x-3">
          <icon.IconButton>
            <icon.SearchIcon />
          </icon.IconButton>
          <input
            type="text"
            placeholder="Search mail"
            className="flex-[1] p-1 outline-none border-none bg-inherit "
          />
        </span>
        <span>
          <icon.IconButton>
            <icon.TuneIcon />
          </icon.IconButton>
        </span>
      </div>
      {/* Header Right Icons */}
      <div className=" md:h-full md:gap-2 hidden md:flex md:items-center">
        {headerRightNavlinks.map((iconLink,id) => (
          <icon.IconButton key={id} >{iconLink}</icon.IconButton>
        ))}
        <icon.IconButton >

        <icon.Avatar  src={user?.photoURL} />,
        </icon.IconButton>
      </div>
    </div>
  );
};

export default Header;
