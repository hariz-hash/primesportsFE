import React from 'react';
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import LandingPage from './pages/LandingPage';
import Shoes from './pages/Shoes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Login  from'./pages/Login';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
 //components


//providers//
import ShoeProvider from './providers/ShoeProvider';

function App() {
  return (
    <div>
        <Router>
        <ShoeProvider>

        <Navigation />
        </ShoeProvider>

            <Routes>
               <Route path='/' element={
                <LandingPage />
               }>
               </Route>
               <Route path='/search' element={
                          <ShoeProvider>
                              <Shoes />
                          </ShoeProvider>

               }>
               </Route>
               <Route path='/login' element={
                       <Login />

               }>
               </Route>
               <Route path='/cart' element={
                <Cart />
               }></Route>
               <Route path='/orders' element={
                <Orders />
               }></Route>
            </Routes> 
         </Router>
    </div>
  );
}

export default App;
