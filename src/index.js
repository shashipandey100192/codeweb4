import React from 'react';
import ReactDOM from 'react-dom/client';
import Abc from './About';
import { Mypage , Mypage1 } from './About';
import Mycontact from './Contactus';
import Mystate from './Mystate';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Abc/>
   <Mypage></Mypage>
   <Mypage1></Mypage1>
   <Mycontact></Mycontact>
   <Mystate/>
  
  </React.StrictMode>
);
