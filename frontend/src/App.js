// import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import Navbar from './Components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Lawyers from './pages/lawyer/lawyer';
import Form from './pages/Appointment/form';


function App() {
  return (
    <div className="App">

      

{/* <BrowserRouter>  */}

     <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/lawyers" element={<Lawyers />} />
    <Route path="/form/:id" element={<Form />} />

    </Routes>
  
   {/* </BrowserRouter> */}
    {/* <Navbar />
    <Register /> */}

  </div>

  );
}

export default App;
