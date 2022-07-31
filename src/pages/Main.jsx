import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import ReceivedMails from "../components/ReceivedMails";
import Mail from "../components/Mail/Mail";
import { Routes, Route, Outlet } from "react-router-dom";
import ComposeMailBox from "../components/ComposeMailBox";
import SentMails from "../components/SentMails";

const Main = () => {
  return (
    <div>
      <Header className='z-0' />
      <div className="flex w-full h-[90vh] gap-2 z-0">
        <LeftSidebar  />
        <Routes className="grid-cols-1 w-auto bg-green-500 h-full" >
          <Route path="/inbox" element={<ReceivedMails className="" />}></Route>
          <Route path="/inbox/:id" element={<Mail />}></Route>
          <Route path="/sent" element={<SentMails />}></Route>
          <Route path="/sent/:id" element={<Mail />}></Route>
        </Routes>
        <RightSidebar className="w-20 bg-red-500" />
      </div>
      <ComposeMailBox />
    <Outlet />
    </div>
  )
}

export default Main