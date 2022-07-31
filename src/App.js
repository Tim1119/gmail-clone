import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Main from "./pages/Main";
import ProtectedRoutes from "./ProtectedRoutes";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route
        path="/mail/*"
        element={
          <ProtectedRoutes>
            <Main />
          </ProtectedRoutes>
        }
      ></Route>
    </Routes>
  );
}

export default App;
