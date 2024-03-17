import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Bsnav from './pages/Bsnav';
import Bscontact from './pages/Bscontact';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Bshome from './pages/Bshome';
import Bsabout from './pages/Bsabout';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Bsnav></Bsnav>
    <Routes>
      <Route path='/' element={<Bshome/>}/>
      <Route path='/about' element={<Bsabout/>}/>
      <Route path='/contact' element={<Bscontact/>}/>

    </Routes>

   
    
    </BrowserRouter>
  </React.StrictMode>
);
