import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layaut from "./components/layaut";
import Navbar from "./components/navbar";

import Inicio from './pages/inicio';
import Cursos from './pages/cursos';
import Imagenes from './pages/imagenes';
import Login from './pages/login';
import Registro from './pages/registro';
import Footer from "./components/footer";
import AgregarPublicacion from './pages/publicaciones/agregarPublicacion';

function App() {

  return (
      <div className="">
        <Navbar></Navbar>
        <Layaut>
            <Routes>
              <Route path='/' element={<Inicio></Inicio>}></Route>
              <Route path='/billetes' element={<Cursos></Cursos>}></Route>
              <Route path='/monedas' element={<Imagenes></Imagenes>}></Route>
              <Route path='/suministros' element={<Login></Login>}></Route>
              <Route path='/vendedores' element={<Registro></Registro>}></Route>
              <Route path='/eventos' element={<Registro></Registro>}></Route>
              <Route path='/agregarPublicacion' element={<AgregarPublicacion></AgregarPublicacion>}></Route>
              <Route path='*' element={<Navigate to="/"></Navigate>}></Route>
            </Routes>
        </Layaut>
        <Footer></Footer>
      </div>
  );
}

export default App;
