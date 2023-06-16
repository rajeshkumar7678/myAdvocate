// import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import Navbar from './Components/Navbar';
import Lawyers from './pages/lawyer/lawyer';

import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">

      

      <Router>
       <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/lawyers" element={<Lawyers />} />

      </Routes>
     </Router>
     
      <Navbar />
      <Register />

    </div>
  );
}

export default App;
