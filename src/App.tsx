import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import {OrderProduct} from "./Pages/OrderProduct";
import Search from "./components/Search";
import {Delivery} from "./Pages/Delivery";
import {Product} from "./Pages/Product";

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<><Navbar/><OrderProduct/></>} />
            <Route path="/delivery" element={<><Navbar/><Delivery/></>} />
            <Route path="/Product" element={<><Navbar /><Product/></>} />
            <Route path="/Van" element={<><Navbar /></>} />
            <Route path="/Search" element={<><Navbar /><Search/></>} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>

  );
}

export default App;
