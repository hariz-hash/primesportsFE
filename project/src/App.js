import React from 'react';
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import LandingPage from './pages/LandingPage';
import Shoes from './pages/Shoes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
 //components


//providers//
import ShoeProvider from './providers/ShoeProvider';

function App() {
  return (
    <div>
        <Router>
        <Navigation />
            <Routes>
               <Route path='/' element={
                <LandingPage />
               }>
               </Route>
               <Route path='/search' element={
                <Shoes />
               }>
               </Route>
               <Route path='/login' element={
                <Shoes />
               }>
               </Route>
            </Routes> 
         </Router>
    </div>
  );
}

export default App;
