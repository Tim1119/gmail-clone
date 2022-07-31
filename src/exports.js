import icon from "./icons";
import { grey, red } from "@mui/material/colors";

export const navlinks = [
  ["Inbox", "/mail/inbox", <icon.InboxIcon sx={{ color: red[600] }} />],
  ["Starred", "/mail/sent", <icon.StarIcon sx={{ color: grey[600] }} />],
  ["Snoozed", "/mail/sent", <icon.WatchLaterIcon sx={{ color: grey[600] }} />],
  ["Sent", "/mail/sent", <icon.SendIcon sx={{ color: grey[600] }} />],
  [
    "Drafts",
    "/mail/sent",
    <icon.NoteIcon sx={{ color: grey[600] }} className="-rotate-90" />,
  ],
  ["Categories", "/mail/sent", <icon.KeyboardArrowDownIcon sx={{ color: grey[600] }} />],
  ["More", "/mail/sent", <icon.KeyboardArrowDownIcon sx={{ color: grey[600] }} />],
];

export const headerRightNavlinks = [
  <icon.HelpOutlineIcon sx={{ width: 30, height: 30 }} />,
  <icon.SettingsIcon sx={{ width: 30, height: 30 }} />,
  <icon.AppsIcon sx={{ width: 30, height: 30 }} />,
  
];


export function truncateSendersMail(str) {
    return str.length > 11 ? str.substring(0, 11) + "." : str;
}
export function truncateMailSubject(str) {
    return str.length > 55 ? str.substring(0, 55) + "..." : str;
}
export function truncateMailMessage(str) {
  // const lengthOfMessage=  70- subjectLength
    return str.length-3 > 3 ? str.substring(0,35) + "..." : str;
}
