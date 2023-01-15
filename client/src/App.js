import './App.css';
import Nav from './components/Nav/Nav';
import Register from './components/Register/Register';
import Login from './components/Login/login.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home.component.jsx'
import Summarize from './components/Summarize/Summarize';

function App() {
  return (
    <div className="App bg-gray-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav/>}>
            <Route index={true} element={<Home />} />
            <Route path="/signup" element={<Register/>}/>
            
            {/* for future article summaries */}
            {/* <Route path="article/*" element={<Shop />} /> */}
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/summarize" element={<Summarize/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
