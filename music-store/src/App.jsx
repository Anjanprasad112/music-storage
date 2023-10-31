// import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar';
import Add from './components/Add';
import List from './components/List';
import Error from './components/Error';
import UserList from './users/UserList';
import UserDetails from './users/UserDetails';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route index element={<Add/>}/>
      <Route exact path='/add' element={<Add/>}/>
      {/* <Route exact path='/list' element={<List/>}/> */}
      <Route exact path="*" element={<Error />} />
      <Route exact path="/list" element={<UserList/>} />
      <Route path="/user/:userId" element={<UserDetails/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
