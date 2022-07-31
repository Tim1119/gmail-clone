import { Link, useNavigate } from "react-router-dom";
import icon from "../../icons";


const MailHeader = () => {
  
  const navigate = useNavigate();
  return (
    <div className="border-b  p-1 gap-4 flex items-center text-[#767676]">
      <Link to="/">
        <icon.IconButton></icon.IconButton>
        <icon.ArrowBackIcon onClick={() => navigate(-1)} />
      </Link>
      <icon.IconButton>
        <icon.ArchiveIcon />
      </icon.IconButton>
      <icon.IconButton>
        <icon.NewReleasesIcon />
      </icon.IconButton>
      <icon.IconButton>
        <icon.DeleteIcon />
      </icon.IconButton>
      <icon.IconButton>
        <icon.MarkAsUnreadIcon />
      </icon.IconButton>
      <icon.IconButton>
        <icon.WatchLaterIcon />
      </icon.IconButton>
      <icon.IconButton>
        <icon.AddTaskIcon />
      </icon.IconButton>
      <icon.IconButton>
        <icon.DriveFileMoveIcon />
      </icon.IconButton>
      <icon.IconButton>
        <icon.LabelImportantIcon />
      </icon.IconButton>
      <icon.IconButton>
        <icon.MoreVertIcon />
      </icon.IconButton>
    </div>
  );
};

export default MailHeader;
