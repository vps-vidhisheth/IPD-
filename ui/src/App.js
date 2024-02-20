import React, { useContext } from 'react'
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Vote from './pages/Vote';
import VoteCandidate from './pages/VoteCandidate';
function App() {
  return (
    <div className="background-gradient min-h-screen ">
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/login' element={<Login/>}  />
        <Route path='/register' element={<Register/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/vote' element={<Vote/>} />
        <Route path='/vote-candidate' element={<VoteCandidate/>} />
      </Routes>
    </div>
  );
}

export default App;
