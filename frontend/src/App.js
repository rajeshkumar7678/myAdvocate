// import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes,Route, BrowserRouter} from "react-router-dom";

import Navbar from './Components/Navbar';
import Lawyers from './pages/lawyer/lawyer';

import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">

<Navbar />

    <BrowserRouter>
      <Router>
       <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/lawyers" element={<Lawyers />} />

      </Routes>
     </Router>
     </BrowserRouter>
     
    
   

    </div>
  );
}

export default App;
