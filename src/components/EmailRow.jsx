import React from "react";
import icon from "../icons";
import { truncateSendersMail, truncateMailMessage } from "../exports";
const EmailRow = ({ email, sendEmailPage }) => {
  return (
    <section
      className={` ${
        sendEmailPage ? "border-t" : ""
      } flex items-center font-[roboto]  px-3 group justify-between border-b border-r border-l cursor-pointer p-2`}
    >
      <div className="flex font-normal items-center gap-2">
        <icon.CheckBoxOutlineBlankIcon className="text-[#D3D5D5] group-hover:text-[#808080]" />
        <icon.StarOutlineIcon className="text-[rgb(162,165,165)] group-hover:text-[#808080]" />
        <icon.LabelImportantIcon className="text-slate-300 group-hover:text-[#808080]" />
      </div>
      <div className="flex items-center ml-3 space-x-[90px] flex-1">
        {sendEmailPage ? (
          <b className="font-medium text-[15px]">
            To {truncateSendersMail(email?.receipient)}
          </b>
        ) : (
          <b className="font-medium text-[15px]">
            {truncateSendersMail(email?.receipient)}
          </b>
        )}

        <div className="flex items-center gap-2">
          <h3 className="font-medium text-[15px] capitalize">
            {email?.subject}
          </h3>
          <p className="text-slate-500 text-[14px] ">
            {" "}
            -{truncateMailMessage(email?.message)}
          </p>
        </div>
      </div>
      <div className="flex flex-[0.3] items-center justify-end">
        <div className=" hidden group-hover:flex items-center gap-1">
          <icon.ArchiveIcon className="text-[#767676] hover:text-black" />
          <icon.DeleteIcon className="text-[#767676] hover:text-black" />
          <icon.MarkAsUnreadIcon className="text-[#767676] hover:text-black" />

          <icon.WatchLaterIcon className="text-[#767676] hover:text-black" />
        </div>
        <p className="group-hover:hidden text-[13px] font-medium">
          {" "}
          {new Date(email?.timestamp?.toDate()).toUTCString()}
        </p>
      </div>
    </section>
  );
};

export default EmailRow;
