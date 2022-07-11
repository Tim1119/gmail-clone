import React from "react";
import data from "./icons";
import MailPagination from "./MailPagination";
const Main = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="w-full ">
     
      <div className="flex items-center gap-2 p-1">
        <data.IconButton>
          <data.CheckBoxOutlineBlankIcon />
        </data.IconButton>
        <data.IconButton>
          <data.RefreshIcon />
        </data.IconButton>
        <data.IconButton>
          <data.MoreVertIcon />
        </data.IconButton>
      </div>
      <section className="flex font-medium border border-gray-300" >
        <div className="text-sm w-1/5   text-red-500 cursor-pointer hover:bg-gray-300 border-b-[5px] p-3 border-b-red-500 flex items-center gap-2" ><data.InboxIcon />Primary</div>
        <div className="text-sm w-1/5  text-gray-500 cursor-pointer hover:bg-gray-300 p-3  flex items-center gap-2"> <data.PeopleIcon /> Social</div>
        <div className="text-sm w-1/5  text-gray-500 cursor-pointer hover:bg-gray-300 p-3  flex items-center gap-2"> <data.LocalOfferIcon /> Promotions</div>
      </section>
      <section>
        <div>
          <data.CheckBoxOutlineBlankIcon />
          <data.StarIcon />
        </div>
      </section>
    </div>
  );
};

export default Main;
