import React from "react";
import { Routes,Route } from "react-router-dom";


import "./App.css";

import Nav from "./NavComponent/Nav";
import NewNav from "./Newnav/NewNav";
import Maincomp from "./home/Maincomp";
import Footer from "./footer/Footer";
import Signup from "./signup_signin/SignUp";
import Sign_in from "./signup_signin/Sign_in";
import Cart from "./cart/Cart"
import { Provider } from 'react-redux';
import store from './store/store';



function App() {
return (
  <div className="app">
    <Provider store={store} >
   <Nav />
   <NewNav />
   <Routes>
    <Route path="/" element={<Maincomp />}/>
    <Route path="/register" element={<Signup />}/>
    <Route path="/login" element={<Sign_in />}/>
    <Route path="/cart" element={<Cart />}/>
   </Routes>

   <Footer />
   </Provider>
  </div>
);
}
export default App;
