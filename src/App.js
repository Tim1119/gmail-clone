import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div>
      <Header />
      <div>
        <LeftSidebar />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
