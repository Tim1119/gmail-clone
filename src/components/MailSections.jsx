import icon from "../icons";
// deals with mail sections like social,primary and secondary
const MailSections = ({sendMailPage}) => {
  return (
    <>
      <div className={`${sendMailPage ? "mt-5":""}flex items-center gap-2 p-1`}>
        <icon.IconButton>
          <icon.CheckBoxOutlineBlankIcon />
        </icon.IconButton>
        <icon.IconButton>
          <icon.RefreshIcon />
        </icon.IconButton>
        <icon.IconButton>
          <icon.MoreVertIcon />
        </icon.IconButton>
      </div>
      
      <section className={`${sendMailPage ? "hidden" : "flex"} font-medium border flex-shrink-0 border-gray-300`}>
        <div className="text-sm  w-1/4  text-red-500 cursor-pointer hover:bg-gray-300 border-b-[5px] p-3 flex-shrink-0 border-b-red-500 flex items-center gap-2">
          <icon.InboxIcon />
          Primary
        </div>
        <div className="text-sm  w-1/4 text-gray-500 cursor-pointer hover:bg-gray-300 p-3  flex items-center gap-2 flex-shrink-0">
          {" "}
          <icon.PeopleIcon /> Social
        </div>
        <div className="text-sm  w-1/4 text-gray-500 cursor-pointer hover:bg-gray-300 p-3  flex items-center gap-2 flex-shrink-0">
          <icon.LocalOfferIcon /> Promotions
        </div>
      </section>
    </>
  );
};

export default MailSections;
