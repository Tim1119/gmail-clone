import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Main from "./components/Main";
import Mail from "./components/Mail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div className="flex w-full h-[90vh]">
        <LeftSidebar  />
        <Routes className="grid-cols-1 w-auto bg-green-500 h-full" >
          <Route path="/" element={<Main className="" />}></Route>
          <Route path="/:id" element={<Mail />}></Route>
        </Routes>
        <RightSidebar className="w-20 bg-red-500" />
      </div>
    </div>
  );
}

export default App;
