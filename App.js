import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import'bootstrap/dist/js/bootstrap.js';
import { Register } from './component/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loginpage } from './component/login';
import { Customer } from './component/customer';
import { Getdata } from './component/getdata';
import { Getsingle } from './component/singledata';
import { Update } from './component/update';  
import { BookingForm } from './component/booking';
function App() {
  return (
    <>
   {/* <Register/> */}
   <BrowserRouter>
   <Routes>
     <Route path='/' element={[<Loginpage/>]}/>
     <Route path='/register' element={[<Register/>]}/>
     <Route path='/login' element={[<Loginpage/>]}/>
     <Route path='/customer/:id' element={[<Customer/>]}/>
     <Route path='/getdata' element={[<Getdata/>]}/>
     <Route path='/getsingle' element={[<Getsingle/>]}/>
     <Route path='/update/:id' element={[<Update/>]}/>
     <Route path='/booking' element={[<BookingForm/>]}/>
   </Routes>
   </BrowserRouter>
    
    </>
  );
}

export default App;
