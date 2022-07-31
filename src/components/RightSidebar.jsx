import React from "react";
import icon from "../icons";

const RightSidebar = () => {
  return (
    <div className="hidden md:flex flex-col justify-between align-center py-3 md:w-24 border-l">
      <section className="grid place-items-center">
        <icon.IconButton>
          <img
            src="https://tinyurl.com/3nzf2mz2"
            className="w-7"
            alt="calendar-alt"
            
          />
        </icon.IconButton>
        <icon.IconButton>
          <img
            src="https://tinyurl.com/5fmwjmu7"
            className="w-7"
            alt="keep-img"
            
          />
        </icon.IconButton>
        <icon.IconButton>
          <img
            src="https://tinyurl.com/52jw89pa"
            className="w-7"
            alt="calendar-alt"
            
          />
        </icon.IconButton>
        <icon.IconButton>
          <img
            src="https://tinyurl.com/5cntud75"
            className="w-7"
            alt="calendar-alt"
            
          />
        </icon.IconButton>
        <icon.IconButton>
          <img
            src="https://tinyurl.com/bd6pmk5a"
            className="w-7"
            alt="calendar-alt"
            
          />
        </icon.IconButton>
      </section>
      <section className="grid place-items-center">
        <icon.IconButton>
          <icon.ArrowRightIcon />
        </icon.IconButton>
      </section>
    </div>
  );
};

export default RightSidebar;
