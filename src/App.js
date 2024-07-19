import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainContainer } from './main/Main';
import Header from './main/header/Header';
import Body from './main/body/Body';
import Footer from './main/footer/Footer';
import Login from './member/Login';
import SignUp from './member/SignUp';

function App() {
  return (
    <MainContainer color='black'>
      <Header/>
      <Routes>
        <Route path='/' element={<Body />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer/>
    </MainContainer>
  );
}

export default App;