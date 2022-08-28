import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from './components/login'
import Home from './components/home'
import UserRegister from './components/userRegister';
import {useSelector} from 'react-redux'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const userLogued = useSelector(state => state.userLogued)
  useEffect(() => {
    if(userLogued.email){
      setIsLoggedIn(true)
    }
  } , [userLogued])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ isLoggedIn === true ? <Home/> : <Login/> }/>
        <Route path='/sing-in' element={ isLoggedIn === true ? <Home/> : <Login/> }/>
        <Route path='/register' element={<UserRegister/>}/>
      </Routes>
    </div>
  );
}

export default App;
