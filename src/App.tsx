import React, { FC } from 'react';
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listpro from './components/Listpro';
import Add from './components/Add';
import SProvider from './context/searchcontext';
const App :FC=()=>{
  return (
     <>
     <SProvider>
     <BrowserRouter>
      <Nav/>
         <Routes>
          <Route path='/' element={<Listpro />} />
          <Route path='/add' element={<Add />} />
         </Routes>
      </BrowserRouter>
      </SProvider>
     </>
  )
}

export default App
