import React from "react";
import { NavLink } from "react-router-dom";
import data from "./icons";
import { grey, green, deepOrange } from "@mui/material/colors";
import OnlineAvatar from "./OnlineAvatar";

const LeftSidebar = () => {
  const navlinks = [
    ["Inbox", "/inbox", <data.InboxIcon sx={{ color: grey[600] }} />],
    ["Starred", "/starred", <data.StarIcon sx={{ color: grey[600] }} />],
    ["Snoozed", "/snoozed", <data.WatchLaterIcon sx={{ color: grey[600] }} />],
    ["Sent", "/", <data.SendIcon sx={{ color: grey[600] }} />],
    [
      "Drafts",
      "/draft",
      <data.NoteIcon sx={{ color: grey[600] }} className="-rotate-90" />,
    ],
    ["Categories", "/", <img src="http://tny.im/sIW" alt="category-img" />],
    ["More", "/more", <data.KeyboardArrowDownIcon sx={{ color: grey[600] }} />],
  ];

  return (
    <div className="w-[308px] h-full  min-w-[308px] max-w-[308px]">
      <button className="flex m-2 bg-white py-2 w-fit items-center gap-2 px-5 rounded-full shadow-md text-sm cursor-pointer border border-gray-200">
        <img
          src="http://tny.im/sIL"
          alt="compose add item"
          className="w-fit object-contain"
        />{" "}
        <h1 className="font-medium ">Compose</h1>
      </button>
      <section>
        {navlinks.map(([title, url, icon]) => (
          <NavLink to={url} className="gmail_link">
            {icon} <p>{title}</p>
          </NavLink>
        ))}
      </section>
      <section className="border-t border-gray-300 py-2">
        <h1 className="font-[600] px-6 text-[#202124] my-2 text-sm">Meet</h1>
        <NavLink to="" className="gmail_link">
          <data.VideocamIcon sx={{ color: grey[600] }} /> <p>New Meeting</p>
        </NavLink>
        <NavLink to="" className="gmail_link">
          <data.KeyboardIcon sx={{ color: grey[600] }} /> <p>Join a Meeting</p>
        </NavLink>
      </section>
      <section className="border-t border-gray-300">
        <h1 className="font-[600] px-6 text-[#202124] my-2 text-sm">
          Hangouts
        </h1>
        <NavLink to="" className="gmail_link">
          <OnlineAvatar image="http://tny.im/sJ6"></OnlineAvatar>{" "}
          <aside>Ajani Timothy</aside>
        </NavLink>
        <NavLink to="" className="gmail_link">
          <OnlineAvatar image="http://tny.im/sJ8"></OnlineAvatar>{" "}
          <aside>Sarah Omolola</aside>
        </NavLink>
      </section>
    </div>
  );
};

export default LeftSidebar;
