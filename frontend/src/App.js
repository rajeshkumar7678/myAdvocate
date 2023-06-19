// import logo from './logo.svg';
import './App.css';

import { Routes,Route} from "react-router-dom";

// import Navbar from './Components/Navbar';

import Register from './pages/Register';
import Login from './pages/Login';
import Lawyers from './pages/lawyer/lawyer';
import Form from './pages/Appointment/form';
import Userdesh from './pages/Userdeshboard/userdesh';
import Home from "./pages/home"
import ConfirmationPage from './pages/Conformpage/ConfirmationPage';


const App = () => {
  return (
    <div className="App">




{/* <BrowserRouter> 
     <Router> */}
     <Routes>
     <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/lawyers" element={<Lawyers />} />
    <Route path="/form/:id" element={<Form />} />
    <Route path="/userdesh" element={<Userdesh />} />
    <Route path="/confornpage" element={<ConfirmationPage />} />


    </Routes>
    {/* </Router>
   
   </BrowserRouter> */}
    {/* <Navbar />
    <Register /> */}

  </div>


  );
};

export default App;
