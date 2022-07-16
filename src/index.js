import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AddTask from "./AddTask/AddTask";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
   BrowserRouter,
   Routes,
   Route
} from "react-router-dom";
import Update from './Update/Update';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/add" element={<AddTask/>}></Route>
      <Route path="/update/:id" element={<Update/>}></Route>
   </Routes>
   </BrowserRouter>
  
);


