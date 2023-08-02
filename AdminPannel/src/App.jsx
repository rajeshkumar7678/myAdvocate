import { BrowserRouter ,Routes,Route } from "react-router-dom";
import "./App.css";
// import { Navbar } from "./components/navbar";
import  Login  from "./components/login/Login";
import DashboardPage from "./components/Dashboard/Dashboard"
import { Addusers } from "./components/Manageusers/Addusers";
import { Deletelawyer } from "./components/Manageusers/Deletelawyer";
import { UpdateusersDetails } from "./components/Manageusers/UpdateusersDetails";
import { getusers } from "./components/Manageusers/getAllUsers";
import { Addlawyer } from "./components/Manageusers/Addlawyer";
import { NavLinks } from "./components/navbar/navLinks";
import { MobileNavLinks } from "./components/navbar/mobileNavLinks";
import { Deleteuser } from "./components/Manageusers/DeleteUser";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<DashboardPage/>}></Route>
        <Route path="/AddUsers" element={<Addusers/>}></Route>
        <Route path="/AllUsers" Component={getusers}></Route>
        <Route path="/deletelawyer" element={<Deletelawyer/>}></Route>
        <Route path="/UpdateUsers" element={<UpdateusersDetails/>}></Route>
        <Route path="/deleteUsers" element={<Deleteuser/>}></Route>
        <Route path="/AddLawyer" element={<Addlawyer/>}></Route>
        <Route path="/Navlinks" element={<NavLinks/>}></Route>
        <Route path="/MobNavlinks" element={<MobileNavLinks/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
