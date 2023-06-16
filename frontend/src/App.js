// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

// import Navbar from './Components/Navbar';
// import Register from './pages/Register';
import Lawyers from './pages/lawyer/lawyerpage';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Register /> */}
      <Routes >
      <Route path="/lawyers" element={<Lawyers />} />
      </Routes>
    </div>
  );
}

export default App;
