import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import AboutUs from './AboutUs';
import Admin from './Admin';
import AdoptionForm from './AdoptionForm';
import App from '../App';
import ContactUs from './ContactUs';
import Dashboard from './Dashboard';
import DogsAllView from './DogsAllView';
import DogSingleView from './DogSingleView';
import Footer from './Footer';
import Header from './Header';
import UserSignUp from './UserSignUp';
import UserLogIn from './UserLogIn';

const TestComponent = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/about'>AboutUs</Link></li>
                    <li><Link to='/admin'>Admin</Link></li>
                    <li><Link to='/adopt'>AdoptionForm</Link></li>
                    <li><Link to='/app'>App</Link></li>
                    <li><Link to='/contact'>ContactUs</Link></li>
                    <li><Link to='/Dashboard'>DashBoard</Link></li>
                    <li><Link to='/dogs'>DogsAllView</Link></li>
                    <li><Link to='/dog'>DogSingleView</Link></li>
                    <li><Link to='/footer'>Footer</Link></li>
                    <li><Link to='/header'>Header</Link></li>
                    <li><Link to='/login'>UserLogIn</Link></li>
                    <li><Link to='signup'>UserSignUp</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/about' element={<AboutUs />}/>
                <Route path='/admin' element={<Admin />} />
                <Route path='/adopt' element={<AdoptionForm />} />
                <Route path='/app' element={<App />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/dogs' element={<DogsAllView />} />
                <Route path='/dog' element={<DogSingleView />} />
                <Route path='/footer' element={<Footer />} />
                <Route path='/header' element={<Header />} />
                <Route path='/login' element={<UserLogIn />} />
                <Route path='/signup' element={<UserSignUp />} />
            </Routes>
        </div>
    );
}

export default TestComponent;
