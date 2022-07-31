import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../icons";
import { grey } from "@mui/material/colors";
import OnlineAvatar from "./OnlineAvatar";
import { navlinks } from "../exports";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../context/MailContext";
import { faker } from "@faker-js/faker";

const LeftSidebar = () => {

  const dispatch = useDispatch();

  return (
    <div className="w-[308px] h-full  min-w-[308px] max-w-[308px]">
      <button
        onClick={() => dispatch(openSendMessage())}
        className="flex m-2 bg-white py-2 w-fit items-center gap-2 px-5 rounded-full shadow-md text-sm cursor-pointer border border-gray-200"
      >
        <img
          src="http://tny.im/sIL"
          alt="compose add item"
          className="w-fit object-contain"
        />{" "}
        <h1 className="font-medium ">Compose</h1>
      </button>
      <section>
        {navlinks.map(([title, url, icon], id) => (
          <NavLink
            to={url}
            key={id}
            className={
              url === "/mail/inbox"
                ? "bg-[#FCE8E6] hover:bg-[#FCE8E6] gmail_link font-bold"
                : "gmail_link"
            }
           
          >
            {icon} <p>{title}</p>
          </NavLink>
        ))}
      </section>
      <section className="border-t border-gray-300 py-2">
        <h1 className="font-[600] px-6 text-[#202124] my-2 text-sm">Meet</h1>
        <NavLink to="" className="gmail_link gg">
          <icon.VideocamIcon sx={{ color: grey[600] }} /> <p>New Meeting</p>
        </NavLink>
        <NavLink to="" className="gmail_link gg">
          <icon.KeyboardIcon sx={{ color: grey[600] }} /> <p>Join a Meeting</p>
        </NavLink>
      </section>
      <section className="border-t border-gray-300">
        <h1 className="font-[600] px-6 text-[#202124] my-2 text-sm">
          Hangouts
        </h1>
        <NavLink to="" className="gmail_link">
          <OnlineAvatar
            image={faker.image.people(1234, 2345, true)}
          ></OnlineAvatar>{" "}
          <aside>
            {faker.name.firstName()} {faker.name.lastName()}
          </aside>
        </NavLink>
        <NavLink to="" className="gmail_link">
          <OnlineAvatar
            image={faker.image.people(1234, 2345, true)}
          ></OnlineAvatar>{" "}
          <aside>
            {faker.name.firstName()} {faker.name.lastName()}
          </aside>
        </NavLink>
      </section>
    </div>
  );
};

export default LeftSidebar;
