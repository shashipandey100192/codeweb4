import React from 'react';
import ReactDOM from 'react-dom/client';
import Abc from './About';
import { Mypage , Mypage1 } from './About';
import Mycontact from './Contactus';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Abc/>
   <Mypage></Mypage>
   <Mypage1></Mypage1>
   <Mycontact></Mycontact>
  
  </React.StrictMode>
);
