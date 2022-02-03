import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

import './App.css';
import UserLogIn from './components/UserLogIn';
import UserSignUp from './components/UserSignUp';

const App = () => {
    return (
        <div className="App">

            <Header />
            <Routes>
              <Route path='/' element={<Dashboard />}/>
              <Route path='/login' element={<UserLogIn />} />
              <Route path='/signup' element={<UserSignUp />} />
            </Routes>
  
        </div>
    );
}

export default App;
