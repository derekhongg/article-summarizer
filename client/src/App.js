import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
